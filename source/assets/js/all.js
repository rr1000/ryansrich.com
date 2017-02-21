(function(){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();

var now = new Date();
var day = now.getDayName();
document.getElementById("hello").innerHTML = "Happy " + day + "!";
