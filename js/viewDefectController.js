/// <reference path="angular.js" />
/// <reference path="dataload.js" />

function viewDefectController($scope)
{
    $scope.defects = [];

    $scope.init = function ()
    {
        ///<summary>
        ///Loads the 
        var data = JSON.parse(localStorage.getItem("defects"));

        if (data != null)
        {
            $scope.defects = data;
        }
    }
}