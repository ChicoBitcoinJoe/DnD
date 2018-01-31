app.directive('footer', [
function() {
	return {
		restrict: 'E',
		scope: {
            options: "="
		},
		replace: true,
		templateUrl: 'directives/footer/footer.directive.html',
		controller: function($scope){
            
		},
		link : function($scope, $element, $attrs) {
            
		}
	}
}]);