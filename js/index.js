document.addEventListener("DOMContentLoaded", function(){
  const question = document.querySelector(".question");
  const question2 = document.querySelector(".question2")
  const plus2 = document.getElementById("plus2");
  const question3 = document.querySelector(".question3");
  const plus3 = document.getElementById("plus3");


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