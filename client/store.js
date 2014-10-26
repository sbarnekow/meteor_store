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

	// $('p#title.editable').editable({
	// 	defaultValue: "Please edit me",
	// 	success: function(response, newValue){
	// 		return Articles.update({_id: this._id}, {$set: {title: newValue}});
	// 	}
	// });
};

Template.articles.events = {
	'click #delete-article': function(){
		return Articles.remove(this._id);
		console.log("success deleting" + this.title);
	},
	'window onLoad': function(){
		$('p#title.editable').editable({ success: alert("hi") });
	}
};

Template.editArticle.helpers({
	article: function(){
		return Articles.findOne(Session.get('selectedArticleId'));
	},
})