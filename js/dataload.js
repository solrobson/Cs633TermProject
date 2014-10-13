var localStorageKeys = {
    users: "Users",
    defects: "Defects",
    status: "Status",
    currentUser: "currentUser"
};

function validWebBrowser()
{
    ///<summary>
    ///checks to see if the the browser can use localStorage.
    ///</summary>
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

function getCurrentDateTime()
{
    ///<summary>
    ///Gets the client's current Month, Day, Year, Hour and minute. in the format M/D/Y H:M
    ///</summary>
    var dateTime = new Date();
    var day = dateTime.getDate();
    var month = dateTime.getMonth() + 1;
    var year = dateTime.getFullYear();
    var hour = dateTime.getHours();
    var min = dateTime.getMinutes();
    
    day = formatDate(day);
    month = formatDate(month);
    hour = formatDate(hour);
    min = formatDate(min);
   
    dateTime = month + '/' + day + '/' + year + " " + hour + ":" + min;
    return dateTime;
}

function formatDate(time)
{
    ///<summary>
    ///Adds a leading zero to a date element if it has one digit.
    ///</summary>
    if (time.length == 1)
    {
        time = '0' + time;
    }
    return time;
}

function showDialog(title, msg)
{
    ///<summary>
    ///Shows a dialog on the client screen, with a message 
    /// and a title.
    ///</summary>

    //This function is intended to be changed into another method such as the JQuery
    //dialog rather than an alert.
    alert(msg);
}