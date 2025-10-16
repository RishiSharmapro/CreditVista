import React, { useState, useEffect } from 'react';
import { BasicDetails, CreditScoreCard, ReportSummary, CreditAccounts } from "./index.js";
import axios from 'axios';

const mockReportData = {
  basicDetails: {
    name: "Sagar Ugle",
    mobilePhone: "9819137672",
    pan: "AOZPB0247S",
    creditScore: 719,
  },
  reportSummary: {
    totalAccounts: 4,
    activeAccounts: 3,
    closedAccounts: 1,
    currentBalanceAmount: 245000,
    securedAccountsAmount: 85000,
    unsecuredAccountsAmount: 160000,
    last7DaysCreditEnquiries: 0,
  },
  creditAccounts: [
    {
      accountNumber: "ICIVB20994",
      bank: "ICICI Bank",
      isCreditCard: true,
      currentBalance: 80000,
      amountOverdue: 4000,
      address: "ANANDI VIHAR, DEHU ROAD, PUNE, 27, 411047",
    },
    {
      accountNumber: "ICICI8131308",
      bank: "ICICI Bank",
      isCreditCard: false,
      currentBalance: 0,
      amountOverdue: 0,
      address: "J-1 110, ANANDI VIHAR, DEHU ROAD, DIGHI, 27, 412216",
    },
    {
      accountNumber: "ICICI8131306",
      bank: "ICICI Bank",
      isCreditCard: true,
      currentBalance: 80000,
      amountOverdue: 1100,
      address: "J-1 110, ANANDI VIHAR, DEHU ROAD, DIGHI, 27, 412216",
    },
    {
      accountNumber: "ICICI8131307",
      bank: "HDFC Bank",
      isCreditCard: false,
      currentBalance: 85000,
      amountOverdue: 1200,
      address: "J-1 110, ANANDI VIHAR, DEHU ROAD, DIGHI, 27, 412216",
    },
  ],
};


const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
);

export default function App() {
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReport = () => {
            axios.get(`${import.meta.env.VITE_API_URL}/api/v1/reports`)
            .then(response => {
                console.log(response.data[0]);
                setReport(response.data[0] || mockReportData); // Use mock data if response is empty
                setLoading(false);
            }).catch(error => {
                console.error("Error fetching report data:", error);
                setReport(mockReportData);
                setLoading(false);
            });
        };
        fetchReport();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!report) {
        return <div className="p-8 text-center text-red-500">Failed to load credit report.</div>;
    }
    
    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 mt-16">
      
            <main className="p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                             <BasicDetails details={report.basicDetails} />
                        </div>
                        <div>
                             <CreditScoreCard score={report.basicDetails.creditScore} />
                        </div>
                    </div>
                    
                    <ReportSummary summary={report.reportSummary} />
                    
                    <CreditAccounts accounts={report.creditAccounts} />
                </div>
            </main>
        </div>
    );
}
