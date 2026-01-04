---
title: "TriEye Image Processing Suite"
description: "Advanced computer vision algorithms for NUC, denoising, motion correction, and image stitching, leveraging GPU acceleration with CUDA and Cupy for real-time performance."
date: "2024-04-01"
category: "Computer Vision"
technologies: ["Python", "C++", "CUDA", "OpenCV", "Cupy", "NumPy"]
featured: true
image: "/images/project-trieye.png"
---

## Overview

At TriEye, I developed cutting-edge image processing algorithms for automotive imaging systems. The work focused on improving image quality from IR sensors and gated imaging systems.

## Key Algorithms

### Non-Uniformity Correction (NUC)
- Implemented SBNUC and LABNUC techniques
- Developed bilateral and guided filter integrations
- Achieved real-time correction for sensor non-uniformities

### Image Stitching
- Created Poisson reconstruction-based stitching algorithm
- Leveraged GPU acceleration with Cupy for seamless merging
- Optimized for minimal visual artifacts at seams

### Denoising Solutions
- Developed spatial and temporal denoising for image sequences
- Implemented STMKF, joint bilateral filters, and MOG methods
- Balanced noise reduction with edge preservation

### Motion Correction
- Built ego-motion estimation using homography
- Implemented SIFT-based image registration
- Optimized with CUDA for real-time performance

## Development Process
- Prototyped algorithms in Python (POC)
- Implemented production code in C++ with OpenCV
- Utilized Git and SourceTree for version control
