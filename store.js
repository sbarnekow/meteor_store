if (Meteor.isClient) {
  Articles = new Mongo.Collection("articles");
  Articles.insert({name: "test article"});
  var allArticles = Articles.find({}).fetch();
  Articles.insert({text: "boop be doop"});
  // Meteor.publish("articles", function(){
  //   return Articles.find();
  // })

  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


// user
// customer
// article 

