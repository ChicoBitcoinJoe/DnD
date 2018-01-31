app.controller('PrintViewController', ['$scope',
function($scope){
    console.log('Loading Home View');

    $scope.stats = [
        {name: 'strength', skills: ['athletics']},
        {name: 'dexterity', skills: ['acrobatics','sleight of hand','stealth']},
        {name: 'constitution', skills: []},
        {name: 'intelligence', skills: ['arcana','history','investigation','nature','religion']},
        {name: 'wisdom', skills: ['animal handling','insight','medicine','perception','survival']},
        {name: 'charisma', skills: ['deception','intimidation','performance','pursuasion']},
    ];

    $scope.interval = setInterval(function(){
        //window.print();
        clearInterval($scope.interval);
    }, 500);
}]);