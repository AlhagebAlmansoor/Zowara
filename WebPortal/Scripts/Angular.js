// Defining angularjs module
var app = angular.module('demoModule', []);

// Defining angularjs Controller and injecting hotelsService
app.controller('demoCtrl', function ($scope, $http, hotelsService) {

    $scope.hotelsData = null;
    // Fetching records from the factory created at the bottom of the script file
    hotelsService.GetAllRecords().then(function (d) {
        $scope.hotelsData = d.data; // Success
    }, function () {
        alert('Error Occured !!!'); // Failed
    });

  
    $scope.Hotel = {
        Id: '',
        Name: '',
        Address: ''
    };

    // Reset Hotel details
    $scope.clear = function () {
        $scope.Hotel.Id = '';
        $scope.Hotel.Name = '';
        $scope.Hotel.Address = '';
    }

    //Add New Item
    $scope.save = function () {
        if ($scope.Hotel.Name !== "" &&
            $scope.Hotel.Address !== "") {
            // Call Http request using $.ajax

            //$.ajax({
            //    type: 'POST',
            //    contentType: 'application/json; charset=utf-8',
            //    data: JSON.stringify($scope.Hotel),
            //    url: 'api/Hotel/PostHotel',
            //    success: function (data, status) {
            //        $scope.$apply(function () {
            //            $scope.hotelsData.push(data);
            //            alert("Hotel Added Successfully !!!");
            //            $scope.clear();
            //        });
            //    },
            //    error: function (status) { }
            //});

            // or you can call Http request using $http
            $http({
                method: 'POST',
                url: 'api/Hotel/PostHotel/',
                data: $scope.Hotel
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.hotelsData.push(response.data);
                $scope.clear();
                alert("Hotel Added Successfully !!!");
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

    // Edit Hotel details
    $scope.edit = function (data) {
        $scope.Hotel = { Id: data.Id, Name: data.Name, Address: data.Address };
    }

    // Cancel Hotel details
    $scope.cancel = function () {
        $scope.clear();
    }

    // Update Hotel details
    $scope.update = function () {
        if ($scope.Hotel.Name !== "" &&
            $scope.Hotel.Address !== "" && $scope.Hotel.Category !== "") {
            $http({
                method: 'PUT',
                url: 'api/Hotel/PutHotel/' + $scope.Hotel.Id,
                data: $scope.Hotel
            }).then(function successCallback(response) {
                $scope.hotelsData = response.data;
                $scope.clear();
                alert("Hotel Updated Successfully !!!");
            }, function errorCallback(response) {
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

    // Delete Hotel details
    $scope.delete = function (index) {
        $http({
            method: 'DELETE',
            url: 'api/Hotel/DeleteHotel/' + $scope.hotelsData[index].Id,
        }).then(function successCallback(response) {
            $scope.hotelsData.splice(index, 1);
            alert("Hotel Deleted Successfully !!!");
        }, function errorCallback(response) {
            alert("Error : " + response.data.ExceptionMessage);
        });
    };

});

// Here I have created a factory which is a popular way to create and configure services.
// You may also create the factories in another script file which is best practice.

app.factory('hotelsService', function ($http) {
    var fac = {};
    fac.GetAllRecords = function () {
        return $http.get('api/Hotel/GetAllhotels');
    }
    return fac;
});