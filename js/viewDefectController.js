/// <reference path="angular.js" />
/// <reference path="dataload.js" />

function viewDefectController($scope)
{
    $scope.defects = [];

    $scope.init = function ()
    {
        var data = JSON.parse(localStorage.getItem("defects"));

        if (data != null)
        {
            $scope.defects = data;
        }
    }
}