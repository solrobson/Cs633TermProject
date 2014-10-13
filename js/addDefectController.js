/// <reference path="angular.js" />
/// <reference path="dataload.js" />


function addDefectController($scope)
{
    $scope.addNew = function ()
    {
        $scope.defects.push($scope.defect);
        localStorage.setItem("defects", JSON.stringify($scope.defects));
        $scope.createNewDefect();
    }

    $scope.maxID = 0;
    $scope.curStatus;
    $scope.createNewDefect = function ()
    {
        $scope.maxID = ++$scope.maxID;
        $scope.clearDefect();
    }

    $scope.init = function ()
    {
        var statuses = localStorage.getItem(localStorageKeys.status);
        if (statuses != null)
        {
            $scope.statuses = JSON.parse(statuses);
            $scope.curStatus = $scope.statuses[0];
            alert((statuses));
        }

        var data = JSON.parse(localStorage.getItem("defects"));
        if (data == null)
        {
            $scope.defects = [];
        }
        else
        {
            $scope.defects = data;
        }
        angular.forEach($scope.defects, function (defect)
        {
            if (defect.ID != undefined)
            {
                if (defect.ID > $scope.maxID)
                {
                    $scope.maxID = defect.ID;
                }
            }
        });
        $scope.createNewDefect();
    }
    $scope.newDefect;
    $scope.clearDefect = function ()
    {
        $scope.defect =
           {
               'ID': $scope.maxID,
               'Title': '',
               'Description': '',
               'Project': '',
               'Severity': 0,
               'Status': 0,
               'Engineer': '',
               'Tester': '',
               'ResolvedVersion': '',
               'DiscoveredVersion': '',
               'ReportedDate': '',
               'Priority': '',
               'ResolutionDescription': '',
               'FixedTime': 1,
               'DateChanged': '',
               'TestDate': '',
               'ReleaseDate': '',
               'Visibility': 'true',
               'Comments': [{ 'User': '', 'Comment': '' }]
           }
    }
    $scope.statuses = [];
    $scope.defects = [];
}
