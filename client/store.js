Meteor.subscribe("articles");

ArticleSchema = new SimpleSchema({
	title: {
		type: String,
	    label: "Title",
		max: 200
	},
	description: {
		type: String,
		label: "Description",
		max: 2000
	},
	price: {
		type: Number,
		label: "Price",
		min: 0
	}
});
Articles = new Mongo.Collection("articles");
Articles.attachSchema(ArticleSchema);

Template.articles.Articles = function(){
	return Articles.find({});
};

Template.updateArticle.Articles = function(){
	return Articles.findOne(Session.get("selectedArticle"));
	console.log("this article is being updated" + "selectedArticle");
};

Template.articles.events({
	'click #edit-article': function(e, t){
		e.preventDefault();
		Session.set("selectedArticle", this._id);
	}
});
