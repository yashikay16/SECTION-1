// perfect sqaures
for(let i=50;i<=350;i++)
{ if((i ** 0.5)===parseInt(i**0.5))
    {
        console.log(i);
    }
}
// f to c vice versa
let c=-40
c1=1.8*c+32;
console.log(`temp ${c1} in fahrenheit`);
let f=101.5
console.log((f-32)/1.8);
// check palindrome
let n1=232;
let n2=n1;
let rev=0;
while(n2>0)
{
    let n3=n2%10;
    rev=rev*10 +n3;
    n2=parseInt(n2/10);
}
if(rev==n1){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}
// sum of all the digits'
let num=1234567890;
let sum=0;
while(num>0)
{
    sum+=num%10;
    num=parseInt(num/10);
}
console.log(sum);
// fibonacci series
let num1=0;
let num2=1;
let sum1=0;
let sum2="";
for(let i=2; i<10;i++){
    sum1= num1+ num2;
    sum2+=" "+sum1;
    num1=num2;
    num2=sum1;
}
 console.log(0+" " +1+ sum2);
// destruct to swap in one line [a,b]=[1,3]