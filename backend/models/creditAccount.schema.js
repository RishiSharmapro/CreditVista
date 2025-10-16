import mongoose from 'mongoose';
const { Schema } = mongoose;

const CreditAccountSchema = new Schema({
    accountNumber: {
        type: String,
        required: [true, 'Account number is required.'],
        trim: true,
    },
    bank: {
        type: String,
        required: [true, 'Bank name is required.'],
        trim: true,
    },
    isCreditCard: {
        type: Boolean,
        default: false,
    },
    currentBalance: {
        type: Number,
        required: true,
        min: [0, 'Current balance cannot be negative.'],
    },
    amountOverdue: {
        type: Number,
        required: true,
        min: [0, 'Amount overdue cannot be negative.'],
    },
    address: {
        type: String,
        required: [true, 'Address is required.'],
        trim: true,
    }
});


export default CreditAccountSchema;