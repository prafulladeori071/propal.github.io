function redirect(){
  window.location='https://www.script-tutorials.com/demos/359/index.html#!/'
}
angular.module('myApp', [])
.controller('myCtrl', function ($scope, $http) {
    $scope.hello = {name: "users view"};
    $scope.newName = "";
    $scope.sendPost = function() {
        var data = $.param({
            json: JSON.stringify({
                name: $scope.newName
            })
        });
        $http.post("/echo/json/", data).success(function(data, status) {
            $scope.hello = data;
        })
    }                   
})



$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});