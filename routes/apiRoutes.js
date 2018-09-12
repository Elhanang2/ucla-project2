const express = require('express');
const router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Questions
//Do not need create, update, or delete functionality
//READ all questions
router.get('/questions', function(req, res) {
    db.Question.findAll({}).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//Articles

//READ articles by category
router.get('/articles/category/:category', function(req, res) {
    db.Article.findAll({
        where: {
            category: req.params.category
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ all articles by RecommendationId(foreign key)
router.get('/articles/rec/:id', function(req, res) {
    db.Article.findAll({
        where: {
            RecommendationId: req.params.id
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ all articles
router.get('/articles', function(req, res) {
    db.Article.findAll({}).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//Recommendations

//READ all recommendations
router.get('/recommendations', function(req, res) {
    db.Recommendation.findAll({}).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ all recommendations by category
router.get('/recommendations/category/:category', function(req, res) {
    db.Recommendation.findAll({
        where: {
            category: req.params.category
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//READ recommendation range for certain score
router.get('/recommendations/score/:score', function(req, res) {
    console.log('route hit');
    db.Recommendation.findAll({
        where: {
            [Op.and]: {
                min_score: {
                    [Op.lte]: req.params.score
                }, 
                max_score: {
                    [Op.gte]: req.params.score
                }
            }
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//Users

//READ all users
router.get('/users', function(req, res) {
    db.User.findAll({}).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error){
        res.status(404);
        return res.json(error);
    });
});

//READ user by ID
router.get('/users/id/:id', function(req, res) {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

//CREATE new user
router.post('/users', function(req, res) {
    db.User.create(req.body).then(function(result) {
        res.status(200);
        return res.json(result);
    }).catch(function(error) {
        res.status(404);
        return res.json(error);
    });
});

module.exports = router;