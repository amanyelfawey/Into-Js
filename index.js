// Exercise 1:

var firstName=prompt("Enter Your First Name");
var lastName=prompt("Enter Your Last Name");

document.write("Welcome"+' '+firstName+' '+lastName +'  ')

var age=parseInt(prompt("Enter your Age"));

if(age>=1 && age<=10){
    document.write("Status: Child")
}
else if(age>=11 && age<=18){
    document.write("Status: Teenager")
}else if(age>=19 && age<=50){
    document.write("Status: Grown up")
}else{
    document.write("Status: Old");
}



// Exercise 2:

var num=parseInt(prompt("Enter a Number"));


if(num%2==0){
    alert("The Number is even");
}else{
    alert("The Number is odd");
}