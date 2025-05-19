function getInput()
{
    const que = document.getElementsByClassName("question")[0].value;
    const names= (document.getElementsByClassName("names")[0].value).trim().split(/\s+/);
console.log(que);
console.log(names);
console.log(names.length);
var randomNumber = Math.floor(Math.random()*names.length);
document.getElementsByClassName("que")[0].textContent=que;
document.getElementsByClassName("name")[0].textContent=names[randomNumber];
}
document.getElementsByClassName("btn")[0].addEventListener("click", function (){getInput();});
