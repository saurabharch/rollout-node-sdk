var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(rollout){


  it('should create a message', function(done){
    this.timeout(20000);
    rollout.auth.signin('saurabh@raindigi.com', 123456).then(function(logindata) {
      rollout.messages.send('Sender Node SDK', '5aaa99024c3b110014b478f0', 'Saurabh Kashyap', 'hello from Node SDK')
        .then(function(data){
          console.log("rollout-node-sdk send resolve ", data);
        expect(data).to.exist;
        // expect(data.sender_fullname).to.eqls("Sender Node SDK");
        // console.log("rollout.auth.getCurrentToken() ", rollout.auth.getCurrentToken());
        expect(rollout.auth.getCurrentToken()).to.exist;
        rollout.auth.logout();
        done();
      }).catch(function(err, res){
        console.log(res);
        rollout.auth.logout();
        done(err);
      });
    });
   
  });


  it('should create a message with admin', function(done){
    this.timeout(20000);
    rollout.auth.setAdminToken("rollout-secret-orgAa,");
      rollout.messages.send('Sender Node SDK', '5aaa99024c3b110014b478f0', 'Saurabh Kashyap', 'hello from Node SDK')
        .then(function(data){
          console.log("send resolve ", data);
        expect(data).to.exist;
        // expect(data.sender_id).to.eqls("5aaa99024c3b110014b478f0");
        
        
        done();
      }).catch(function(err, res){
        console.log(res);
        rollout.auth.logout();
        done(err);
      });
   
  });



};