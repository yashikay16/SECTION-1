for(let i=0;i<10;i++){
    console.log(i);
}
console.log('------------------------------');
for(let i=10;i>0;i-=2){
    console.log(i);
}
//  wap tp cehck prime
let m=35;
let prime=true;
for(let i=2;i<m;i++){
    if(m%i==0){
        console.log("not prime");
        prime=false;
        break;
    }
}
if(prime) console.log('prime');
// wap to check if no is div by 7 and 11 in range of 100-500

for(let i=100;i<=500;i++){
    if(i%7==0 && i%11==0){
        console.log(i);
    }
}
// wap to check if a no is perfect square or not
let n=26;
let sqrt = n **0.5;
if( sqrt == parseInt(sqrt)){
    console.log('perect sq');
}
else{
    console.log('not perfect');
}
console.log(parseInt(26 ** 0.5));
p=10;
while(p>0){
    console.log(p);
    p--;
}
q=10
do{
    console.log(q);
    q--;
}while(q>0);
// wap to reverse a no
let num1= 376574;
let reverse=0;
while(num1>0){
    let d=num1%10;
    reverse=reverse*10 +d;
    num1=parseInt(num1/10);
}
console.log(reverse);
