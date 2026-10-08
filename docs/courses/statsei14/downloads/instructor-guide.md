# Instructor guide: 30 minutes of presentation + 30 minutes of practice

Francisco Plaza-Vega · STATSEI14 · 13 October 2026, 11:30–12:30

## Teaching question and session outcome

How do we turn catalogue history into a probability forecast, and what changes when we change the model?

By the end, participants should recognize one training example, explain the LSTM input and output, trace the visible construction, training and evaluation cells, interpret probability scores against simple references and explain what attention changes in the Transformer. Researchers may have different Python and neural-network experience. Reading prepared outputs and stating a testable hypothesis are valid ways to participate.

The presentation remains in English. Deep learning is the main theme; ETAS connects statistical representations to the author's research. Do not teach a separate ETAS fitting lesson. Keep the published Spatial Statistics article, Isidora's thesis, the manuscript under review and the teaching experiment as distinct evidence sources.

## Exact schedule

| Minutes | Activity |
|:--|:--|
| 00–06 | Seismic learning tasks: inputs, outputs and today's question |
| 06–12 | A network, its loss, and a brief map of MLP, CNN, LSTM and generative learning |
| 12–18 | Spatial Statistics: how a representation defines a learning problem |
| 18–24 | Isidora's work: how the target changes what a model can learn |
| 24–30 | One 30 × 3 window, a weekly label, baselines and chronological evaluation |
| 30–34 | Open the prepared notebook and inspect one example |
| 34–43 | Define references, explain model settings for two minutes, then build, compile, fit and predict with the LSTM |
| 43–50 | Interpret weekly probabilities, Brier, log loss and calibration |
| 50–57 | Transformer on the same history: positional information, attention and results |
| 57–60 | Discuss one finding and choose a laboratory extension |

Main slides s01–s20 total 1,800 seconds. The notebook occupies minutes 30–50; d01–d03 support the Transformer comparison at minutes 50–57; h01 closes at minutes 57–60. Those final 30 minutes include the seven-minute Transformer comparison and three-minute discussion. Appendices are backup material.

## Research-to-practice transitions

After the application examples: “The learning task depends on what we observe and what we want to estimate. We will now introduce the components needed to learn one of these mappings.”

After Spatial Statistics: “ETAS supplied the representation used by the neural models. In the practical we construct a simpler representation directly from the catalogue. In both cases, we decide what information the network receives and what its output means.”

After Isidora's work: “This experience led us to examine the target more carefully. Today we focus on occurrence within a fixed future interval, so the output is explicit and we can evaluate its probabilities.”

At s17: “The live exercise follows an LSTM and then a Transformer on the same history. MLP, CNN1D and the spatial tutorials remain available for the laboratory.”

Before introducing spatial extensions: “What spatial information did we lose when we pooled the whole region?” Maps and graphs estimate six marginal occurrence probabilities. They are not the mutually exclusive macrozone-of-maximum classes of the published study.

## Before participants arrive

1. Open the local or published practical page, slides and temporal guide. Check the current slide PDF and notebook downloads.
2. Download `downloads/tutorials/temporal.ipynb`, open Colab and use File → Upload notebook. The notebook has ready-to-run cells; a blank notebook is an independent-study option.
3. Keep `downloads/tutorials/temporal-solved.ipynb` and the web guide's prepared outputs available. The tutorial pack includes the exact frozen data ZIP for offline preparation.
4. Inspect imports and the frozen data download before the session when possible. Do not promise the local CPU runtime in Colab. Actual Colab execution remains unverified unless a separate recorded check establishes it.
5. Open speaker notes with S. Put the spoken idea and transition first; use scientific qualifications as support for questions.

## One observation before technical preparation

Choose a forecast origin t on a Monday. The input uses [t − 30 days, t), and the label is one if at least one catalogue event with M ≥ 5 occurs in [t, t + 7 days). The input is 30 days × 3 channels, using catalogue events with M ≥ 4.5:

- `log(1 + count)` for each day.
- Maximum magnitude excess above 4.5, zero on an empty day.
- An event-presence indicator.

For one example, shape is (30, 3); a batch adds the examples axis. The regional summaries discard event locations. The model's sigmoid output is a weekly occurrence probability, not a predicted magnitude or event time.

## Guided notebook: minutes 30–50

Follow four visible stages: build one example, define reference forecasts, train the LSTM, and evaluate its probabilities. Read the core cells from top to bottom. Explain the daily channels, one window and its label before dwelling on implementation. Pause at the intermediate daily table and input shape so participants can connect each array to the scientific task.

The logistic reference receives all 90 standardized lag values. Training prevalence is a constant probability estimated from training labels. Explain the LSTM definition line by line: ordered input, a 16-unit recurrent state and a one-unit sigmoid. Distinguish the 30 days, 3 observed channels, 16 learned state values and 1 probability. Training histories determine scaling.

Before the first LSTM fit, reserve two minutes within the 34–43 block for **Model settings and validation**. The network learns weights and biases. We choose its architecture and training settings before fitting:

| Setting | Value | Explanation |
|:--|--:|:--|
| Input history | 30 days | Amount of past information in one example |
| LSTM units | 16 | Dimension of the recurrent state |
| Adam learning rate | 0.001 | Scale of the optimizer updates |
| Batch size | 64 windows | Training examples processed per update, each with 30 days |
| Maximum epochs | 20 | Maximum complete passes through the training set |
| Early-stopping patience | 3 | Consecutive epochs without improved validation loss before stopping |

Describe these values as a compact starting configuration for the exercise. The tutorial does not document a search establishing them as optimal. The seven-day horizon and magnitude threshold define the scientific question. The seed identifies one realization of training, and repeated seeds assess initialization sensitivity.

Point to `compile` for Adam and binary cross-entropy, `fit` for training-weight updates and `predict` for probabilities. Early stopping monitors validation loss and restores the weights from the best validation epoch. Validation observations do not contribute gradient updates, but they influence which weights we retain. Twenty epochs is a limit, and training can stop earlier. Reaching that limit does not establish that the training budget is adequate. In the prepared seed-7 run, the LSTM reaches 20 epochs while validation loss still decreases slightly. The Transformer stops after six epochs and restores the weights from epoch three. Use the learning curves to distinguish the epoch limit, actual training duration and the epoch whose weights are retained.

The primary notebook uses one declared seed, 7. Each model has its own visible training and evaluation beside its definition. The LSTM comparison needs only the preparation and reference cells. Participants can complete that core before reading the Transformer at minute 50. MLP and CNN1D follow as optional laboratory sections and are not dependencies of the live route. The separate three-seed comparison is available after the session.

At minute 34, use prepared outputs if setup is incomplete. If fitting takes more than three minutes, continue with those same prepared outputs. Identify them as earlier local CPU results. Preserve minutes 43–50 for evaluation; never spend that interval resolving an individual installation.

## Evaluation: minutes 43–50

Ask participants to identify a predicted probability, its observed weekly label and the corresponding error. Compare Brier and log loss with the training-prevalence reference, then inspect calibration with bin counts. A sigmoid does not guarantee calibration. The seed-7 walkthrough describes one fit per model and does not measure variability across initializations. Differences among seeds in the separate repeated comparison describe optimization variability, not uncertainty from new earthquakes.

The current tutorials evaluate validation (2017–2020) only; early stopping also uses it. These scores are development evidence, not independent generalization evidence. Training is 2001–2016. The 2021–2025 test was already inspected in earlier course experiments and is excluded from this comparison. Target intervals crossing boundaries are removed; inputs can use earlier history. The frozen revised catalogue does not reconstruct historical information availability.

The slide table shows one seed-7 fit per neural model on 208 validation weeks. The sensitivity comparison reports arithmetic means of fit-level losses across seeds 7, 17 and 27. Those means answer a different question from the performance of a single fit or an ensemble prediction. Do not choose an architecture or seed using the previously inspected test.

## Transformer: minutes 50–57

Follow four operations: project each day into 16 features; add learned positional information; combine observed days with two attention heads; pool to one weekly probability. The current model has 2,257 trainable parameters, compared with 1,297 for the LSTM. Inspect the projection, position, attention and output layers in the model definition.

The current positional table has 30 × 16 learned values. The feed-forward block maps 16 to 16 features. All observed days precede the forecast origin. Attention across this history does not access the target week; attention weights alone do not establish causal mechanisms.

Compare the same validation outputs. Differences in capacity and completed epochs remain; this is not a parameter-matched competition. Read the seed-7 Brier and log loss values alongside prevalence and calibration. One split and one initialization do not rank these model families generally or establish a cause for their difference. Use the separate repeated comparison to discuss initialization sensitivity.

## Closing and laboratory: minutes 57–60

Ask for one supported observation and one hypothesis that needs another comparison. Offer concrete continuations: compare recurrent-state sizes, read MLP/CNN1D on the same input, retain locations using maps or graphs, or add an ETAS-inspired feature while holding the LSTM fixed. Changing a feature changes the representation. LSTM versus Transformer changes architecture.

For a small laboratory experiment, declare **8, 16 and 32 LSTM units** before training. Hold features, 30-day history, target, split dates, optimizer, batch size and stopping rule fixed. Declare validation log loss as the primary comparison and inspect Brier score and calibration as well. Begin with seed 7, then retain all fits with seeds 7, 17 and 27 to examine whether differences persist across initializations. Compare each candidate's parameter count and learning curves. Selecting a setting uses validation information and produces development evidence. Independent evaluation requires a genuinely untouched period and must respect temporal order. Keep the previously inspected 2021–2025 interval out of selection.

Spatial maps use (30, 3, 2, 3) per example; graphs use (30, 6, 3). Both predict six marginal weekly probabilities that need not sum to one. Do not compare their scores directly with regional occurrence scores.

Homework is in `homework.html`. The sensitivity guides are `tutorials/temporal-comparison.html`, `tutorials/maps-comparison.html` and `tutorials/graphs-comparison.html`, with notebooks under `downloads/comparison/`. They retain seeds 7, 17 and 27. A bounded extension declares one change, preserves an unchanged reference, retains all declared seeds and uses training/validation. An independent confirmatory claim needs a genuinely untouched evaluation period.
