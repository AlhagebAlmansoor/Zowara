


var app = angular.module("myApp", "");

app.service("myService", function ($http) {

    //get All Eployee
    this.getHotels = function () {
        debugger;
        return $http.get("Hotel/GetHotels");
    };

    // get Hotel By Id
    this.getHotel = function (id) {
        var response = $http({
            method: "post",
            url: "Hotel/GetHotel",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }

    // Update Hotel
    this.editHotel = function (hotel) {
        var response = $http({
            method: "post",
            url: "Hotel/EditHotel",
            data: JSON.stringify(hotel),
            dataType: "json"
        });
        return response;
    }

    // Add Hotel
    this.addHotel = function (hotel) {
        var response = $http({
            method: "post",
            url: "Hotel/AddHotel",
            data: JSON.stringify(hotel),
            dataType: "json"
        });
        return response;
    }

    //Delete Hotel
    this.deleteHotel = function (id) {
        var response = $http({
            method: "post",
            url: "Hotel/DeleteHotel",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }
};

app.controller("myCntrl", function ($scope, myService) {
    $scope.divHotel = false;
    GetAllHotel();
    //To Get All Records 
    function GetAllHotels() {
        debugger;
        var getData = myService.getHotels();
        debugger;
        getData.then(function (emp) {
            $scope.Hotels = emp.data;
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editHotel = function (Hotel) {
        debugger;
        var getData = myService.getHotel(Hotel.Id);
        getData.then(function (emp) {
            $scope.Hotel = emp.data;
            $scope.HotelId = Hotel.Id;
            $scope.HotelName = Hotel.Name;
            $scope.Action = "Update";
            $scope.divHotel = true;
        },
            function () {
                alert('Error in getting records');
            });
    }

    $scope.AddUpdateHotel = function () {
        debugger;
        var Hotel = {
            Name: $scope.HotelName,
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Hotel.Id = $scope.HotelId;
            var getData = myService.updateEmp(Hotel);
            getData.then(function (msg) {
                GetAllHotel();
                alert(msg.data);
                $scope.divHotel = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            var getData = myService.AddEmp(Hotel);
            getData.then(function (msg) {
                GetAllHotels();
                alert(msg.data);
                $scope.divHotel = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddHotelDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divHotel = true;
    }

    $scope.deleteHotel = function (Hotel) {
        var getData = myService.DeleteEmp(Hotel.Id);
        getData.then(function (msg) {
            GetAllHotel();
            alert('Hotel Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.HotelId = "";
        $scope.HotelName = "";
        $scope.HotelEmail = "";
        $scope.HotelAge = "";
    }
});