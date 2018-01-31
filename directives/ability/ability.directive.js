app.directive('ability', [
function() {
	return {
		restrict: 'E',
		scope: {
			ability: "="
		},
		replace: false,
		templateUrl: 'directives/ability/ability.directive.html',
		controller: function($scope){
			//console.log($scope.ability)
		},
		link : function($scope, $element, $attrs) {
            
		}
	}
}]);