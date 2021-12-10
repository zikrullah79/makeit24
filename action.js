function startTimer(duration, scope) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // display.textContent = minutes + ":" + seconds;
        scope = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


// window.onload = function() {
//     var fiveMinutes = 60 * 2,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };
var app = angular.module("main", []);
app.controller('mainController', function($scope, $interval) {
    var fiveMinutes = 60 * 2;
    var timer = fiveMinutes,
        minutes, seconds;
    $interval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // display.textContent = minutes + ":" + seconds;
        $scope.countdown = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    // $scope.countdown = "dddd"
})