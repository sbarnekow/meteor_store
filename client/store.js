SimpleSchema.debug = true;
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
	// fileId: {
	// 	type: String,
	// 	label: "fileId",
	// 	optional: true
	// }
});
Articles = new Mongo.Collection("articles");
Articles.attachSchema(ArticleSchema);

Files = new FS.Collection("files", {
	stores: [new FS.Store.GridFS("filesStore")]
});

Template.articles.Articles = function(){
	// Articles.insert({title: "hello", description: "this is a description", price: 10});
	console.log('im getting read');
	return Articles.find({});
};