Articles = new Mongo.Collection("articles");

Meteor.publish('allArticles', function(){
	return Articles.find();
});

