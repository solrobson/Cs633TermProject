/// <reference path="dataload.js" />

window.onload = function ()
{
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
    var data = localStorage.getItem(localStorageKeys.users);
    var userList = JSON.parse(data);
    var user = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    for (var i = 0; i < userList.length; i++)
    {
        if (userList[i].UserName == user &&
            userList[i].Password == password)
        {
            window.location.href = 'index.htm';
        }
    }
}