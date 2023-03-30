const { Schema, model } = require('mongoose')

let schema = Schema({
    name: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: 4,
        min: 1
    },
    branch: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
    },
    transactionId: {
        type: String,
        required: true
    },
    utrNumber: {
        type: String,
        required: true
    }
})

let vividly = model('vividlyParticipant', schema)

module.exports = vividly