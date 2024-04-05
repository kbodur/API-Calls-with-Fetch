document.querySelector('.centered .enterButton').addEventListener("click", loadQuestions)
// document.querySelector('.center .show-answer').addEventListener("click", answers)
let response=[];
async function loadQuestions(){
   response=await fetch("https://opentdb.com/api.php?amount=10&type=multiple").then((res)=>{return res.json()}).then(resp=>{return resp.results});
    console.log(response[1].type)
    let box=document.getElementById("quest")
    for(let i=0; i<10; i++)
    {
    let a=document.createElement("article")
    a.setAttribute("class","card")
    a.innerHTML='<h2>'+response[i].category+'</h2><p>'+response[i].question+'</p><button class="show-answer-'+i+'" onclick="answers(this)">Show Answer</button><p id="'+i+'" class="hidden">CORRECT ANSWER</p>'
    box.append(a)
    }
    return response;
 }
 
 function answers(a){
    let index = a.getAttribute('class')[a.getAttribute('class').length-1]
    console.log(response[index].correct_answer)
    let ans=document.getElementById(index)
    ans.style.display="block"
   
    const option = document.createElement("option");
    option.setAttribute("value", response[index].correct_answer);
    option.textContent = response[index].correct_answer;
    ans.appendChild(option);

 }



