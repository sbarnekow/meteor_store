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

Template.articles.helpers({ 
	allArticles: function(){
		return Articles.find({});
	}
});


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
		$('p[data-name="title"]').editable({
			error: function(response, newValue){
				if(response.status === 500){
					return 'Service Unavailable, please try again later.'
				} else {
					console.log(response.responseText);
				}
			}, 
			success: function(newValue){
				var articleId = $(this).data("pk");

				var articleProperties = {title: newValue}

				console.log(articleId, articleProperties);

				Articles.update(articleId, {$set: articleProperties});
			}
		});
		// $('p[data-name="description"]').editable({ 
		// 	error: function(response, newValue){
		// 		if(response.status === 500){
		// 			return 'Service Unavailable, please try again later.'
		// 		} else {
		// 			console.log(response.responseText);
		// 		}
		// 	},
		// 	success: function(newValue){
		// 		console.log(id);
		// 		Articles.update(id, {
		// 			$set: {description: newValue} 
		// 		});
		// 	}
		// });
		// $('p[data-name="price"]').editable({ 
		// 	success: function(newValue){
		// 		Articles.update(id, {
		// 			$set: {price: newValue} 
		// 		});
		// 	}
		// });
	}
};