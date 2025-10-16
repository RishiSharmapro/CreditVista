import mongoose from 'mongoose';
const { Schema } = mongoose;
import CreditAccountSchema from './creditAccount.schema.js';
import ReportSummarySchema from './reportSummary.schema.js';
import BasicDetailsSchema from './basicDetails.schema.js';

const CreditReportSchema = new Schema({
    basicDetails: {
        type: BasicDetailsSchema,
        required: true,
    },
    reportSummary: {
        type: ReportSummarySchema,
        required: true,
    },
    creditAccounts: {
        type: [CreditAccountSchema],
        default: [],
    },
}, {
    timestamps: true,
});

export const CreditReport = mongoose.model('CreditReport', CreditReportSchema);
