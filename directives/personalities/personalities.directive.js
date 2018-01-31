app.directive('personalities', [
function() {
	return {
		restrict: 'E',
		scope: {
			stat: "="
		},
		replace: false,
		templateUrl: 'directives/personalities/personalities.directive.html',
		controller: function($scope){
            	//console.log($scope.stat)
		},
		link : function($scope, $element, $attrs) {
            
		}
	}
}]);