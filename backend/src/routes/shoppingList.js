const express = require('express');

const router = express.Router();
const SHOPPINGLIST = [
  {
    id: 1,
    item: 'item-1',
  },
  {
    id: 2,
    item: 'item-2',
  },
  {
    id: 3,
    item: 'item-3',
  },
];

let nextId = SHOPPINGLIST.length;

// Route: Get all list
router.get('/', (req, res) => {
  res.json(SHOPPINGLIST);
});

// Route: Get list by id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const list = SHOPPINGLIST.find((c) => c.id === id);
  if (!list) {
    res.status(404).send('Shopping List Page Not Found');
    return;
  }
  res.json(list);
});

router.post('/', (req, res) => {
  if (!req.body.item || req.body.item.length === 0) {
    res.status(400).send('"item" is required');
    return;
  }

  if (!req.body.item || req.body.item.length < 3) {
    res.status(400).send('"item" length must be at least 3 characters long');
    return;
  }

  const myPostList = {
    id: nextId += 1,
    item: req.body.item,
  };
  SHOPPINGLIST.push(myPostList);
  res.send(myPostList);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const myDeleteList = SHOPPINGLIST.find((c) => c.id === id);

  if (!myDeleteList) {
    res.status(404).send('Shopping List Page Not Found');
    return;
  }

  const index_DELETE = SHOPPINGLIST.indexOf(myDeleteList);
  SHOPPINGLIST.splice(index_DELETE, 1);
  res.json({ message: 'Item deleted successfully' });
});

module.exports = router;
