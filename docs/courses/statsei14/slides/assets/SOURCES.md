# Figure provenance

- `published-workflow.png`: author-provided workflow associated with Nicolis, O., Plaza, F. & Salas, R. (2021), *Prediction of intensity and location of seismic events using deep learning*, Spatial Statistics 42, 100442. https://doi.org/10.1016/j.spasta.2020.100442
- `gan-schemes.png`, `sparse-sequences.png`, `sparse-distribution.png`: author-provided figures from the 2026 manuscript under review by Francisco Plaza-Vega, Isidora Jara, Orietta Nicolis and Victor Salinas, *From Sequence Generation to Sparse-Target Learning for Aftershock Risk Ranking in the Pacific Ring of Fire*. Editorial status: manuscript under review.
- The older "PI" annotation in the sequence figure uses a mean reference, not last-value persistence. The course reconciles it with mean-baseline skill (MBSS).
- Figures in `results/reference-run/figures/` are generated specifically for this course from the documented data and run.
- Full theses, manuscript PDFs and publisher PDFs are excluded from this package.

The clean presentation theme is by Grant McDermott, version 1.4.1, pinned to the commit recorded in `_extensions/clean-source.json`. Its original license is retained in `_extensions/clean-LICENSE`. The local font patch is documented separately.

- generative-occupancy.png adapts Table_gant_temporal_blocked_event_occupancy.csv from the manuscript under review: occupied intervals 9.27% observed / 77.43% generated, and reported M>=5 occupancy 1.22% / 0.40%. These are source-case results, not workshop model results. scripts/make_research_figure.py reproduces the plot.

- The catalogue map combines unchanged USGS training events with Natural Earth Admin 0 Countries at 1:50m. Source and frozen geometry are recorded in data/geography/provenance.json; scripts/make_catalogue_map.py reproduces the plot.

## English adaptations of the author's course

The four diagrams in course-adapted/ are redrawn and simplified vector adaptations of the instructor's MLP, CNN, LSTM and GAN schemes. They preserve the original structural ideas and use the course's color palette. Exact asset URLs, inherited attribution and differences are recorded in [source-map.md](course-adapted/source-map.md). These are conceptual illustrations, not empirical seismic results.
