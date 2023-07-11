age=30;
if(age>=18){
    console.log("eligible for DL");
    let x="this should be local";
    const pi=3.14;
   
    var y='function scoped'

}
else{
    console.log("not eligible for DL");
}
// console.log(x);
// now x is locaol because of let
console.log(y);
// var works in function only

