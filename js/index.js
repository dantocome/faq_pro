document.addEventListener("DOMContentLoaded", function(){
  const question = document.querySelector(".question");
  const question2 = document.querySelector(".question2")
  const plus2 = document.getElementById("plus2");
  const question3 = document.querySelector(".question3");
  const plus3 = document.getElementById("plus3");
  const question4 = document.querySelector(".question4");
  const plus4 = document.getElementById("plus4");


  question.addEventListener("click", function(){
    const answer1 = this.nextElementSibling;
    if(answer1.style.display==="block"){
        answer1.style.display = "none"
        plus.textContent ="+";
    }else{
        answer1.style.display ="block";
        plus.textContent ="-"
    }

  });
  
  question2 .addEventListener("click", function(){
    const answer2 = this.nextElementSibling;
    if(answer2.style.display==="block"){
        answer2.style.display = "none";
        plus2.textContent = "+"
    }else{
        answer2.style.display = "block";
        plus2.textContent = "-"
    }
  })

  question3.addEventListener("click", function(){
    const answer3 = this.nextElementSibling;
    if(answer3.style.display==="block"){
      answer3.style.display = "none";
      plus3.textContent = "+"
    }else{
      answer3.style.display = "block";
      plus3.textContent = "-";
    }

  })

  question4.addEventListener("click", function(){
    const answer4 = this.nextElementSibling;
    if(answer4.style.display==="block"){
        answer4.style.display = "none";
        plus4.textContent = "+";
    }else{
        answer4.style.display = "block";
        plus4.textContent = "-"
    }

  })
});