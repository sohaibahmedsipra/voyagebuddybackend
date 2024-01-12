const mongoose = require('mongoose');


const contactFormSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
  
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
