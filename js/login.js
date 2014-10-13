/// <reference path="dataload.js" />

window.onload = function ()
{
    ///<summary>
    ///Checks to see if the browser supports local storage, and then initialize the 
    ///local storage if values are not already set.
    ///</summary>

    if (!validWebBrowser())
    {
        alert('Please use a web browser that supports local storage');
    }

    localStorage.setItem( localStorageKeys.currentUser, '');
    initStatus();
    initUsers();
}

function login()
{
    ///<summary>
    ///Checks to see if the user has entered a valid user name and password.  
    ///If the credentials are valid, then the current user is saved into localStorage, and
    /// then redirects the user to the index page.
    ///</summary>

    var data = localStorage.getItem(localStorageKeys.users);
    var userList = JSON.parse(data);
    var user = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    for (var i = 0; i < userList.length; i++)
    {
        if (userList[i].UserName == user &&
            userList[i].Password == password)
        {
            var curUser = {
                ID: userList[i].ID,
                UserName: userList[i].UserName,
                Type: userList[i].Type
            };
            localStorage.setItem(localStorageKeys.currentUser, JSON.stringify(curUser));
            window.location.href = 'index.htm';
        }
    }
}