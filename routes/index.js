var express = require('express');
var db = require('../model/helper')

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("hello3");
});

router.get('/entries', async function(req, res, next) {
  try {
    const response = await db('SELECT * from entries;')
    const entries = response.data
    
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
  const entries = results.data
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
  const group = body.group
  const sub_group = body.sub_group
  const fell_name = body.fell_name
  const fell_height = body.fell_height
  const grid_reference = body.grid_reference
  const date_climbed = body.date_climbed
  
  try {
    await db (`
    insert into entries (
      id,
      group, 
      sub_group, 
      fell_name, 
      fell_height, 
      grid_reference, 
      date_climbed)
    values (
      `${id}`,
      `${group}`, 
      `${sub_group}`,
      `${fell_name}`,
      `${fell_height}`,
      `${grid_reference}`,
      `${date_climbed}`    
      );
    `)

    res.status(201).send()
  } catch(error) {
    res.status(500).send(error)
  }

});


module.exports = router;
