const express = require('express');

const feedController = require('../controller/feed')

const router = express.Router();

//Get /feed /posts
router.get('/posts', feedController.getPosts);

//Get /feed /posts
router.post('/posts', feedController.createPost);

module.exports = router;