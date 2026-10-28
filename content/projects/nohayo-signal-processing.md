---
title: "Nohayo Embedded ML"
description: "Signal processing and embedded ML models for wearable devices — fall detection, vertical oscillation, ground contact time, and running power estimation, all shipped as reentrant C libraries."
date: "2025-03-01"
category: "Machine Learning"
technologies: ["Python", "PyTorch", "XGBoost", "C", "GRU", "CUDA", "Embedded Systems"]
featured: true
image: "/images/project-nohayo.png"
---

## Signal Processing & AI Development at Nohayo

Built production embedded ML models for wearable signal processing:

### Fall Detection
Three-stage detector: 8-channel GRU classifier on 2-second windows, followed by inactivity and extended-idle confirmation. Runs in ~2.5 KB RAM and 16 KB flash with 97.9% sensitivity, 91.9% accuracy, 0.915 AUC, and an 11% false-positive rate across three public datasets.

### Vertical Oscillation
Two-stage estimator combining harmonic-sum spectral cadence detection with a PyTorch GRU ensemble and optional per-user calibration. Reached 0.63 cm MAE uncalibrated and 0.37 cm calibrated. Shipped in C (219 KB flash, 61 KB RAM).

### Ground Contact Time
Replaced a feature-based XGBoost pipeline with a GRU sequence model on accelerometer windows (5.8 ms MAE, R² 0.79 on running). Exported to embedded C.

### Running Power
Audited a GPS, accelerometer, and barometer model, found evaluation leaks and re-scored with leave-one-person-out validation. Built a hybrid physics (GOVSS) + GRU/1D-CNN residual model reaching 14.5 W MAE (R² 0.81) against Garmin, and a reentrant C library.
