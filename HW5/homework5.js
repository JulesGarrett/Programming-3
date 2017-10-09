
var main = function () {
    var num1=Math.floor((Math.random()*15));
    var num2=Math.floor((Math.random()*15));
    chalk.println("What is "+num1+" + "+num2+" ?");

    var p1 = chalk.entrybox();
     p1.then(function(o){return check(o);});

var check= function(o){
 if (parseInt(o) == (num1+num2)) {
     chalk.println("You win a cookie! And another go...");
     return main();
   }
 else {
     chalk.println("Wrong! Try Again.");
     var p2=chalk.entrybox();
     p2.then(function(x){return check(x);})
   }
}
}
