/// <reference path="dataload.js" />
/// <reference path="angular.js" />

function viewDefectController($scope)
{
    $scope.defects;

    $scope.Reportdefects = $scope.defects;

    

    $scope.init = function ()
    {
        var data = localStorage.getItem("defects");

        if (data.length > 0)
        {
            data = JSON.parse(data);
            $scope.defects = data;
        }
        $scope.Reportdefects = $scope.defects;
    }

    $scope.progressReport = function ()
    {
        $scope.Reportdefects = [];
        angular.forEach($scope.defects, function (defect)
        {

            if (defect.Status.ID == 2)
            {
                $scope.Reportdefects.push(defect);
            }
        });
    }

    $scope.unassignedReport = function ()
    {
        ///<summary>
        ///Searches for all issues that are not assigned to an engineer.
        ///</summary>
        $scope.Reportdefects = [];
        angular.forEach($scope.defects, function (defect)
        {

            if (defect.Engineer.length == 0)
            {
                $scope.Reportdefects.push(defect);
            }
        });
    }
}