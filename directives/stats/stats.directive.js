app.directive('stats', [
function() {
	return {
		restrict: 'E',
		scope: {
			stat: "="
		},
		replace: false,
		templateUrl: 'directives/stats/stats.directive.html',
		controller: function($scope){
            	//console.log($scope.stat)
		},
		link : function($scope, $element, $attrs) {
            
		}
	}
}]);