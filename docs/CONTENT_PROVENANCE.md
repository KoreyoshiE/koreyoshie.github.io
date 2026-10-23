# Content provenance

Audit date: 23 October 2026. Authenticated GitHub identity verified as KoreyoshiE (ID 177992833) before creating the dedicated website repository. Existing public research repositories were read only; none were modified. The target website repository returned 404 before creation, so there was no existing website history to preserve.

## Frozen source snapshots

| Public repository                                                                                                                    | Reviewed tree / commit                     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| [wdcgg-data-pipeline](https://github.com/KoreyoshiE/wdcgg-data-pipeline/tree/63aaf0a64c63c6debe8820fa9542c67768143973)               | `63aaf0a64c63c6debe8820fa9542c67768143973` |
| [shanghai-ozone-ml](https://github.com/KoreyoshiE/shanghai-ozone-ml/tree/e8e7cf33f5cce207ef27eafbb49067785f3805e1)                   | `e8e7cf33f5cce207ef27eafbb49067785f3805e1` |
| [Huawei-LLM-Agent-Router](https://github.com/KoreyoshiE/Huawei-LLM-Agent-Router/tree/a18edb3a5a2e2e34c7fd45592c69a458c0843cad)       | `a18edb3a5a2e2e34c7fd45592c69a458c0843cad` |
| [OmniStream-Database-System](https://github.com/KoreyoshiE/OmniStream-Database-System/tree/50631c978b9d6e7a671de5f067fe897f62b7cf13) | `50631c978b9d6e7a671de5f067fe897f62b7cf13` |
| [FSAE-2026-Steering-System](https://github.com/KoreyoshiE/FSAE-2026-Steering-System/tree/05841ac4ec823796c10ba0e3439f540a7b51a391)   | `05841ac4ec823796c10ba0e3439f540a7b51a391` |
| [KoreyoshiE](https://github.com/KoreyoshiE/KoreyoshiE/tree/22b6aec9527a7e46115cc4a7879d47258bb49f37)                                 | `22b6aec9527a7e46115cc4a7879d47258bb49f37` |

## Claim-to-evidence map

| Website content                 | Primary evidence reviewed                                                                                                            | Boundaries                                                                                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name, education, interests      | User brief; public profile README                                                                                                    | No invented dates, email, awards, CV, employment or graduate status                                                                                                                 |
| WDCGG workflow, cohort, trends  | README; `results/frozen/headline_results.json`; `results/frozen/trend_core_summary.csv`; CITATION.cff; LICENSE; public file tree     | Selected non-random cohort; observed-only conclusions; manuscript in peer-review revision; software authors listed as Han Che, Hanyue Zheng and Lei Han, not sole-authorship claims |
| Shanghai methods and role       | README; `results/RF_model_comparison.csv`; `results/SOM_applicability_summary.csv`; `src/shanghai_ozone_ml/modeling.py`; public tree | Provisional catalogue; predictive association; no radical measurements or causality; restricted upstream inputs; no publication claim                                               |
| Router functionality and counts | README; `core/demo_agent.py`; `logs/eval_results.json`                                                                               | 17/50 exact and 47/50 function-name matches are one historical run; proposed strings only; unfinished template distinguished from runnable baseline                                 |
| OmniStream                      | README; `sql/DDL.sql`; public tree                                                                                                   | Coursework; no production deployment or measured speedup claimed                                                                                                                    |
| FSAE                            | README; public tree with steering-wheel PDF                                                                                          | Small artifact archive, no MATLAB/ADAMS/CAD or validated full-system claim                                                                                                          |

## Visuals and numerical meaning

- `public/art/atmosphere.svg` is original procedural vector artwork made for this website. It contains no measured data, no geographical claim and no physical simulation. Every presentation labels it illustrative.
- WDCGG pipeline graphic is an original conceptual summary, not a scientific result figure.
- Shanghai applicability bars are an original HTML/CSS presentation of numeric facts from the cited CSV and README. K6 all-day applicability rounds to 43.0%; DJF rounds to 0.9%. Both use the same 0–100% baseline; there is no minimum bar width that would exaggerate winter coverage. The source link appears in the figure caption.
- Model comparison values are rounded from the public CSV: M0 0.685 / 21.303 / 16.192; M1 0.738 / 19.415 / 14.933; M2 0.811 / 16.489 / 12.747 (R² / RMSE / MAE). Error units μg m⁻³ are preserved.
- The year-selection diagram illustrates the five-fold predictor-model split only. It does not run a model, plot invented errors, or imply every upstream transformation is nested within those predictor folds.
- Existing Shanghai raster figures were investigated but not copied: the repository explicitly withholds redistribution permission pending ownership confirmation. Raw observations, research source code and CSV files are not redistributed by this site. Links allow academic inspection at the original location.
- No photographs were supplied or found with confirmed publication rights. `src/data/photographs.ts` is an empty typed gallery manifest. The site communicates the empty state honestly; no stock or generated image is attributed to Han.

## Fonts

Manrope and Newsreader are self-hosted Latin variable WOFF2 files from pinned Fontsource packages, originally from Google Fonts. SIL Open Font License texts are included under `public/fonts/`. Original license verification: https://github.com/google/fonts/tree/main/ofl/manrope and https://github.com/google/fonts/tree/main/ofl/newsreader. No remote font request or third-party tracking.

## Verification limits

This is a portfolio evidence audit, not an independent reproduction of the research. Restricted raw inputs were not accessed, private local material was not published, and research software tests were not rerun as part of website testing.
