if(Meteor.isServer) {
  Stripe = {
    connect: function(secretKey, publishKey) {
      var matched = 
        secretKey == 'sk_live_vb7uiw3iuk9XiDpKY' &&
        publishKey == 'pk_live_K6eoaP93bhbbAbXGt';

      if(matched) {
        console.log("You are successfully connected to Stripe");
      } else {
        console.log("Stripe secretKey or publishKey seems not to be correct.");
      }
    }
  };
}

if(Meteor.isClient) {
  Mixpanel = {
    init: function(token) {
      if(token == 'h6831893b1f732j6dsdsd73fe2e7644') {
        console.log('You are successfully connected to Mixpanel');
      } else {
        console.log("Mixpanel token seems not to be correct.");
      }
    }
  }
}