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
}

var editableDefaults = {
	mode: 'inline',
	toggle: 'click',
	onblur: 'submit',
	inputclass: 'input-small',
	savenochange: true,
	showbuttons: 'bottom'
};

$.extend($.fn.editable.defaults, editableDefaults);


Template.articles.events = {
	'click #delete-article': function(){
		return Articles.remove(this._id);
		console.log("success deleting" + this.title);
	},
	'click .editable': function(){
		$('.article-title p[data-name="title"]').editable({ 
			success: function(_this){
					console.log("articleid  " + this._id);
					// Articles.update(_this.data._id, { $set: { title: newValue } } );
			}
		});
	}
};

Template.editArticle.helpers({
	article: function(){
		return Articles.findOne(Session.get('selectedArticleId'));
	},
})