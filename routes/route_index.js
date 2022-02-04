
const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/', async function(req,res){

  let users = await User.find()

  res.render('index');
});

router.get('/search', async function(req,res){
  res.render('search');
});

router.get('/about', async function(req,res){
  res.render('about');
});

router.get('/login', async function(req,res){
  res.render('login');
});

router.get('/register', async function(req,res){
  res.render('register');
});
router.get('/newUser', async (req,res) =>{
  res.render('newUser');
});

router.post('/newUser', async (req,res) =>{

  let user = new User(req.body)
  await user.save()
  res.redirect("/")
});


router.get('/edit/:id', async (req,res) =>{
  let id = req.params.id
  let user = await User.findById(id)

  res.render('edit',{user});
});


// # PENDIENTE
router.post('/edit/:id', async (req,res) =>{
  await User.updateOne({_id:req.params.id},req.body);
  res.redirect("/")
});

// # PENDIENTE
router.post('/delete/:id', async (req,res) =>{
  let id = req.params.id
  await User.remove({_id:id});
  res.redirect("/")
});


router.get('/delete/:id', async (req,res) =>{
  let id = req.params.id
  let user = await User.findById(id)

  res.render('delete',{user});
});

module.exports = router;