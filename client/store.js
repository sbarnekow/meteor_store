Articles = new Mongo.Collection("articles");

Meteor.subscribe("articles");

Articles.insert({name: "Random Test Article"});

var article_list = Articles.find().fetch();

console.log( Meteor.userId() );
console.log(article_list);