---
title: HackOS 4
date: 2025/04/02
description: 10-day hacakthon for perturbation prediction
tag: drug discovery
author: You
---

Co-hosted with Nucleate Dojo

### Perturbation Prediction for Drug Discovery

We ran a 10-day virtual hackathon from March 24, 2025 to April 2, 2025 on using ML for drug discovery. The goal: predict how cells respond to chemical compounds, using a subset of the Perturbation Prediction challenge from NeurIPS 2023. 

### Project Highlights

+ A custom transformer using ChemBERTa embeddings scored the highest with a MRRMSE score of 0.568
+ An LSTM with attention also performed strongly
+ We also used one-hot encodings and a random forest classifier as a basline

### Shared Takeaways

+ **Embeddings Can Increase Performance Downstream.** The strongest performance that we attained was used ChemBERTa embeddings. While there were other factors that contributed to strong accuracies, using embeddings that have "condensed prior knowledge" (as opposed to training on labels with no prior context in the training data) likely was a notable factor in better performance. 
+ **Generalization Is Hard.** Even though models can perform well during training, generalizing to test sets is hard. 
+ **Approaching Sparsity.** One challenge is that data is very sparse - due to the limited number of cell donors, and given that for a small number of cells there exist a very high number of features (gene expression levels).

### Guest Presentation

A special thanks to Andrew Benz, co-author of the Perturbation Prediction challenge (NeurIPS 2023) and the OP3 dataset paper (NeurIPS 2024) for joining virtually to deliver a presentation on perturbation methods in molecular biology to kickoff demos - it was awesome having you!

### Hackathon Sponsors & Partners

A special thanks to:

+ Rootly (YC S21) AI Labs
+ Rubric Labs
+ Perplexity
+ Cerebras
+ Slash ML
+ Building 21
