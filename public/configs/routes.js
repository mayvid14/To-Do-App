app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'../views/login.html',
        controller:'loginctrl'
    }).when('/portal',{
        templateUrl:'../views/todo.html',
        controller:'todoctrl'
    });
});