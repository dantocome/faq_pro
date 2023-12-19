document.addEventListener("DOMContentLoaded", function(){
  const question = document.querySelector(".question");
  const question2 = document.querySelector(".question2")
  const para3 = document.querySelector(".para3");
  const plus = document.getElementById("plus");


  question.addEventListener("click", function(){
    const answer1 = this.nextElementSibling;
    if(answer1.style.display==="none"){
        answer1.style.display = "block"
        plus.textContent ="-";
    }else{
        answer1.style.display ="none";
        plus.textContent ="+"
    }

  });
  
  question2 .addEventListener("click", function(){
    const answer2 = this.nextElementSibling;
    const plus2 = document.getElementById("plus2");
    if(answer2.style.display==="block"){
        answer2.style.display = "none";
        plus2.textContent = "-"
    }else{
        answer2.style.display = "block";
        plus2.textContent = "+"
    }
  })

  para3.addEventListener("click", function(){
    const answer3 = this.nextElementSibling;
    const plus3 = document.getElementById("plus3");
    if(answer3.style.display==="block"){
        answer3.style.display = "none";
        plus3.textContent = "-";
    }else{
        answer3.style.display = "block";
        plus3.textContent = "+"
    }

  })
});