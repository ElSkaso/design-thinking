# Empathize Reference

Use this reference to turn interview research into human-centered evidence.

## Required Flow

1. Recruit a representative sample or define clearly labeled synthetic participant profiles.
2. Plan relevant, open-ended, clear, neutral, conversational interview questions.
3. Conduct or synthesize interviews that build rapport and gather behavior, context, goals, needs, pain points, emotions, and workarounds.
4. Distill each interview into one empathy map.
5. Divide users into groups based on shared characteristics, goals, or needs.
6. Create one persona for each user group.
7. Include one compelling one-sentence user story inside each persona.
8. Map one user journey for each persona.

If real users are unavailable, clearly mark interview outputs and participant profiles as hypothesis-based and identify what future research must validate.

## Empathize Artifact Structure

Write the artifact with exactly these content sections:

```markdown
# Empathize Artifacts: [Project]

## Participant Sample

## Interview Questions

## Interview Summaries

## Empathy Maps

## User Groups

## Personas

## User Stories

## Journey Maps

## Accessibility And Edge Cases

## Research Limits
```

Use evidence basis, confidence, assumptions, and design implications inside the relevant artifact sections.

## Participant Sample

Representative means fit for the project context, not statistically representative.

Include:

- Target participant groups
- Sample criteria
- Recruitment rationale
- Real or synthetic participant labels
- Evidence limits

The sample should include users who match the assumed target audience and, when useful, users who challenge the main assumption.

## Interview Questions

Questions should be:

- Relevant to the research goal
- Open-ended
- Clear
- Neutral
- Conversational
- Focused on past behavior, context, motivation, and pain

Avoid asking users to design the solution.

Useful patterns:

- "Tell me about the last time you..."
- "What made that difficult?"
- "What did you try before?"
- "How did you know you were done?"
- "What would happen if this problem stayed unsolved?"

## Interview Summaries

Capture rapport-building context and user language.

```markdown
## Interview Summary: [PARTICIPANT_LABEL]
- Participant fit:
- Context:
- Goals:
- Needs:
- Pain points:
- Behaviors:
- Workarounds:
- Quotes:
- Emotions:
- Surprises:
- Design implications:
- Confidence:
```

## Empathy Maps

Create one empathy map per interview before creating personas.

```markdown
## Empathy Map: [PARTICIPANT_LABEL]
- Says:
- Thinks:
- Does:
- Feels:
- Pains:
- Gains:
- Evidence:
- Design implications:
```

## User Groups

Group users after individual empathy maps are complete.

Group by shared:

- Characteristics
- Goals
- Needs
- Behaviors
- Pain points
- Contexts or constraints

Name the evidence pattern that justifies each group.

## Personas

Create one persona for each user group. Personas should be research-backed summaries, not fictional decorations.

Include:

- Name or label
- Represented user group
- Role/context
- Goals
- Needs
- Pain points
- Behaviors
- Motivations
- Accessibility or situational constraints
- Evidence notes
- One-sentence user story
- Design implication
- Confidence

Quality check:

- Each persona represents a distinct user group.
- The persona affects design choices.
- The persona is not defined only by demographics.

## User Stories

Each persona must include one compelling one-sentence user story:

```text
As a [USER_TYPE], I want to [ACTION_OR_GOAL], so that [BENEFIT_OR_REASON].
```

Good stories are specific enough to guide design, but broad enough to allow multiple implementation choices.

## User Journeys And Journey Maps

Create one journey map for each persona.

Include:

- Persona
- Scenario
- Stages
- User actions
- Thoughts/questions
- Emotions
- Pain points
- Opportunities
- Design implications

Review for:

- Clear beginning and end
- Emotional changes over the journey
- Friction points connected to interview evidence
- Opportunities that can inform features or content

## Accessibility And Edge Cases

Consider permanent, temporary, and situational constraints across:

- Touch and motor control
- Vision
- Hearing
- Speech
- Cognition, memory, and learning
- Device, bandwidth, lighting, language, stress, and time pressure

Apply the curb-cut effect: improvements for constrained users often improve the experience for everyone.

## Empathize Quality Check

- Participants or synthetic profiles match the target users and constraints.
- Interview questions are relevant, open-ended, clear, neutral, and conversational.
- Interviews gather rapport, behavior, context, goals, needs, pain points, and emotions.
- Each interview is distilled into one empathy map.
- User groups are based on shared characteristics, goals, or needs.
- Each user group has one persona.
- Each persona includes one compelling one-sentence user story.
- Each persona has one journey map.
- Research claims are separated from assumptions.
- Each major insight can be traced to interview evidence or marked for validation.
