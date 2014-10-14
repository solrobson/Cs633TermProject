/// <reference path="dataload.js" />
/// <reference path="angular.js" />

function viewDefectController($scope)
{
    $scope.defects;
    $scope.defect;
    $scope.defectID;
    $scope.newComment;
    $scope.statuses;

    $scope.clearComment = function ()
    {
        ///<summary>
        ///Clears the comment object.
        ///</summary>
        $scope.newComment = {Date: '', UserName: '', Title: '', Comment: ''}; 
    }

    $scope.init = function ()
    {
        var statuses = localStorage.getItem(localStorageKeys.status);
        if (statuses != null)
        {
            $scope.statuses = JSON.parse(statuses);
        }
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
        ///<summary>
        ///Adds the current comment to the defect comment object array, and
        ///then updates the localStorage.
        ///<summary>
        var curUser = localStorage.getItem(localStorageKeys.currentUser);
        if (curUser.length > 0)
        {
            curUser = JSON.parse(curUser);
            $scope.newComment.UserName = curUser.UserName;
        }
        $scope.newComment.Date = getCurrentDateTime();
        $scope.defect.Comments.push($scope.newComment);
        $scope.updateRecord();
    }

    $scope.updateRecord = function ()
    {
        ///<summary>
        ///Updates the current record in local storage.
        ///</summary>
        var curDate = getCurrentDateTime();
        switch($scope.defect.Status.ID)
        {

            case 2:
                //Ready for fix
                break;
            case 3:
                //Test
                $scope.defect.TestDate = curDate;
                break;
            case 4:
                $scope.defect.ReleaseDate = curDate;
                //closed/ resolved
                break;
            default:
                break;
        }
        $scope.defect.dateChanged = curDate;

        angular.forEach($scope.defects, function (defect)
        {
            if (defect.ID == $scope.defectID)
            {
                defect = $scope.defect;
            }
        });
        localStorage.setItem('defects', JSON.stringify($scope.defects));
        showDialog('Defect Updated.', 'The current defect has been updated.');
    }
}