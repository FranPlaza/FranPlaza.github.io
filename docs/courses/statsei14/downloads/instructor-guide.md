# Updated delivery route: three guided tutorials

Use `practical.html` as the entry point. The temporal guide is the live core; maps and graphs are complete laboratory extensions. Participants open blank Colab notebooks, copy numbered blocks and download the pinned frozen pack automatically. The matching notebooks are an alternative. Every guide has collapsible prepared local outputs; switch to those when a participant cannot execute. A local fresh-kernel check does not certify actual Colab execution.

Explain regional versus per-cell targets before comparing spatial scores. The six cells are identical across maps and graphs. All three tutorials evaluate validation only, retain all seeds and preserve the earlier test evidence. Use the original LSTM/ETAS-inspired exercise as a separate feature experiment. The existing slide deck retains its research narrative; use the web guide for the current code sequence.

For live pacing: shared preparation and one history first; then the four model definitions; finally the probability comparison. Show the spatial input/output diagrams and leave their full execution for laboratory time. Do not promise a runtime based on the local CPU timing.

The earlier instructor material follows as reference context for the original notebooks.

# Instructor guide

Francisco Plaza-Vega · STATSEI14 · 13 October 2026, 11:30–12:30

## Teaching emphasis
The session follows one question: **how can flexible learning tools help us represent
seismic history and investigate what follows?** Move from examples in seismology,
through a brief architecture introduction, to the Spatial Statistics study and
Isidora's thesis/subsequent manuscript. Each research example should identify its
question, representation, output and evidence before any result is interpreted.

Participants are researchers with heterogeneous Python and deep learning experience.
Do not assume that research seniority implies familiarity with Keras. Offer two ways
to participate: run a small code change, or formulate a hypothesis and interpret the
prepared output. Both routes investigate the same scientific question.
Use the familiar distinction between a statistical model, its parameters and a loss.
MLP, CNN and LSTM describe architectures; generative modelling describes a modelling
objective and may use these architectures. Keep the introduction short enough to
make the author's research the central motivation.

The practical asks for the probability of at least one M >= 5 catalogue event in
a seven-day regional horizon. Explicitly distinguish this target from an
ETAS-derived intensity maximum, its macrozone and an aftershock sequence.
The ETAS-inspired feature is an input representation. The exercise does not fit
ETAS or train a GAN; the proposed ETAS–GAN extension has no empirical implementation
in the practical or manuscript discussed here.

Keep the pandas, NumPy and Keras cells visible. Show Sequential, compile, fit and
predict directly. The thread remains question → representation → model and loss →
evidence, including when an added feature produces little or no improvement.
A separate Transformer demo finishes the comparison: flexibility creates modelling
options, while evidence concerns a particular representation, target and protocol.

## Exact schedule

| Minutes | Activity |
|---|---|
| 00–05 | DL in seismology: examples, citations and scientific questions |
| 05–10 | MLP, CNN, LSTM and generative modelling: a compact map |
| 10–20 | Spatial Statistics and Isidora's work: representations, targets and evidence |
| 20–25 | Research-to-practice bridge; explain the weekly target |
| 25–28 | Open Colab and load the frozen catalogue |
| 28–32 | Follow one window, label and chronological split |
| 32–38 | Training-prevalence and logistic baselines; LSTM definition and first fit |
| 38–43 | State a hypothesis and complete the feature-addition exercise |
| 43–48 | Fixed-protocol evaluation of the LSTM exercise |
| 48–56 | Transformer demo: written model and prepared three-seed results |
| 56–60 | Discussion: evidence, possible explanations and follow-up work |

Protect **25 minutes of presentation, 23 minutes of LSTM practice, eight minutes of
Transformer demonstration and four minutes of discussion**. Give each research study
about five minutes. The architecture introduction supplies a map, not derivations
of every architecture. Longer implementation and sensitivity work belong in the
laboratory week.

## Research-to-practice transitions
After the architecture introduction, ask what each architecture makes convenient
to represent rather than assigning an architecture to a single scientific task.
A CNN can process local structure; an LSTM can summarize an ordered sequence;
generation requires a sampling model and an appropriate training objective.

For the two research blocks, use the same sequence: question, data representation,
learning task, result, remaining question. Keep T25 and M26 results separate.
At minute 20, connect the research to a new teaching target:

> We have changed both how seismic activity is represented and what the model is
> asked to learn. We will now build a small version of that process: represent
> 30 days of activity, learn a probability for the following week, and test what
> changes when we supply a magnitude- and time-weighted summary.

The connection is the modelling process. The practical is not a reproduction of
P21, T25 or M26, and its scores do not validate those research results.

## Before participants arrive
1. Open the HTML slides and check the PDF backup.
2. Download the complete course pack on the presentation machine.
3. Open the participant notebook in a fresh CPU runtime. Public Colab links require
   the author's manual upload to GitHub.
4. Keep the solved LSTM HTML and original reference figures open. Also open
   `downloads/transformer-demo-solved.html` and the separate three-seed pilot figure.
   Keep `notebooks/transformer-demo.ipynb` available for reading the model definition.
5. Check source timestamps and the official programme again.
6. Avoid an untested dependency upgrade immediately before teaching.

The local execution report identifies the measured environment. It does not prove
that a particular Colab CPU will have the same wall-clock time.

## During the practical
Begin by recalling the question → representation → model and loss → evidence chain.
Explain the forecasting origin first. Point to the 30 historical days and the seven
future days. The output is a probability, not a predicted magnitude.

Show the tensor shape. The first axis indexes examples, the second days, the third
features. The presence indicator distinguishes an empty day from a zero-filled
magnitude feature.

Show how normalization is fitted only on training inputs. Validation selects stopping,
not the test set. Target windows crossing a split boundary are excluded. Input
history can reach into a preceding partition because it belongs to the past.

Read the Keras model aloud:

- Input specifies the shape of one example.
- LSTM(16) learns a representation of the daily sequence.
- Dense(1, activation='sigmoid') produces one probability.
- compile chooses the optimizer and loss.
- fit updates weights and monitors validation loss.
- predict applies the fitted network.

The ETAS-inspired feature uses illustrative alpha=1, c=1 day, p=1.1, and the same
30-day history. Its scale is dimensionless; do not label it a fitted occurrence rate.
No retrospective mainshock selection or declustering is required.

## Required exercise
Before the change, ask participants to predict whether larger, more recent events
will provide a useful additional summary for this weekly target. Accept a reasoned
hypothesis of improvement, redundancy or poorer performance.

Participants add the score to the feature list, update the input shape and repeat
the explicit Keras construction and fit. They compare validation scores and explain
what is and is not supported. Ask them to revisit their hypothesis and compare
the effect of the channel in logistic regression and LSTM. The solved notebook
contains a complete comparison.

An improvement, no change, or a worse score is acceptable. The learning outcome is a
controlled comparison and correct interpretation, not defeating a baseline.

## Homework after the session
Point to the [homework guide](https://franplaza.github.io/courses/statsei14/homework.html)
during the final four minutes. Its reading route needs no coding. Its optional
experiment starts from the executable Transformer demo and asks for one bounded
extension: additional predeclared seeds or a positional-encoding ablation.
For either extension, set `RUN_TRAINING = True` and `EVALUATE_TEST = False`, then run
all cells in order. The immutable `PILOT_SEEDS` retains 7, 17 and 27. Route A sets
`SEEDS = [37, 47, 57]` and keeps `REFERENCE_ARCHITECTURE = True`; report the original
and additional validation runs together. Route B retains `SEEDS = [7, 17, 27]`, sets
`REFERENCE_ARCHITECTURE = False`, describes the ablation in `EXTENSION_NOTE`, and
omits only the fixed position-layer call in the copied model. Report every run.
The published test is already inspected and cannot become an untouched confirmation
for a newly selected candidate. A 14-day lookback is a
separate later question, not an additional change to the same comparison.

## Fixed evaluation of the LSTM exercise
Compare training prevalence, logistic regression, logistic regression plus the score,
and the two LSTMs. Show Brier score and log loss together with n and base rate.
For calibration, show the number of cases in each bin; a curve with very small bins
should not be presented as precise evidence.

Weekly target intervals are disjoint, but examples remain dependent. The original
LSTM exercise reports one seed; keep its metrics separate from the three-seed
Transformer pilot. Neither comparison establishes general superiority across
periods, regions or tasks. Seed variability is not uncertainty of generalization.

## Eight-minute Transformer demonstration (48–56)
Use the separate executable demo, `notebooks/transformer-demo.ipynb`, and its prepared
solution, `notebooks/transformer-demo-solved.ipynb` or the downloaded HTML. Do not ask
participants to implement attention from scratch during this block.

| Minutes | What to show | Scientific purpose |
|---|---|---|
| 48–50 | Same 30 × 3 catalogue-only input and weekly target | Identify what stays fixed |
| 50–52 | Projection, position, attention, temporal averaging and sigmoid in the written model | Trace representation to output |
| 52–54 | Prepared validation/test metrics for all seeds 7, 17 and 27 | State the observed comparison |
| 54–56 | One question about representation, information or model assumptions | Separate evidence from a hypothesis |

The compact model has projection width 16, fixed sinusoidal positions, one block
with two attention heads (key dimension 8), a 32→16 feed-forward layer, residual
connections and normalization, temporal averaging and a sigmoid. All input days
precede the forecast origin. This is a weekly occurrence model, not a generative
seismic model or the spatial-grid model in the cited forecasting literature.

Read the pilot's LSTM and Transformer results together: both were fitted on the same
catalogue-only representation across the same three seeds. Do not insert the
original one-seed LSTM results or its ETAS-score variant into this table. The mean
is the average of individual-fit losses, not an ensemble prediction.

Observed evidence: the Transformer had higher Brier and log loss than the LSTM and
both baselines in validation and test for all three seeds. It has 2,305 parameters,
compared with 1,297 for the LSTM. Local fits took 1.34–1.59 versus 2.00–2.05 seconds,
but early stopping ran only 5–9 epochs for the Transformer and 20 for the LSTM.
Do not infer general architectural speed from those different completed workloads.
A fresh Colab execution is still unverified.

The pilot used one fixed architecture, with no tuning after test evaluation. Its
test period had already been inspected: call it an exploratory retrospective
comparison. The figure and CSV files are under `results/transformer-pilot/`.

The scores do not identify a cause. Representation, information available in the
catalogue, inductive bias, training budget and the weekly target are possible
explanations to investigate. Do not claim that seismic complexity caused the result
or that Transformers are generally inferior. Ask participants to specify a new
controlled experiment that could distinguish one hypothesis from another.

## Availability and catalogue caveats
The distributed catalogue is the preferred revised USGS snapshot at retrieval time.
It does not reconstruct every event version visible at each historical forecast.
The updated field is not first publication. Never describe the results as a verified
operational replay or complete as-of reconstruction.

Event-time separation is tested. Exact historical information availability is a
separate unresolved acceptance criterion. Training labels also need a documented
adjudication delay for a strict historical replay.

The input threshold 4.5 is provisional scientific coverage policy supported only by
the training diagnostics provided, not a proof of uniform completeness. Preserve
magType: the catalogue contains several magnitude scales. Empty bins concern
recorded qualifying events, not all physical earthquakes.

The fixed regional box omits external triggering and contains varying network
coverage. Results are not automatically transferable.

## Source distinctions
P21 is the published Nicolis, Plaza and Salas article in Spatial Statistics 42 (2021),
100442, online in 2020. It predicts an ETAS-derived intensity maximum with LSTM and
the macrozone of the maximum with CNN. Its source catalogue is Chile's National
Seismological Center. It does not demonstrate the weekly occurrence task used here.

T25 is Isidora Jara Muñoz's 2025 thesis, supervised by Francisco Plaza Vega.
M26 is the April 2026 manuscript under review by Francisco Plaza-Vega, Isidora Jara,
Orietta Nicolis and Victor Salinas, in that order.

Do not combine the thesis scores with scores from the manuscript under review.
The generative representation has 224 90-minute intervals, not 224 aftershocks.
A maximum per interval discards multiplicity. The marker 2.5 represents absence in
that representation, not a demonstrated globally uniform completeness threshold.

Original PI labels use a mean-reference denominator in the inspected code. Explain
this if showing the inherited figure. Do not call it a last-observation persistence
baseline. Some source threshold code uses > while tables say >=; source metrics
must retain this qualification. The new practical uses >= explicitly.

Random Forest and Gradient Boosting classification results belong to the aggregate
target branch. They are not LSTM or GAN achievements. ETAS–GAN is outside M26's
empirical scope and remains a future proposal.

## Contingencies
At minute 28, switch to the prepared LSTM solution if Colab cannot load. Participants
can still read or modify the feature-selection cell and interpret the saved output.
Do not imply that prepared outputs came from a failed live run. The Transformer
notebook imports TensorFlow even with `RUN_TRAINING = False`; if imports fail, use
`downloads/transformer-demo-solved.html` as the fallback.

If a fit reaches the three-minute budget, use the reference results. Stop new LSTM
changes at minute 43 and begin evaluation. At minute 48, open the prepared
Transformer demonstration; a new live fit is not required. Move to discussion at
minute 56 even if someone has not completed their notebook. Offer the lab week for
implementation questions and the homework extension.

## PDF and local preview
The slides use Quarto and the vendored clean revealjs extension. The build is static.
Open the rendered slides with ?print-pdf and use the browser's Print → Save as PDF,
landscape, background graphics, no browser headers/footers. The supplied PDF was
generated with the automated local renderer and visually reviewed.

## Final four minutes: flexibility, evidence and the next question

- What did we represent, and what did daily regional summaries discard?
- What did we ask the model to learn? How does that differ from an intensity summary or an aftershock sequence?
- Which statement about the Transformer is an observation, and which would require another experiment?
- What one change could test a hypothesis about the information, representation or task?

Use the first minute to name the evidence, two minutes to discuss one explanation
and its required test, and the final minute to introduce follow-up work. A complex
phenomenon motivates careful questions; it does not supply an explanation for a
particular model's scores. Close on the practical message: flexible tools allow us
to formulate different approaches, while their usefulness depends on the scientific
question, representation and evidence. The lab week can carry that discussion into
an executable, controlled comparison.
