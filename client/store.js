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
	$('#edit-article').click(function(){
		alert(this._id);
	});
};

Template.editArticle.Articles = function(){
};

Template.editArticle.helpers = function(){
	editing: function editArticleHelper(){
		return Articles.findOne({_id: Session.get('this._id')});
	}
};

$(document).ready(function(){
	$('#edit-article').click(function(){
		$('#edit-modal').modal({show: true})
	});
});
