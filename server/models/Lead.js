const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  age: {
    type: Number,
    required: false,
  },
  audienceType: {
    type: String,
    required: [true, 'Audience type is required'],
    trim: true,
  },
  additionalDetails: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    default: {},
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Lead', LeadSchema);
