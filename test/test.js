var should = require('chai').should();
var expect = require('chai').expect;
var dotenv = require('dotenv');
console.log("here");
// First try to load the enviroment variables
try { dotenv.load(); } catch(error) { console.error(error); }

var Rollout = require('../index.js');
var rollout = new Rollout({
  url: process.env.ROLLOUT_URL,
  appid: process.env.ROLLOUT_APPID,
  oauth: true,
  authurl:  process.env.ROLLOUT_AUTH_URL,
  firebase_apikey:  process.env.FIREBASE_APIKEY,
  firebase_database: process.env.FIREBASE_DATABASE
});

describe('Rollout', function(){
  describe('messages', function(){
    require('./models/messages.js')(rollout);
  });
  describe('groups', function(){
    require('./models/groups.js')(rollout);
  });
});