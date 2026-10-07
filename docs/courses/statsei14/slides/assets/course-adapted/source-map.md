# English diagrams adapted from the instructor's course

Retrieved and inspected on 2026-10-06. These four SVG files are **redrawn and simplified English adaptations**, not pixel-for-pixel translations. The instructor authorized reuse of his course diagrams. The course is the immediate teaching source; this record does not claim authorship of any third-party illustration reproduced in that course.

The compact figures use a 1600 x 600 viewBox so the explanatory labels remain approximately 24 px when displayed at 430 px high. They use Arial/Helvetica, the course's teal `#00A499`, orange `#EA7600`, dark `#263238`, blue recurrent-input accents, white backgrounds, lightly sketched outlines, and generous space. The layered MLP topology and stacked CNN maps come from the corresponding course figures. Colours were made consistent with the newer native GAN/LSTM diagrams.

| Adapted file | Course source and exact asset | Translation and adaptation |
|---|---|---|
| `mlp-en.svg` | [Unit 2, Multiple layers](https://franplaza.github.io/courses/deep_learning/Deep_Learning_02.html#/m%C3%BAltiples-capas); [DL_infinite_layers.png](https://franplaza.github.io/courses/deep_learning/images/02_DNN/DL_infinite_layers.png) | Redrawn fully connected layers. Retains inputs, hidden layers, and output; removes indexing and bias notation to support a brief introduction. Input/output captions now connect to catalogue summaries and a prediction. |
| `cnn-en.svg` | [Unit 3, CNN](https://franplaza.github.io/courses/deep_learning/Deep_Learning_03_CNN.html); [CNN_scheme.png](https://franplaza.github.io/courses/deep_learning/images/03_CNN/CNN_scheme.png) | Redrawn stacked feature maps and local receptive field. Replaces the example photograph with an explicitly schematic spatial grid and simplifies the dense output layers to a summary/output. No measured seismic field is depicted. |
| `lstm-en.svg` | [Unit 4, RNN/LSTM](https://franplaza.github.io/courses/deep_learning/Deep_Learning_04_RNN.html#/el-camino-del-estado-de-la-celda); [many_one.png](https://franplaza.github.io/courses/deep_learning/images/04_RNN/many_one.png); [lstm_cell_state_path.png](https://franplaza.github.io/courses/deep_learning/images/04_RNN/lstm_cell_state_path.png) | Combines the course's many-to-one topology with its cell-state explanation. Blue inputs, recurrent blocks, teal cell-state arrows, and orange hidden-state arrows are labelled in English. The example is adapted to the tutorial's 30-day history and next-week probability. Omitted intermediate steps are shown as ellipses. No gate equations are needed for the seven-minute architecture overview. The course captions attribute the many-to-one source to Raschka (2019). |
| `gan-en.svg` | [Unit 5, Generative models](https://franplaza.github.io/courses/deep_learning/Deep_Learning_05_Generative.html#/arquitectura-gan); [gan_architecture.svg](https://franplaza.github.io/courses/deep_learning/images/05_Generative/gan_architecture.svg) | Compact English adaptation retaining the original source palette, rounded boxes, noise-generator-synthetic data flow, real-data branch, discriminator, and feedback loop. The source's image tiles become schematic sequence glyphs. Full update equations are replaced by the training-feedback label. A generation-time caption clarifies that the trained generator draws new examples. This is a general GAN schematic; it does not claim to reproduce the conditional architecture of the Isidora project. |

## Source and QA records

- Original public HTML and the inspected source images are retained in `qa/course-reference/`.
- `qa/course-reference/build_adaptations.py` reproduces the four adaptations from editable vector primitives.
- `qa/course-reference/render_adaptations.cjs` renders the SVG files in headless Chrome.
- The four `*-en.png` files in the QA directory were inspected visually at their native dimensions. Final deck-scale layout checks are handled by the main tutorial build.
- `qa/course-reference/gan-course-full-en.svg` is also a direct English translation of the native full course GAN SVG, retained for provenance/comparison. It is not used in the concise main slides.
- Labels in the four teaching SVGs are entirely in English. `x1`, `x2`, `x3`, `p`, `z`, `G`, `D`, and `ŷ` are mathematical identifiers. The maps, feature bars, and sequence glyphs are illustrative, not empirical results.


## Compact Transformer schematic added 2026-10-07

`transformer-en.svg` is a new, editable vector drawing in the same teaching style. It is not a translation of a Transformer image from the public course. It retains the established Arial/Helvetica typography, white background, teal model blocks, blue inputs, purple residual/normalization operations and orange probability output.

Its scientific source is the executable local pilot, not an external illustration: `experiments/transformer-pilot-2026-10-07/results/models/transformer_compact_seed_7.txt`, checked against the pilot's model construction. The exact displayed sequence is 30 days by three catalogue channels, `Dense(16)`, a fixed sinusoidal position encoding, one attention block with two heads and key dimension eight, residual addition plus layer normalization, a `Dense(32, relu)` and `Dense(16)` feed-forward sublayer, a second residual addition plus layer normalization, global average pooling and `Dense(1, sigmoid)`. The diagram shows both residual paths. All attention positions belong to the observed past window. Position encoding has no trainable parameters. The network has 2,305 trainable parameters, excluding optimizer state.

The displayed probabilities and input squares are schematic. They are not empirical attention weights, catalogue measurements or model outputs. The figure summarizes the architecture used for the classroom comparison and makes no claim of improved predictive performance.
