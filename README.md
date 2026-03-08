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
  <img src="https://img.shields.io/badge/Status-Actively%20Maintained-brightgreen?style=for-the-badge"/>
</p>

---

## 📌 Overview

Customer Churn Batch Prediction is a modern, responsive browser-based web application that enables users to upload a CSV file and generate churn predictions directly within the browsers.

This project simulates a rule-based churn prediction engine and serves as a frontend foundation for integrating real Machine Learning models via backend APIs.

It demonstrates:

- Client-side data processing  
- CSV parsing and transformation  
- Batch prediction workflow  
- Interactive result rendering  
- Downloadable prediction reports  
- Clean modular frontend architecture  

---

## 🚀 Development Status

This project is actively maintained and continuously improved.

Ongoing enhancements include:

- UI refinements  
- Prediction logic improvements  
- Performance optimization  
- Code refactoring  
- Backend integration preparation  
- Error handling improvements  

Regular commits are pushed to maintain continuous development and scalability.

---

## ✨ Key Features

- 📂 Upload CSV file for batch prediction  
- 📄 Built-in sample dataset option  
- ⚙️ In-browser rule-based churn logic  
- 📊 Tabular preview of prediction results  
- 📥 Download predictions as CSV  
- 🎨 Fully responsive modern UI  
- 🔄 Ready for backend ML API integration  

---

## 🏗️ Project Architecture

The application follows a lightweight modular frontend structure:

### 1️⃣ UI Layer
- Structured HTML layout  
- Styled using modern CSS  
- Responsive design principles  

### 2️⃣ Data Processing Layer
- CSV parsing using PapaParse  
- Data normalization and transformation  
- Feature extraction logic  

### 3️⃣ Prediction Layer
- Rule-based churn engine (demo model)  
- Batch record processing  
- Output formatting and rendering  

---

## 🔄 Application Workflow

1. User uploads CSV file or selects sample dataset  
2. PapaParse reads and converts CSV into JSON  
3. Data is passed to prediction logic  
4. Churn status is calculated for each record  
5. Results displayed in preview table  
6. User downloads prediction results as CSV  

---

## 🧠 Churn Prediction Logic (Demo Model)

Current implementation uses simplified rule-based logic:

- High tenure + low monthly charges → Lower churn probability  
- Low tenure + high monthly charges → Higher churn probability  
- Short contract duration → Increased churn likelihood  

⚠️ This demo logic can be replaced with:

- Scikit-learn backend API  
- TensorFlow model service  
- FastAPI ML microservice  
- Flask-based prediction server  

---

## 📂 Project Structure

```
Customer_Churn_BatchPrediction/
│
├── index.html              # Main UI layout
├── style.css               # Styling and responsive design
├── script.js               # CSV parsing + prediction logic
├── sample_input.csv        # Sample dataset
├── README.md               # Documentation
└── .gitignore
```

---

## ⚙️ Running Locally

### Option 1 — VS Code Live Server (Recommended)

1. Install Live Server extension  
2. Right click index.html  
3. Click "Open with Live Server"  

---

### Option 2 — Python HTTP Server

```bash
python -m http.server 8000
```

Open in browser:

```
http://localhost:8000
```

---

## 🌍 Deployment (GitHub Pages)

1. Push project to GitHub  
2. Go to Settings → Pages  
3. Select:
   - Branch: main  
   - Folder: / (root)  
4. Save  

Live URL format:

```
https://yourusername.github.io/Customer_Churn_BatchPrediction/
```

---

## 🔌 Future ML Integration

To integrate a real ML backend, replace prediction logic inside:

```
script.js
```

With API call:

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
- File validation & preprocessing module  
- Dashboard analytics view  
- Data visualization components  

---

## 🎯 Why This Project Stands Out

- Demonstrates frontend + ML integration readiness  
- Shows batch data processing capability  
- Clean modular code structure  
- Browser-based scalable demo system  
- Portfolio-ready SaaS-style ML interface  

---

## 📅 Development Log

This section is updated regularly:

- Improved CSV validation  
- Enhanced prediction logic rules  
- Optimized DOM rendering  
- Improved UI spacing and responsiveness  
- Refactored script structure  
- Added download enhancements  

(Continuously evolving)

---

## 👨‍💻 Author

Ravi Shankar  
B.Tech CSE (AIML)  
Machine Learning & Frontend Enthusiast  

GitHub: https://github.com/shanky-ux  

---

## 📜 License

This project is licensed under the MIT License.
