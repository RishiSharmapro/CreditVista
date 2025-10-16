import { formatCurrency } from "../utils";

const CreditAccounts = ({ accounts }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Credit Account Information</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b bg-gray-50 text-sm text-gray-600">
                        <th className="p-4 font-semibold">Account Number</th>
                        <th className="p-4 font-semibold">Bank</th>
                        <th className="p-4 font-semibold text-right">Current Balance</th>
                        <th className="p-4 font-semibold text-right">Amount Overdue</th>
                        <th className="p-4 font-semibold">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50/70">
                            <td className="p-4 text-sm text-gray-800 font-medium">
                                {account.accountNumber}
                                {account.isCreditCard && (
                                    <span className="ml-2 text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                        Credit Card
                                    </span>
                                )}
                            </td>
                            <td className="p-4 text-sm text-gray-600">{account.bank}</td>
                            <td className="p-4 text-sm text-gray-800 text-right font-mono">{formatCurrency(account.currentBalance)}</td>
                            <td className={`p-4 text-sm text-right font-mono font-semibold ${account.amountOverdue > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                {formatCurrency(account.amountOverdue)}
                            </td>
                            <td className="p-4 text-sm text-gray-600 max-w-xs truncate">{account.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


export default CreditAccounts;