const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST the feedback to the database
router.post('/', (req, res) => {

    // log the req.body so you know what you're
    // about to insert into the database
    console.log('req.body is', req.body);

    // create a const to access properties of
    // while inserting data into the table
    const newFeedback = req.body

    // the SQL code that will communicate with db
    const sqlText = `
        INSERT INTO "feedback" (
            "feeling",
            "understanding",
            "support",
            "comments"
        )
        VALUES ($1, $2, $3, $4)
    `;
    pool.query(sqlText, [
        // these replace the $ values above to
        // prevent SQL injections into our pages
        newFeedback.feeling, // $1
        newFeedback.understanding, //$2
        newFeedback.support, // $3
        newFeedback.comments // $4
    ]).then((result) => {
        res.sendStatus(201); // Created
    }).catch((error) => {
        res.sendStatus(500);
    });
});

module.exports = router;