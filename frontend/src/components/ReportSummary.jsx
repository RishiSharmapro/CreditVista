import { formatCurrency } from "../utils";

const ReportSummaryItem = ({ label, value }) => (
    <div className="bg-gray-50/70 p-4 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg md:text-xl font-semibold text-gray-800">{value}</p>
    </div>
);

const ReportSummary = ({ summary }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Report Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ReportSummaryItem label="Total Accounts" value={summary.totalAccounts} />
            <ReportSummaryItem label="Active Accounts" value={summary.activeAccounts} />
            <ReportSummaryItem label="Closed Accounts" value={summary.closedAccounts} />
            <ReportSummaryItem label="Current Balance" value={formatCurrency(summary.currentBalanceAmount)} />
            <ReportSummaryItem label="Secured Balance" value={formatCurrency(summary.securedAccountsAmount)} />
            <ReportSummaryItem label="Unsecured Balance" value={formatCurrency(summary.unsecuredAccountsAmount)} />
            <div className="col-span-2 md:col-span-3">
                 <ReportSummaryItem label="Credit Enquiries (Last 7 Days)" value={summary.last7DaysCreditEnquiries} />
            </div>
        </div>
    </div>
);


export default ReportSummary;