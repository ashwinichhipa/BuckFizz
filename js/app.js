angular.module('BuckFizz', [])
    .controller('BuckFizzController', function ($scope, GitHubUser) {
		$scope.date = new Date();
		$scope.outputData = null;
		$scope.list = [];
		$scope.i = 0;
		$scope.range = [];
		$scope.returnOutput = function() {
			$scope.list = [];
			$scope.range = [];
			//for loop from initial value to end value
			for(this.i = $scope.inputinitial; this.i<=$scope.inputfinal;this.i++) {
				$scope.range.push(this.i);
				if (this.i%3 == 0 && this.i%5 == 0) {
				  $scope.list.push("BuckFizz"); //if number is multiple of both 3 and 5
				 }  
				else if (this.i%5 == 0) {
				  $scope.list.push("Buck");   //if number is multiple of  5
				 } 
				else if (this.i%3 == 0) {
				  $scope.list.push("Fizz");   //if number is multiple of 3
				 } 
				else {
				  $scope.list.push(this.i);	  //otherwise
				}
			}
			this.outputData = $scope.range.map(function(value, index) {
				return {
					user: value,
					lang: $scope.list[index]
				}
			});
			console.log(this.list.toString());
			$scope.inputinitial = '';
			$scope.inputfinal = '';
		};
	  
		$scope.users = [];
		//Fetching User info
		$scope.fetchUser = function () {
			$scope.users = [];
			//var users = ['ashwinichhipa'];
			var users = [$scope.gitHubUsername];
			users.forEach(function (userName) {
				var user = new GitHubUser(userName);
				user.getProfile().then(function () {
					$scope.users.push(user);
				});
			});
		}
	})

	.factory('GitHubUser', function ($http) {
			var apiUrl = 'https://api.github.com/';
			//Instantiate object
			var GitHubUser = function (username) {
				this.username = username;
				this.profile = null;
			};
		
		//Local proc for getting event info
		function getUserEvents() {
			var self = this;
			//Rest API Call to github
			return $http.get(apiUrl + 'users/' + this.username + '/events').then(function (response) {
				self.profile.events = response.data;
				return response;
			});
		}
		
		//Getting profile info
		GitHubUser.prototype.getProfile = function () {
			var self = this;
			var originalGetProfile = $http.get(apiUrl + 'users/' + this.username).then(function (response) {
				self.profile = response.data
				return response;
			});
			return originalGetProfile.then(function () {
				return getUserEvents.call(self);
			});
		};
		return GitHubUser;
	})