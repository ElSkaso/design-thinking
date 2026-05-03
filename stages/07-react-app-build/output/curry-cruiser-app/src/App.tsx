import { useMemo, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { colors, typography } from "./designTokens";

type Step = "select" | "customize" | "cart" | "received";
type CurryId = "green" | "red" | "yellow";
type OrderState = "Confirmed" | "In progress" | "Finished";

type Curry = {
  id: CurryId;
  name: string;
  description: string;
  price: number;
  baseline: string;
  badges: string[];
  available: boolean;
  popular?: string;
};

type Option = {
  label: string;
  detail?: string;
  disabled?: boolean;
};

type DishDraft = {
  curry: CurryId;
  base: string;
  protein: string;
  spice: string;
  addons: string[];
  dietary: string[];
};

type CartItem = DishDraft & {
  id: number;
};

const curries: Curry[] = [
  {
    id: "green",
    name: "Green Curry",
    description: "Fresh herbs, coconut, basil, and bright green chili.",
    price: 12.5,
    baseline: "Medium heat",
    badges: ["Vegetarian possible", "Contains soy"],
    available: true,
    popular: "Popular",
  },
  {
    id: "red",
    name: "Red Curry",
    description: "Rich coconut curry with red chili and bamboo shoots.",
    price: 12,
    baseline: "Bold spice",
    badges: ["Contains fish sauce"],
    available: true,
  },
  {
    id: "yellow",
    name: "Yellow Curry",
    description: "Mild turmeric curry with potato and onion.",
    price: 11.5,
    baseline: "Mild",
    badges: ["Vegetarian possible"],
    available: false,
  },
];

const bases: Option[] = [
  { label: "Jasmine rice" },
  { label: "Brown rice" },
  { label: "Noodles" },
  { label: "No base" },
];

const proteins: Option[] = [
  { label: "Tofu" },
  { label: "Chicken" },
  { label: "Vegetables" },
  { label: "Shrimp", detail: "Sold out", disabled: true },
];

const spices: Option[] = [
  { label: "Mild", detail: "Warm, low heat" },
  { label: "Medium", detail: "Noticeable heat" },
  { label: "Hot", detail: "Strong heat" },
  { label: "Thai hot", detail: "Very intense" },
];

const addons: Option[] = [
  { label: "Extra vegetables" },
  { label: "Herbs" },
  { label: "Crispy shallots" },
];

const dietaryOptions: Option[] = [
  { label: "Vegetarian possible" },
  { label: "Contains soy" },
  { label: "Contains fish sauce" },
  { label: "Ask staff for allergy concerns" },
];

const defaultDraft: DishDraft = {
  curry: "green",
  base: "Jasmine rice",
  protein: "Tofu",
  spice: "Medium",
  addons: ["Herbs"],
  dietary: ["Vegetarian possible", "Contains soy"],
};

function App() {
  const [step, setStep] = useState<Step>("select");
  const [draft, setDraft] = useState<DishDraft>(defaultDraft);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [nextItemId, setNextItemId] = useState(1);
  const [orderNumber, setOrderNumber] = useState("#24");
  const [orderState, setOrderState] = useState<OrderState>("Confirmed");
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [lastAddedDish, setLastAddedDish] = useState<string | null>(null);

  const selectedCurry = getCurry(draft.curry);
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + getItemPrice(item), 0),
    [cart]
  );

  const startDish = (curry: Curry) => {
    if (!curry.available) return;
    setLastAddedDish(null);
    setDraft({
      ...defaultDraft,
      curry: curry.id,
      dietary: Array.from(new Set(curry.badges.filter((badge) => !badge.includes("heat")))),
    });
    setEditingId(null);
    setStep("customize");
  };

  const addDishToCart = () => {
    const addedDishName = getCurry(draft.curry).name;
    if (editingId !== null) {
      setCart((current) =>
        current.map((item) => (item.id === editingId ? { ...draft, id: editingId } : item))
      );
      setEditingId(null);
      setLastAddedDish(`${addedDishName} updated in cart`);
      setStep("cart");
    } else {
      setCart((current) => [...current, { ...draft, id: nextItemId }]);
      setNextItemId((current) => current + 1);
      setLastAddedDish(`${addedDishName} added to cart`);
      setStep("select");
    }
  };

  const editCartItem = (item: CartItem) => {
    setDraft({
      curry: item.curry,
      base: item.base,
      protein: item.protein,
      spice: item.spice,
      addons: item.addons,
      dietary: item.dietary,
    });
    setEditingId(item.id);
    setStep("customize");
  };

  const removeCartItem = (itemId: number) => {
    setCart((current) => current.filter((item) => item.id !== itemId));
    setLastAddedDish(null);
  };

  const confirmOrder = () => {
    if (!cart.length) return;
    setConfirmError(false);
    setIsConfirming(true);
    window.setTimeout(() => {
      setIsConfirming(false);
      setOrderNumber(`#${24 + cart.length}`);
      setOrderState("Confirmed");
      setStep("received");
    }, 750);
  };

  const resetOrder = () => {
    setDraft(defaultDraft);
    setCart([]);
    setEditingId(null);
    setLastAddedDish(null);
    setOrderState("Confirmed");
    setStep("select");
  };

  return (
    <main
      className="app-page"
      style={{ fontFamily: typography.body, color: colors.ink }}
    >
      <div className="app-shell">
        <section className="app-surface">
          {step !== "customize" && <Header cartCount={cart.length} />}
          {step !== "customize" && (
            <div className="pb-24">
              {step === "select" && (
                <SelectDishScreen
                  startDish={startDish}
                  cart={cart}
                  lastAddedDish={lastAddedDish}
                />
              )}
              {step === "cart" && (
                <CartScreen
                  cart={cart}
                  total={total}
                  editCartItem={editCartItem}
                  removeCartItem={removeCartItem}
                  addAnother={() => setStep("select")}
                  confirmOrder={confirmOrder}
                  isConfirming={isConfirming}
                  confirmError={confirmError}
                  setConfirmError={setConfirmError}
                />
              )}
              {step === "received" && (
                <OrderReceivedScreen
                  cart={cart}
                  total={total}
                  orderNumber={orderNumber}
                  orderState={orderState}
                  setOrderState={setOrderState}
                  resetOrder={resetOrder}
                />
              )}
            </div>
          )}
        </section>
      </div>
      {step === "customize" && (
        <CustomizeScreen
          draft={draft}
          curry={selectedCurry}
          setDraft={setDraft}
          addDishToCart={addDishToCart}
          cancel={() => setStep(cart.length ? "cart" : "select")}
          editing={editingId !== null}
        />
      )}
      {step === "select" && (
        <CartFab cartCount={cart.length} onClick={() => setStep("cart")} />
      )}
    </main>
  );
}

function Header({ cartCount }: { cartCount: number }) {
  return (
    <header className="app-header">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Open today · pickup 8-12 min</p>
          <h1 className="app-title">Curry Cruiser</h1>
          <p className="app-subtitle">Choose curries, add them to cart, and send one clear ticket to the truck.</p>
        </div>
        <div className="cart-pill" aria-label={`${formatDishCount(cartCount)} in cart`}>
          <span>Dishes</span>
          <strong>{cartCount}</strong>
        </div>
      </div>
    </header>
  );
}

function CartFab({ cartCount, onClick }: { cartCount: number; onClick: () => void }) {
  return (
    <button
      className="cart-fab"
      type="button"
      disabled={!cartCount}
      onClick={onClick}
      aria-label={`View cart, ${formatDishCount(cartCount)}`}
    >
      <span className="material-symbols-outlined" aria-hidden="true">shopping_cart</span>
      {cartCount > 0 && <span className="cart-fab-count" aria-hidden="true">{cartCount}</span>}
    </button>
  );
}

function SelectDishScreen({
  startDish,
  cart,
  lastAddedDish,
}: {
  startDish: (curry: Curry) => void;
  cart: CartItem[];
  lastAddedDish: string | null;
}) {
  return (
    <section className="screen-stack cart-screen">
      <div className="screen-heading">
        <h2>Currys</h2>
      </div>

      {(lastAddedDish || cart.length > 0) && (
        <div className="status-banner" role="status">
          <div>
            <strong>{lastAddedDish ?? `${formatDishCount(cart.length)} in cart`}.</strong>
          </div>
        </div>
      )}

      <div className="dish-grid">
        {curries.map((curry) => (
          <article
            key={curry.id}
            className={`dish-card ${curry.available ? "" : "dish-card-disabled"}`}
            role={curry.available ? "button" : undefined}
            tabIndex={curry.available ? 0 : undefined}
            aria-disabled={curry.available ? undefined : true}
            aria-label={
              curry.available
                ? `${curry.name}, ${curry.description}, $${curry.price.toFixed(2)}. Open customization.`
                : `${curry.name}, sold out`
            }
            onClick={() => {
              if (curry.available) startDish(curry);
            }}
            onKeyDown={(event) => {
              if (!curry.available) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                startDish(curry);
              }
            }}
          >
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3>{curry.name}</h3>
                  <p>{curry.description}</p>
                </div>
                <span className="shrink-0 text-sm font-bold">${curry.price.toFixed(2)}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>{curry.baseline}</Badge>
                {curry.popular && <Badge>{curry.popular}</Badge>}
                {curry.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
                {!curry.available && <Badge tone="warning">Sold out</Badge>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="caution-strip">
        <strong>Allergy note:</strong> For allergy concerns, speak to Curry Cruiser
        staff before ordering.
      </div>
    </section>
  );
}

function CustomizeScreen({
  draft,
  curry,
  setDraft,
  addDishToCart,
  cancel,
  editing,
}: {
  draft: DishDraft;
  curry: Curry;
  setDraft: Dispatch<SetStateAction<DishDraft>>;
  addDishToCart: () => void;
  cancel: () => void;
  editing: boolean;
}) {
  const toggleArrayValue = (field: "addons" | "dietary", value: string) => {
    setDraft((current) => {
      const exists = current[field].includes(value);
      return {
        ...current,
        [field]: exists
          ? current[field].filter((item) => item !== value)
          : [...current[field], value],
      };
    });
  };

  return (
    <section className="customize-layer" aria-label={`${curry.name} customization`}>
      <button className="back-bar" type="button" onClick={cancel}>
        <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
        <span>Back</span>
      </button>
      <div className="screen-stack customize-screen">
      <div className="selected-dish-panel">
        <div className="selected-dish-content">
          <div className="selected-dish-heading">
            <div>
              <h2>{curry.name}</h2>
              <p>{curry.description}</p>
            </div>
            <strong>${curry.price.toFixed(2)}</strong>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge>{curry.baseline}</Badge>
            {curry.popular && <Badge>{curry.popular}</Badge>}
            {curry.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
            {!curry.available && <Badge tone="warning">Sold out</Badge>}
          </div>
        </div>
      </div>

      <OptionGroup
        label="Base"
        options={bases}
        selected={draft.base}
        onSelect={(base) => setDraft((current) => ({ ...current, base }))}
      />
      <OptionGroup
        label="Protein"
        options={proteins}
        selected={draft.protein}
        onSelect={(protein) => setDraft((current) => ({ ...current, protein }))}
      />
      <OptionGroup
        label="Spice"
        options={spices}
        selected={draft.spice}
        onSelect={(spice) => setDraft((current) => ({ ...current, spice }))}
      />
      <MultiOptionGroup
        label="Add-ons"
        options={addons}
        selected={draft.addons}
        onToggle={(value) => toggleArrayValue("addons", value)}
      />
      <MultiOptionGroup
        label="Dietary notes"
        options={dietaryOptions}
        selected={draft.dietary}
        onToggle={(value) => toggleArrayValue("dietary", value)}
      />

      <div className="fixed-submit-bar">
        <div>
          <p className="text-sm font-bold">{editing ? "Updating dish" : "Ready to add"}</p>
          <p className="text-xs text-muted">
            {curry.name}: {draft.base}, {draft.protein}, {draft.spice}
          </p>
        </div>
        <button className="primary-button" onClick={addDishToCart}>
          {editing ? "Update dish" : "Add dish to cart"}
        </button>
      </div>
      </div>
    </section>
  );
}

function CartScreen({
  cart,
  total,
  editCartItem,
  removeCartItem,
  addAnother,
  confirmOrder,
  isConfirming,
  confirmError,
  setConfirmError,
}: {
  cart: CartItem[];
  total: number;
  editCartItem: (item: CartItem) => void;
  removeCartItem: (itemId: number) => void;
  addAnother: () => void;
  confirmOrder: () => void;
  isConfirming: boolean;
  confirmError: boolean;
  setConfirmError: (value: boolean) => void;
}) {
  return (
    <section className="screen-stack">
      <div className="screen-heading">
        <p className="eyebrow">Confirm order</p>
        <h2>Review cart</h2>
        <p>
          Check every dish before the full order is sent to Curry Cruiser.
        </p>
      </div>

      {confirmError && (
        <div className="error-banner" role="alert">
          Confirmation failed in this prototype state. Try again or order at the counter.
        </div>
      )}

      {!cart.length ? (
        <div className="empty-state">
          <h3 className="font-bold">Your cart is empty</h3>
          <p className="mt-1 text-sm text-muted">Select a dish to begin the order.</p>
          <button className="primary-button mt-4" onClick={addAnother}>
            Select a dish
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {cart.map((item, index) => (
            <CartItemCard
              key={item.id}
              item={item}
              index={index}
              editCartItem={editCartItem}
              removeCartItem={removeCartItem}
            />
          ))}
        </div>
      )}

      <button className="text-button w-full" onClick={() => setConfirmError(true)}>
        Show connection issue
      </button>

      <div className="fixed-submit-bar cart-submit-bar">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="font-bold">{formatDishCount(cart.length)} ready</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <p className="mt-1 text-xs text-muted">
            Finished order numbers will be called out at the truck.
          </p>
        </div>
        <div className="cart-submit-actions">
          <button className="secondary-button" onClick={addAnother}>
            Add another dish
          </button>
          <button
            className="primary-button"
            disabled={!cart.length || isConfirming}
            onClick={confirmOrder}
          >
            {isConfirming ? "Sending order..." : "Confirm full order"}
          </button>
        </div>
      </div>
    </section>
  );
}

function CartItemCard({
  item,
  index,
  editCartItem,
  removeCartItem,
}: {
  item: CartItem;
  index: number;
  editCartItem: (item: CartItem) => void;
  removeCartItem: (itemId: number) => void;
}) {
  const curry = getCurry(item.curry);
  return (
    <article className="cart-item">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="mt-1 text-lg font-bold">{curry.name}</h3>
        </div>
        <span className="font-bold">${getItemPrice(item).toFixed(2)}</span>
      </div>
      <dl className="ticket-details">
        <dt>Base</dt>
        <dd>{item.base}</dd>
        <dt>Protein</dt>
        <dd>{item.protein}</dd>
        <dt>Spice</dt>
        <dd>{item.spice}</dd>
        <dt>Add-ons</dt>
        <dd>{item.addons.length ? item.addons.join(", ") : "None"}</dd>
      </dl>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.addons.map((addon) => (
          <Badge key={addon}>{addon}</Badge>
        ))}
        {item.dietary.map((note) => (
          <Badge key={note}>{note}</Badge>
        ))}
      </div>
      <div className="cart-item-actions">
        <button
          className="icon-button"
          aria-label={`Edit ${curry.name}, dish ${index + 1}`}
          onClick={() => editCartItem(item)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">edit</span>
        </button>
        <button
          className="icon-button icon-button-danger"
          aria-label={`Delete ${curry.name}, dish ${index + 1}`}
          onClick={() => removeCartItem(item.id)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">delete</span>
        </button>
      </div>
    </article>
  );
}

function OrderReceivedScreen({
  cart,
  total,
  orderNumber,
  orderState,
  setOrderState,
  resetOrder,
}: {
  cart: CartItem[];
  total: number;
  orderNumber: string;
  orderState: OrderState;
  setOrderState: (state: OrderState) => void;
  resetOrder: () => void;
}) {
  return (
    <section className="screen-stack">
      <div className="status-hero">
        <p className="eyebrow">Order received</p>
        <h2>{orderNumber}</h2>
        <p>
          Keep this number nearby. Finished order numbers will be called out at the truck.
        </p>
      </div>

      <div className="state-panel">
        <h3 className="font-bold">Order state</h3>
        <div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-label="Order state">
          {(["Confirmed", "In progress", "Finished"] as OrderState[]).map((state) => (
            <button
              key={state}
              type="button"
              className={`control text-sm ${orderState === state ? "control-selected" : ""}`}
              aria-pressed={orderState === state}
              onClick={() => setOrderState(state)}
            >
              {state}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          Current state: <strong>{orderState}</strong>
        </p>
      </div>

      <div className="confirmed-panel">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Confirmed dishes</h3>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <div className="mt-3 space-y-3">
          {cart.map((item, index) => (
            <OrderTicketLine key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <button className="primary-button w-full" onClick={resetOrder}>
        Start new order
      </button>
    </section>
  );
}

function OrderTicketLine({ item, index }: { item: CartItem; index: number }) {
  const curry = getCurry(item.curry);
  return (
    <article className="ticket-line">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Dish {index + 1}
          </p>
          <h4 className="font-bold">{curry.name}</h4>
        </div>
        <span className="font-bold">${getItemPrice(item).toFixed(2)}</span>
      </div>
      <dl className="mt-3 grid grid-cols-[84px_1fr] gap-x-3 gap-y-2 text-sm">
        <dt className="font-semibold text-muted">Base</dt>
        <dd>{item.base}</dd>
        <dt className="font-semibold text-muted">Protein</dt>
        <dd>{item.protein}</dd>
        <dt className="font-semibold text-muted">Spice</dt>
        <dd>{item.spice}</dd>
        <dt className="font-semibold text-muted">Add-ons</dt>
        <dd>{item.addons.length ? item.addons.join(", ") : "None"}</dd>
        <dt className="font-semibold text-muted">Dietary</dt>
        <dd>{item.dietary.length ? item.dietary.join(", ") : "None selected"}</dd>
      </dl>
    </article>
  );
}

function OptionGroup({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: Option[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-bold">{label}</legend>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            disabled={option.disabled}
            className={`choice ${selected === option.label ? "choice-selected" : ""}`}
            aria-pressed={selected === option.label}
            onClick={() => onSelect(option.label)}
          >
            <span>{option.label}</span>
            {option.detail && <small>{option.detail}</small>}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function MultiOptionGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: Option[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-bold">{label}</legend>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            className={`choice text-left ${selected.includes(option.label) ? "choice-selected" : ""}`}
            aria-pressed={selected.includes(option.label)}
            onClick={() => onToggle(option.label)}
          >
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "warning";
}) {
  return (
    <span className={`badge ${tone === "warning" ? "badge-warning" : ""}`}>
      {children}
    </span>
  );
}

function getCurry(curryId: CurryId) {
  return curries.find((curry) => curry.id === curryId) ?? curries[0];
}

function getItemPrice(item: DishDraft) {
  return getCurry(item.curry).price + item.addons.length * 0.75;
}

function formatDishCount(count: number) {
  return `${count} ${count === 1 ? "dish" : "dishes"}`;
}

export default App;
