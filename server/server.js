Articles = new Mongo.Collection("articles");


Meteor.publish("Articles", function(){
	return Meteor.find({}, {fields: {name: 1, description: 1, picture: 1}});
});

Meteor.startup(function(){
	if (Articles.find().count() === 0){
		Articles.insert({name: "Random Test Article"});
	}
});
