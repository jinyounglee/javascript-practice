// antipattern 
myname = "global";

function func() {
    console.log(myname);
    var myname = 'local';
    console.log(myname);
}   
func();
