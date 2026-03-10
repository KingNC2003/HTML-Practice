const text=`<h2>Javascript Practice Below...Please dont bully me</h2>`;
document.getElementById("js1").innerHTML=text;

function toCelcius(farenheit){
    return (5/9)*(farenheit-32);
}

const text1=toCelcius(50)
document.getElementById("js2").innerHTML=text1;

const sum1 = function(a,b){
    return a+b;
}
document.getElementById("js3").innerHTML=sum1(3,5);

const product1 = (a,b,c) => a*b*c;
document.getElementById("js4").innerHTML=product1(3,5,8);