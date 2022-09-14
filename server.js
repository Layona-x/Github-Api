const express = require('express')
const fetch = require("node-fetch");
const app = express()
app.listen(3000,() => {
  console.log("3000 Portunda Dinleniyor")
})
app.get('/',function(req,res){
  res.json({error:"Please Send Get /github"})
})
app.get('/github',function(req,res){
  res.json({error:"User Is Not Defined"})
})
app.get('/github/:name',function(req,res){
  fetch(`https://api.github.com/users/${req.params.name}`).then(a => a.json()).then(result => {
  if(result){
    res.json({
 url:result.html_url,
 avatar:result.avatar_url,
 account_type: result.account_type,
 name: result.login,
 company: result.company,
 blog: result.blog,
 location: result.location,
 email: result.email,
 bio: result.bio,
 twitter: result.twitter_username,
 public_repos:result.public_repos,
 public_gists:result.public_gists,
 followers: result.followers,
 following: result.following,
 created_at: result.created_at,
 updated_at: result.updated_at
    })
  }else{
    res.json({error:"User İs Not Defined"})
  }
  })
})