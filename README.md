
# Customer Churn Forecasting — Modern Demo Site

This is a static demo website that allows you to upload a CSV file and run a simple **rule-based churn prediction** directly in the browser. It's intended as a starting point for integrating with Vertex AI or any ML backend.

## Features
- Modern responsive UI
- CSV upload (or use sample CSV)
- In-browser predictions (demo rule)
- Preview table and chart of predicted churn
- Download predictions as CSV

## How to use
1. Unzip the package and open `index.html` in any modern browser.
2. Or host on GitHub Pages by pushing the files to a repo's `main` branch and enabling Pages.

## Integrating your model
Replace the `predict` logic in `script.js` with an API call to your deployed model endpoint. The demo normalizes header names to lowercase and underscores before processing.

