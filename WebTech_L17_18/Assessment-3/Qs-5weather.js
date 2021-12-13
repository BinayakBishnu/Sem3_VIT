var app1 = angular.module('weather-app', []);
app1.directive('show', function () {
    var lin;
    lin = function (scope, element, attrs) {
        document.querySelector("button").addEventListener('click', () => {
            alert("clicked");
            var city = document.querySelector(".city").value;
            $.getJSON("Qs-5weatherdata.json", function (obj) {
                $.each(obj, function (key, value) {
                    if (value.name === city) {
                        document.querySelector("h2").textContent = "City , State : " + value.name + " , " + value.state;

                        document.querySelector(".one").textContent = "Temperature : " + value.temp;
                        document.querySelector(".two").textContent = "Conditions : " + value.condition;
                    }
                });
            });
        });
    }
    return {
        restrict: 'E',
        link: lin
    }
});