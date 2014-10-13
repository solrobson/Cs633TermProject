var localStorageKeys = {
    users: "Users",
    defects: "Defects",
    status: "Status",
    currentUser: "currentUser"
};

function validWebBrowser()
{
    if (localStorage == null || localStorage == undefined)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function initUsers()
{
    ///<summary>
    ///Loads the default users of the system into local storage if
    ///the users do not already exist.
    ///</summary>

    //Type 1 = submitter, 2 = Engineer, 3 = Tester.
    var data = localStorage.getItem(localStorageKeys.users);
    if (data == null || data.length == 0)
    {
        var users = [
            { ID: 1, UserName: "Submitter", Password: "test", Type: 1 },
            { ID: 1, UserName: "Engineer", Password: "test", Type: 2 },
            { ID: 1, UserName: "Tester", Password: "test", Type: 3 }
        ];

        localStorage.setItem(localStorageKeys.users, JSON.stringify(users));
    }
}

function initDefects()
{

}

function initStatus()
{
    ///<summary>
    ///Loads the default values of the statuses into local storage 
    ///if it does not already exist.
    ///</summary>
    var data = localStorage.getItem(localStorageKeys.status)
    if (data == null || data.length == 0)
    {
        var statuses = [
            { ID: 1, Value: "Open" },
            { ID: 2, Value: "Ready To Fix" },
            { ID: 3, Value: "Ready To Text" },
            { ID: 4, Value: "Closed" }];

        localStorage.setItem(localStorageKeys.status, JSON.stringify(statuses));
    }
}
