
define('list/bookController', function(require, exports, module){
	var app = require('global');
	/*初始化图书列表页*/
	app.controller('BookListController', function($rootScope, bookList){
		if(!$rootScope.keywordsObj.book){
			$rootScope.keywordsObj.book = 'C语言';
		}
		bookList.getData($rootScope.keywordsObj.book);
	});
	
	
	/*图书详情页*/
	app.controller('BookDetailController', function($rootScope, $http, $scope, $location, ServiceConfig){
		var bookId = $location.path().split('/book/')[1] || '';
		$rootScope.isNoLoaded = true;
		$http.jsonp(ServiceConfig.book_search_id + '' + bookId + '?callback=showBookDeatil');
		window.showBookDeatil = function(data){
			$rootScope.isNoLoaded = false;
			$scope.data = data;
		};
	});
});
