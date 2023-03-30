const joi = require('joi')

//HACKATHON
function validationHackathon(req, res, next) {
    const participantsJoiSchema = joi.object(
        {
            teamName: joi.string().required(),
            sizeOfTeam: joi.number().max(4).min(1).required(),
            participants: joi.array().items(
                joi.object({
                    name: joi.string().required(),
                    college: joi.string().required(),
                    year: joi.number().max(4).min(1).required(),
                    branch: joi.string().required(),
                    githubID: joi.string().required()
                })
            ).max(4).min(1),
            emailID: joi.string().email().required(),
            contactNumber: joi.string().min(10).max(10).required(),
            transactionId: joi.string().required(),
            utrNumber: joi.string().required()
        }
    )
    const validation = participantsJoiSchema.validate(req.body)
    if (validation.error) {
        res.json({ done: false, error: validation.error })
    }
    else {
        next()
    }
}

//TECH BURN
function validationTechBurn(req, res, next) {
    const participantsJoiSchema = joi.object(
        {
            name: joi.string().required(),
            college: joi.string().required(),
            year: joi.number().max(4).min(1).required(),
            branch: joi.string().required(),
            emailID: joi.string().email().required(),
            contactNumber: joi.string().min(10).max(10).required(),
            transactionId: joi.string().required(),
            utrNumber: joi.string().required()
        }
    )
    const validation = participantsJoiSchema.validate(req.body)
    if (validation.error) {
        res.json({ done: false, error: validation.error })
    }
    else {
        next()
    }
}

//TREASURE HUNT
function validationtreasureHunt(req, res, next) {
    const participantsJoiSchema = joi.object(
        {
            teamName: joi.string().required(),
            sizeOfTeam: joi.number().max(3).min(1).required(),
            participants: joi.array().items(
                joi.object({
                    name: joi.string().required(),
                    college: joi.string().required(),
                    year: joi.number().max(4).min(1).required(),
                    branch: joi.string().required()
                })
            ).max(3).min(1),
            emailID: joi.string().email().required(),
            contactNumber: joi.string().min(10).max(10).required(),
            transactionId: joi.string().required(),
            utrNumber: joi.string().required()
        }
    )
    const validation = participantsJoiSchema.validate(req.body)
    if (validation.error) {
        res.json({ done: false, error: validation.error })
    }
    else {
        next()
    }
}

//VIVIDLY
function validationVividly(req, res, next) {
    const participantsJoiSchema = joi.object(
        {
            name: joi.string().required(),
            college: joi.string().required(),
            year: joi.number().max(4).min(1).required(),
            branch: joi.string().required(),
            emailID: joi.string().email().required(),
            contactNumber: joi.string().min(10).max(10).required(),
            transactionId: joi.string().required(),
            utrNumber: joi.string().required()
        }
    )
    const validation = participantsJoiSchema.validate(req.body)
    if (validation.error) {
        res.json({ done: false, error: validation.error })
    }
    else {
        next()
    }
}

//ROCKET LEAGUE
function validationRocketLeague(req, res, next) {
    const participantsJoiSchema = joi.object(
        {
            teamName: joi.string().required(),
            sizeOfTeam: joi.number().max(4).min(1).required(),
            participants: joi.array().items(
                joi.object({
                    name: joi.string().required(),
                    college: joi.string().required(),
                    year: joi.number().max(4).min(1).required(),
                    branch: joi.string().required(),
                })
            ).max(4).min(1),
            emailID: joi.string().email().required(),
            contactNumber: joi.string().min(10).max(10).required(),
            transactionId: joi.string().required(),
            utrNumber: joi.string().required()
        }
    )
    const validation = participantsJoiSchema.validate(req.body)
    if (validation.error) {
        res.json({ done: false, error: validation.error })
    }
    else {
        next()
    }
}
module.exports = { validationHackathon, validationTechBurn, validationtreasureHunt, validationVividly, validationRocketLeague }