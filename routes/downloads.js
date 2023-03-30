let express = require('express')
let router = express.Router()
let exportFromJSON = require('export-from-json')

// Models Import
const hackathon = require("../models/hackathon");
const rocketLeague = require("../models/rocketLeague");
const techBurn = require("../models/techBurn");
const treasureHunt = require("../models/treasureHunt");
const vividly = require("../models/vividly");
const { route } = require('./registration');

router.get('/hackathonData', (req, response) => {
    // PasswordCheck Here
    let currentDate = new Date();
    let fileName = 'hackathon' + currentDate.getDate() + '-' + currentDate.getMonth() + 'time' + currentDate.getHours() + ':' + currentDate.getMinutes()
    let exportType = 'xls'
    hackathon.find().then(foundData => {
        let data = JSON.stringify(foundData)
        const result = exportFromJSON({
            data,
            fileName,
            exportType,
            processor(content, type, fileName) {
                 response.setHeader('Content-disposition', 'attachment;filename=' + fileName)
                return content
            }
        })
        response.send(result)
    })
})

router.get('/treasureHuntData', (req, response) => {
    // PasswordCheck Here
    let currentDate = new Date();
    let fileName = 'ctf' + currentDate.getDate() + '-' + currentDate.getMonth() + 'time' + currentDate.getHours() + ':' + currentDate.getMinutes()
    let exportType = 'xls'
    treasureHunt.find().then(foundData => {
        let data = JSON.stringify(foundData)
        const result = exportFromJSON({
            data,
            fileName,
            exportType,
            processor(content, type, fileName) {
                response.setHeader('Content-Type', 'application/vnd.ms-excel')
                response.setHeader('Content-disposition', 'attachment;filename=' + fileName)
                return content
            }
        })
        response.send(result)
    })
})

router.get('/rocketLeagueData', (req, response) => {
    // PasswordCheck Here
    let currentDate = new Date();
    let fileName = 'speciawar' + currentDate.getDate() + '-' + currentDate.getMonth() + 'time' + currentDate.getHours() + ':' + currentDate.getMinutes()
    let exportType = 'xls'
    rocketLeague.find().then(foundData => {
        let data = JSON.stringify(foundData)
        const result = exportFromJSON({
            data,
            fileName,
            exportType,
            processor(content, type, fileName) {
                response.setHeader('Content-Type', 'application/vnd.ms-excel')
                response.setHeader('Content-disposition', 'attachment;filename=' + fileName)
                return content
            }
        })
        response.send(result)
    })
})

router.get('/techBurnData', (req, response) => {
    // PasswordCheck Here
    let currentDate = new Date();
    let fileName = 'infomaze' + currentDate.getDate() + '-' + currentDate.getMonth() + 'time' + currentDate.getHours() + ':' + currentDate.getMinutes()
    let exportType = 'xls'
    techBurn.find().then(foundData => {
        let data = JSON.stringify(foundData)
        const result = exportFromJSON({
            data,
            fileName,
            exportType,
            processor(content, type, fileName) {
                response.setHeader('Content-Type', 'application/vnd.ms-excel')
                response.setHeader('Content-disposition', 'attachment;filename=' + fileName)
                return content
            }
        })
        response.send(result)
    })
})

router.get('/vividlyData', (req, response) => {
    // PasswordCheck Here
    let currentDate = new Date();
    let fileName = 'vividly' + currentDate.getDate() + '-' + currentDate.getMonth() + 'time' + currentDate.getHours() + ':' + currentDate.getMinutes()
    let exportType = 'xls'
    vividly.find().then(foundData => {
        let data = JSON.stringify(foundData)
        const result = exportFromJSON({
            data,
            fileName,
            exportType,
            processor(content, type, fileName) {
                response.setHeader('Content-Type', 'application/vnd.ms-excel')
                response.setHeader('Content-disposition', 'attachment;filename=' + fileName)
                return content
            }
        })
        response.send(result)
    })
})

module.exports = router