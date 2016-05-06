
app.controller('SuggestionsController', [ '$scope', '$routeParams', 'suggestions', function($scope,$routeParams,suggestions){
	
	$scope.post = suggestions.posts[$routeParams.id];

	$scope.addComment = function(comment){

		if(!comment || comment ===''){
			return;
		}
		else{
			var com = {
				body: comment,
				upvotes: 0
			};

			$scope.post.comments.push(com);
		}
	};

	$scope.upVoteComment = function(comment){
		comment.upvotes += 1;
	};
}]);