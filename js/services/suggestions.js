
app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
		{
			title: 'Free pizza at club meetings',
			upvotes: 15,
			comments: [{body:'great idea!', upvotes:0 }, {body:'I love pizza!', upvotes: 0}, {body:'Only if it is legit NY Style Pizza', upvotes:0}],
			},
			{
			title: 'End all club emails with Laffy Taffy jokes',
			upvotes: 9,
			comments: [{body:'qwerky', upvotes:0}, {body:'unnecessary & necessary at the same time', upvotes: 0}, {body:'why not?', upvotes:0}],
			},
			{
			title: 'Retrofit water fountain with Gatorade',
			upvotes: 7,
			comments: [{body:'never had it before', upvotes: 0}, {body:'more qwerky stuff', upvotes:0}, {body:'so many brands in one idea', upvotes:0}],
			},
			{
			title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
			upvotes: 3,
			comments: [{body:'gawd no', upvotes:0}, {body:'this would probably waste some needed time', upvotes:0}, {body:'May make people feel uncomfortable', upvotes:0}],
			},
			]
		};
		return demoSuggestions;
}]);