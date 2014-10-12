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
	return Articles.updateArticleInfo();
};

// Template.updateArticle.helpers({
// 	editArticle: function updateArticleHelper(){
// 		return Articles.findOne({_id: selectedPost});
// 	}
// });

$(document).ready(function(){
	$('.crud-buttons').on('click', '#edit-article', function (){
		alert('hey!');
		console.log( this.parentNode.id );
		// console.log(selectedPost);
	});
});
