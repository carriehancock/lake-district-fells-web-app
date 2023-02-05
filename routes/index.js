var express = require('express');
var db = require('../model/helper')

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send();
});

router.get('/entries', async function(req, res, next) {
  try {
    const response = await db('SELECT * from entries;')
    let entries = response.data
    
    res.send(entries);
  } catch(error) {
    res.status(500).send()
  }
});

//GET one entry

router.get("/:id", async function(req, res, next) {
  const params = req.params
  const id = params.id

  try {
  const results = await db(`
  SELECT * FROM entries WHERE id = ${id};
  `)
  let entries = results.data
  const entry = entries[0]

  if (!entry) {
    res.status(404).send()
    return
  }

  res.send({entry})
} catch (error) {
  res.status(500).send(error)
}

});

// INSERT a new entry into the DB

router.post("/", async function(req, res, next) {
  const body = req.body
  const fellGroup = body.fellGroup
  const fellSubGroup = body.fellSubGroup
  const fellName = body.fellName
  const fellHeight = body.fellHeight
  const gridReference = body.gridReference
  const dateClimbed = body.dateClimbed
  
  try {
    await db(`
    insert into entries (
      id, 
      group, 
      sub_group, 
      fell_name, 
      fell_height, 
      grid_reference, 
      date_climbed)
    values (
      '${id}',
      '${fellGroup}', 
      '${fellSubGroup}',
      '${fellName}',
      '${fellHeight}',
      '${gridReference}',
      '${dateClimbed});
    `);

    res.status(201).send()

  } catch(error) {
    res.status(500).send(error)
  }

});

// DELETE one entry from the database

router.delete("/:id", async function(req, res, next) {
  const params = req.params
  const id = params.id

  try {
    const results = await db(`
    SELECT * FROM entries WHERE id = ${id};
    `)
    const entries = results.data
    const entry = entries[0]

    if (!entry) {
      res.status(404).send()
      return
    }

  await db(`
  DELETE FROM entries WHERE id = ${id};
  `)

  res.send()
} catch (error) {
  res.status(500).send(error)
}

});



module.exports = router;
