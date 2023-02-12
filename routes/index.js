var express = require("express");
var db = require("../model/helper");

var router = express.Router();

router.get("/", function (req, res, next) {
  res.send();
});

router.get("/Mountains", async function (req, res, next) {
  try {
    const response = await db("SELECT * from Mountains;");
    let mountains = response.data;

    res.send(mountains);
  } catch (error) {
    res.status(500).send();
  }
});

//GET one entry

router.get("/:id", async function (req, res, next) {
  const params = req.params;
  const id = params.id;

  try {
    const results = await db(`
  SELECT * FROM Mountains WHERE id = ${id};
  `);
    let mountains = results.data;
    const entry = mountains[0];

    if (!entry) {
      res.status(404).send();
      return;
    }

    res.send({ entry });
  } catch (error) {
    res.status(500).send(error);
  }
});

// INSERT a new entry into the DB

router.post("/", async function (req, res, next) {
  const body = req.body;
  const dateClimbed = body.dateClimbed;
  const userEntry = body.userEntry;

  try {
    await db(`
    insert into entries ( 
      date_climbed,
      userEntry)
    values ( 
      '${dateClimbed},
      '${userEntry},);

    `);

    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE one entry from the database

router.delete("/:id", async function (req, res, next) {
  const params = req.params;
  const id = params.id;

  try {
    const results = await db(`
    SELECT * FROM entries WHERE id = ${id};
    `);
    const entries = results.data;
    const entry = entries[0];

    if (!entry) {
      res.status(404).send();
      return;
    }

    await db(`
  DELETE FROM entries WHERE id = ${id};
  `);

    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
