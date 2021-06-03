import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
/*Get Home Page*/
router.get('/home', function (req, res, next)
{
  res.render('index', {title: "Home"});
});
/*Get About Page*/
router.get('/about', function (req, res, next)
{
  res.render('index', {title: "About"});
});
/*Get Project Page*/
router.get('/projects', function (req, res, next)
{
  res.render('index', {title: "Projects"});
});
/*Get Services Page*/
router.get('/services', function (req, res, next)
{
  res.render('index', {title: "Services"});
});
/*Get Contact Page*/
router.get('/contact', function (req, res, next)
{
  res.render('index', {title: "Contact"});
});