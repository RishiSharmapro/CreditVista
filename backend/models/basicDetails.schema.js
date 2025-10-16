import mongoose from "mongoose";
const { Schema } = mongoose;

const BasicDetailsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        trim: true,
    },
    mobilePhone: {
        type: String,
        required: [true, 'Mobile phone is required.'],
        match: [/^[0-9]{10}$/, 'Please fill a valid 10-digit mobile number.'],
    },
    pan: {
        type: String,
        required: [true, 'PAN is required.'],
        uppercase: true,
        match: [
            /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
            'Please fill a valid PAN number (e.g., ABCDE1234F).',
        ],
    },
    creditScore: {
        type: Number,
        required: [true, 'Credit score is required.'],
        min: [300, 'Credit score must be at least 300.'],
        max: [900, 'Credit score cannot exceed 900.'],
    },
});

export default BasicDetailsSchema;