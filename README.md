<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:1e3c72,50:2a5298,100:1e3c72&height=200&section=header&text=Customer%20Churn%20Batch%20Prediction&fontSize=38&fontColor=ffffff&animation=fadeIn&fontAlignY=35"/>
</p>

<p align="center">
  <b>📊 Browser-Based Customer Churn Forecasting Dashboard</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML-Frontend-orange?style=for-the-badge&logo=html5"/>
  <img src="https://img.shields.io/badge/CSS-Styling-blue?style=for-the-badge&logo=css3"/>
  <img src="https://img.shields.io/badge/JavaScript-Logic-yellow?style=for-the-badge&logo=javascript"/>
  <img src="https://img.shields.io/badge/PapaParse-CSV%20Parser-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge"/>
</p>

---

## 📌 Overview

Customer Churn Batch Prediction is a modern, responsive web-based demo application that allows users to upload a CSV file and generate churn predictions directly in the browser.

This project simulates a rule-based churn prediction engine and serves as a foundation for integrating real Machine Learning models via backend APIs.

It demonstrates:

- Data handling in the browser  
- CSV parsing and transformation  
- Interactive UI rendering  
- Batch prediction workflow  
- Downloadable prediction results  

---

## ✨ Key Features

- 📂 Upload CSV file for batch prediction  
- 📄 Use built-in sample dataset  
- ⚙️ In-browser rule-based churn logic  
- 📊 Tabular preview of prediction results  
- 📥 Download predictions as CSV  
- 🎨 Modern responsive UI  

---

## 🏗️ Project Architecture

The application follows a lightweight modular frontend structure:

### 1️⃣ UI Layer
- HTML layout structure  
- Styled using CSS  
- Responsive design principles  

### 2️⃣ Data Processing Layer
- CSV parsing using PapaParse  
- Data normalization  
- Feature extraction  

### 3️⃣ Prediction Layer
- Rule-based churn logic (demo model)  
- Batch processing  
- Output formatting  

---

## 🔄 Application Workflow

1. User uploads CSV file or selects sample data.
2. PapaParse reads and converts CSV to JSON.
3. Data is passed into prediction logic.
4. Churn status is calculated for each record.
5. Results are displayed in a preview table.
6. User can download predictions as a CSV file.

---

## 🧠 Churn Prediction Logic (Demo)

The current implementation uses a simple rule-based approach.

Example logic:

- High tenure + low monthly charges → Low churn probability  
- Low tenure + high monthly charges → High churn probability  

⚠️ This is a demo logic and can be replaced with:
- Scikit-learn backend
- TensorFlow model API
- FastAPI ML microservice
- Flask-based prediction server

---

## 📂 Project Structure

```
Customer_Churn_BatchPrediction/
│
├── index.html              # Main UI structure
├── style.css               # Styling and layout
├── script.js               # CSV parsing + prediction logic
├── sample_input.csv        # Sample dataset
├── README.md               # Project documentation
└── .gitignore
```

---

## ⚙️ How to Run Locally

### Option 1 — Using VS Code Live Server (Recommended)

1. Install Live Server extension  
2. Right click `index.html`  
3. Click **Open with Live Server**

---

### Option 2 — Using Python

```bash
python -m http.server 8000
```

Open:

```
http://localhost:8000
```

---

## 🚀 Deploy on GitHub Pages

1. Push project to GitHub  
2. Go to **Settings → Pages**  
3. Select:
   - Branch: `main`
   - Folder: `/ (root)`  
4. Save  

Your live site will be available at:

```
https://yourusername.github.io/Customer_Churn_BatchPrediction/
```

---

## 🔌 Future ML Integration

To connect a real ML model:

Replace prediction logic inside:

```
script.js
```

With an API call:

```javascript
fetch("https://your-api-endpoint/predict", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(result => {
  // Render prediction results
});
```

---

## 📈 Future Enhancements

- Real ML backend integration  
- Probability score visualization  
- Interactive charts (Chart.js / D3.js)  
- Authentication system  
- File validation and preprocessing module  
- Dashboard analytics view  

---

## 🎯 Why This Project Matters

- Demonstrates frontend + ML integration capability  
- Shows data handling at scale (batch processing)  
- Portfolio-ready ML demo  
- Clean modular structure  
- Practical SaaS-style interface  

---

## 👨‍💻 Author

**Ravi Shankar**  
B.Tech CSE (AIML)  
Machine Learning & Frontend Enthusiast  

GitHub: https://github.com/shanky-ux  

---

## 📜 License

This project is licensed under the MIT License.
