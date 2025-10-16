# 💳 CreditVista

**CreditVista** is a full-stack MERN application that parses and visualizes detailed credit report data from XML files.  
It helps users extract, structure, and visualize their financial information — including credit score, account summaries, and individual credit account details — in a clean, interactive dashboard.

---

## 🚀 Features

### 🔍 Backend
- Upload and parse **credit report XML files**
- Extract details like:
  - Name, Mobile, PAN, Credit Score
  - Total/Active/Closed Accounts
  - Secured and Unsecured Balances
  - Last 7 Days Credit Enquiries
- Store structured data in **MongoDB**
- REST API for fetching parsed reports

### 💻 Frontend
- Built with **React**
- Interactive dashboard for viewing parsed data
- Responsive, minimal, and intuitive UI

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React, Recharts, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Parsing** | xml2js |
| **Other Tools** | dotenv, multer, nodemon |

---

## 📁 Folder Structure

```
CreditVista/
├── backend/
│   ├── controllers/
│   │   ├── upload.controller.js
│   │   └── reports.controller.js
│   ├── models/
│   │   ├── basicDetails.schema.js
│   │   ├── reportSummary.schema.js
│   │   ├── creditAccount.schema.js
│   │   └── creditReport.model.js
│   ├── db/
│   │   └── connect.js
│   ├── middleware/
│   │   └── multer.middleware.js
│   ├── routes/
│   │   └── report.routes.js
│   ├── utils/
│   │   └── parser.js
│   ├── index.js
│   ├── app.js
│   ├── constants.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/RishiSharmapro/CreditVista.git
cd CreditVista
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Run the backend:
```bash
npm run dev
```
(Default: runs on `http://localhost:3000`)

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

(Default: runs on `http://localhost:5173`)

---

### 4️⃣ Upload XML and View Report


1. Go to the frontend UI.
2. Upload an XML credit report file.
3. Wait for it to parse and render visual insights (graphs and tables).

---

## 🧩 Environment Variables

| Variable | Description |
|-----------|--------------|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection URI |

---

## 🧾 Example XML (Sample Structure)

```xml
<CreditReport>
  <BasicDetails>
    <Name>Rishi Sharma</Name>
    <MobilePhone>9999999999</MobilePhone>
    <PAN>ABCDE1234F</PAN>
    <CreditScore>750</CreditScore>
  </BasicDetails>
  <ReportSummary>
    <TotalAccounts>5</TotalAccounts>
    <ActiveAccounts>3</ActiveAccounts>
    <ClosedAccounts>2</ClosedAccounts>
    <CurrentBalanceAmount>250000</CurrentBalanceAmount>
    <SecuredAccountsAmount>150000</SecuredAccountsAmount>
    <UnsecuredAccountsAmount>100000</UnsecuredAccountsAmount>
    <Last7DaysCreditEnquiries>1</Last7DaysCreditEnquiries>
  </ReportSummary>
  <CreditAccounts>
    <Account>
      <Type>Credit Card</Type>
      <Bank>HDFC Bank</Bank>
      <AccountNumber>XXXX1234</AccountNumber>
      <Address>Mumbai, India</Address>
      <AmountOverdue>0</AmountOverdue>
      <CurrentBalance>25000</CurrentBalance>
    </Account>
  </CreditAccounts>
</CreditReport>
```

---

## 📊 Future Enhancements

- AI-powered credit score prediction
- PDF export for parsed reports
- Authentication and user-specific dashboards
- Compare multiple reports
- OCR parsing from PDF/XML combo files

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch (`feature/your-feature-name`)  
3. Commit your changes  
4. Push to your branch  
5. Open a Pull Request  

---

## 🧑‍💻 Author

**Rishi Sharma**  
🌐 [Portfolio](https://rishisharmapro.vercel.app)  
💼 [GitHub](https://github.com/rishisharmapro)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify it for your own learning or projects.