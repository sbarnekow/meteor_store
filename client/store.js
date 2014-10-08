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
	},
	picture: {
		type: [String],
		label: "Picture"
	}
});
Articles = new Mongo.Collection("articles");
Articles.attachSchema(ArticleSchema);

Files = new FS.Collection("files", {
	stores: [new FS.Store.GridFS("filesStore")]
});
