const express = require("express");
const router = express.Router();
const chalk = require("chalk");
const { nanoid } = require("nanoid");

// IMporting Models
const hackathon = require("../models/hackathon");
const rocketLeague = require("../models/rocketLeague");
const techBurn = require("../models/techBurn");
const treasureHunt = require("../models/treasureHunt");
const vividly = require("../models/vividly");

// Importing Validation Functions
const validators = require("../functions/validation");

// Importing Node Mailer Transporter
const transporter = require("../functions/nodemailer");

// Importing Templates for mail
const templateMailGen = require("../templates/registration");

router.post("/registerHackathon", validators.validationHackathon, (req, res) => {
    let data = req.body;
    data.portalPassword = nanoid(10);
    if (req.body.sizeOfTeam == req.body.participants.length) {
      let newRegisteredTeam = new hackathon(data);
      newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
          let emailTemplate = templateMailGen(
            "Hackathon",
            savedTeam.participants[0].name,
            savedTeam.teamName,
            savedTeam.sizeOfTeam,
            savedTeam.contactNumber,
            savedTeam.portalPassword
          );

          transporter
            .sendMail({
              from: process.env.MAIL_USERNAME,
              to: req.body.emailID,
              subject: "Techathlon Registration-2023",
              html: emailTemplate,
            })
            .then((response) => {
              console.log(chalk.green(response.messageId));
              res.json({ done: true, savedTeam });
            });
        } else {
          res.json({ done: false });
        }
      });
    } else {
      res.json({
        done: false,
        error: {
          details: [
            {
              message:
                "Size of team and Number of participants should be same.",
            },
          ],
        },
      });
    }
  }
);

router.post("/registerRocketLeague", validators.validationRocketLeague, (req, res) => {
    if (req.body.sizeOfTeam == req.body.participants.length) {
      let newRegisteredTeam = new rocketLeague(req.body);
      newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
          let emailTemplate = templateMailGen(
            "Rocket League",
            savedTeam.participants[0].name,
            savedTeam.teamName,
            savedTeam.sizeOfTeam,
            savedTeam.contactNumber
          );

          transporter
            .sendMail({
              from: process.env.MAIL_USERNAME,
              to: req.body.emailID,
              subject: "Techathlon Registration-2023",
              html: emailTemplate,
            })
            .then((response) => {
              console.log(chalk.green(response.messageId));
              res.json({ done: true, savedTeam });
            });
        } else {
          res.json({ done: false });
        }
      });
    } else {
      res.json({
        done: false,
        error: {
          details: [
            {
              message:
                "Size of team and Number of participants should be same.",
            },
          ],
        },
      });
    }
  }
);

router.post("/registerTechBurn", validators.validationTechBurn, (req, res) => {
  let newRegisteredTeam = new techBurn(req.body);
  newRegisteredTeam.save().then((savedTeam) => {
    if (savedTeam) {
      let emailTemplate = templateMailGen(
        "Tech Burn",
        savedTeam.name,
        savedTeam.teamName,
        undefined,
        savedTeam.contactNumber
      );

      transporter
        .sendMail({
          from: process.env.MAIL_USERNAME,
          to: req.body.emailID,
          subject: "Techathlon Registration-2023",
          html: emailTemplate,
        })
        .then((response) => {
          console.log(chalk.green(response.messageId));
          res.json({ done: true, savedTeam });
        });
    } else {
      res.json({ done: false });
    }
  });
});

router.post("/registerTreasureHunt", validators.validationtreasureHunt,(req, res) => {
    let data = req.body;
    data.portalPassword = nanoid(10);
    if (req.body.sizeOfTeam == req.body.participants.length) {
      let newRegisteredTeam = new treasureHunt(data);
      newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
          let emailTemplate = templateMailGen(
            "Treasure Hunt",
            savedTeam.participants[0].name,
            savedTeam.teamName,
            savedTeam.sizeOfTeam,
            savedTeam.contactNumber,
            savedTeam.portalPassword
          );

          transporter
            .sendMail({
              from: process.env.MAIL_USERNAME,
              to: req.body.emailID,
              subject: "Techathlon Registration-2023",
              html: emailTemplate,
            })
            .then((response) => {
              console.log(chalk.green(response.messageId));
              res.json({ done: true, savedTeam });
            });
        } else {
          res.json({ done: false });
        }
      });
    } else {
      res.json({
        done: false,
        error: {
          details: [
            {
              message:
                "Size of team and Number of participants should be same.",
            },
          ],
        },
      });
    }
  }
);

router.post("/registerVividly", validators.validationVividly, (req, res) => {
  let newRegisteredTeam = new vividly(req.body);
  newRegisteredTeam.save().then((savedTeam) => {
    if (savedTeam) {
      let emailTemplate = templateMailGen(
        "Vividly",
        savedTeam.name,
        savedTeam.teamName,
        undefined,
        savedTeam.contactNumber
      );

      transporter
        .sendMail({
          from: process.env.MAIL_USERNAME,
          to: req.body.emailID,
          subject: "Techathlon Registration-2023",
          html: emailTemplate,
        })
        .then((response) => {
          console.log(chalk.green(response.messageId));
          res.json({ done: true, savedTeam });
        });
    } else {
      res.json({ done: false });
    }
  });
});

router.get("/registrationDetails", async (req, res) => {
  try {
    let hackathonData = await (await hackathon.find()).length;
    let techBurnData = await (await techBurn.find()).length;
    let treasureHuntData = await (await treasureHunt.find()).length;
    let rocketLeagueData = await (await rocketLeague.find()).length;
    let vividlyData = await (await vividly.find()).length;
    let outputString = `
    Hackathon : ${hackathonData} \n
    Tech Burn : ${techBurnData} \n
    Treasure Hunt : ${treasureHuntData}\n
    Rocket League : ${rocketLeagueData}\n
    Vividly : ${vividlyData}\n
    Total Registrations: ${
      hackathonData +
      techBurnData +
      treasureHuntData +
      rocketLeagueData +
      vividlyData
    }
    `;
    res.write(outputString);
    res.end();
  } catch (e) {
    res.send("Some error in fetching Data. Contact Tech Team.");
  }
});
module.exports = router;
