var controllerApp = angular.module('controllerApp', []);
controllerApp.controller('helloCont', function($scope) {
	$scope.greeting = {
		hi: 'hello Angular'
	}
});

controllerApp.controller('bookListCont', function($scope) {
	$scope.books = [{
			title: '英语语法',
			author: '薄冰'
		},
		{
			title: '英语语法1',
			author: '薄冰1'
		},
		{
			title: '英语语法2',
			author: '薄冰2'
		},
		{
			title: '英语语法3',
			author: '薄冰3'
		}
	]
})