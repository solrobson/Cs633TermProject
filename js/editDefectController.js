function viewDefectController($scope)
{
    $scope.defects;
    $scope.defect;
    $scope.defectID;
    $scope.newComment;
    $scope.clearComment = function ()
    {
        $scope.newComment = {Date: '', UserName: '', Title: '', Comment: ''}; 
    }

    $scope.init = function ()
    {
        var data = localStorage.getItem('defects');
        var hash = window.location.hash;
        $scope.defectID = parseInt(hash.substr(1));
        if (data != null)
        {
            $scope.defects = JSON.parse(data);
        }

        angular.forEach($scope.defects, function (defect)
        {
            if (defect.ID == $scope.defectID)
            {
                $scope.defect = defect;
            }
        });
        $scope.clearComment();
    }

    $scope.addComment = function ()
    {
        $scope.updateRecord();
    }

    $scope.updateRecord = function ()
    {
        angular.forEach($scope.defects, function (defect)
        {
            if (defect.ID == $scope.defectID)
            {
                defect = $scope.defect;
            }
        });
        localStorage.setItem('defects', JSON.stringify($scope.defects));
    }
}