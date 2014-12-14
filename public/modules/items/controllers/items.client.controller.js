'use strict';

// Items controller
angular.module('items').controller('ItemsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Items', 'ngTableParams',
	function($scope, $stateParams, $location, Authentication, Items, NgTableParams, $http ) {
		$scope.authentication = Authentication;

		//AJAX Data loading t.b.v. ngTable

		var params = {
	        page: 1,            // show first page
	        count: 10,          // count per page
	        filter: {},
		};

		var settings = {
	        total: 0,           // length of data
	        counts: [],
	        getData: function($defer, params) {
	            // ajax request to api
	            Items.get(params.url(), function(response) {
	            	params.total(response.total);
	            	$defer.resolve(response.results);
	            });
	        }			
		};

		$scope.tableParams = new NgTableParams(params, settings);

		// Create new Item
		$scope.create = function() {
			// Create new Item object
			var item = new Items ({
				name: this.name,
				amount: this.amount,
				amountDesired: this.amountDesired
			});

			// Redirect after save
			item.$save(function(response) {
				$location.path('items/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.amount = '';
				$scope.amountDesired = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Item
		$scope.remove = function( item ) {
			if ( item ) { item.$remove();

				for (var i in $scope.items ) {
					if ($scope.items [i] === item ) {
						$scope.items.splice(i, 1);
					}
				}
			} else {
				$scope.item.$remove(function() {
					$location.path('items');
				});
			}
		};

//inline table update
  $scope.updateItem = function() {
  	var item = {
      name: this.name
    };
    return $http.post('items/' + $scope.item._id, $scope.item);
  };  

		// Update existing Item
		$scope.update = function() {
			var item = $scope.item ;

			item.$update(function() {
				$location.path('items/' + item._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Items
		$scope.find = function() {
			$scope.items = Items.query();
		};

		// Find existing Item
		$scope.findOne = function() {
			$scope.item = Items.get({ 
				itemId: $stateParams.itemId
			});
		};
	}
]);