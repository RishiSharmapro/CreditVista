import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReportSummarySchema = new Schema({
    totalAccounts: {
        type: Number,
        required: true,
        min: [0, 'Total accounts cannot be negative.'],
    },
    activeAccounts: {
        type: Number,
        required: true,
        min: [0, 'Active accounts cannot be negative.'],
    },
    closedAccounts: {
        type: Number,
        required: true,
        min: [0, 'Closed accounts cannot be negative.'],
    },
    currentBalanceAmount: {
        type: Number,
        required: true,
        min: [0, 'Current balance amount cannot be negative.'],
    },
    securedAccountsAmount: {
        type: Number,
        required: true,
        min: [0, 'Secured accounts amount cannot be negative.'],
    },
    unsecuredAccountsAmount: {
        type: Number,
        required: true,
        min: [0, 'Unsecured accounts amount cannot be negative.'],
    },
    last7DaysCreditEnquiries: {
        type: Number,
        required: true,
        min: [0, 'Credit enquiries cannot be negative.'],
    },
});

export default ReportSummarySchema;