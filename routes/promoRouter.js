const express = require('express');
const bodyparser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyparser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200 ;
    res.setHeader ('Content-Type','test/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promos to you!');
})
.post((req, res, next) => {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promos');
})
.delete((req, res, next) => {
    res.end('Deleting all promos');
});

promoRouter.route('/:id')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})  
.get((req,res,next) => {
    res.end('Will send details of the promo: ' + req.params.id +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promos/'+ req.params.id);
})
.put((req, res, next) => {
  res.write('Updating the promo: ' + req.params.id + '\n');
  res.end('Will update the promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promo: ' + req.params.id);
});

module.exports = promoRouter;

