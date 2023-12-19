document.addEventListener("DOMContentLoaded", function(){
  const question = document.querySelector(".question");
  const question2 = document.querySelector(".question2")
  const plus2 = document.getElementById("plus2");
  const question3 = document.querySelector(".question3");
  const plus3 = document.getElementById("plus3");
  const question4 = document.querySelector(".question4");
  const plus4 = document.getElementById("plus4");
  const question5 = document.querySelector(".question5");
  const plus5 = document.getElementById("plus5");
  const question6 = document.querySelector(".question6");
  const plus6 = document.getElementById("plus6");
  const question7 = document.querySelector(".question7");
  const plus7 = document.getElementById("plus7");
  const question8 = document.querySelector(".question8");
  const plus8 = document.getElementById("plus8");




  question.addEventListener("click", function(){
    const answer1 = this.nextElementSibling;
    const plus = document.getElementById("plus");
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

  question5.addEventListener("click", function(){
    const answer5 = this.nextElementSibling;
    if(answer5.style.display==="block"){
        answer5.style.display = "none"
        plus5.textContent ="+";
    }else{
        answer5.style.display ="block";
        plus5.textContent ="-"
    }

  });

 question6.addEventListener("click", function(){
  const answer6 = this.nextElementSibling;
  if(answer6.style.display==="block"){
      answer6.style.display = "none"
      plus6.textContent ="+";
  }else{
      answer6.style.display ="block";
      plus6.textContent ="-"
  }
 })

 question7.addEventListener("click", function(){
  const answer7 = this.nextElementSibling;
  if(answer7.style.display==="block"){
    answer7.style.display = "none";
    plus7.textContent = "+";
  }else{
    answer7.style.display = "block";
    plus7.textContent = "-";
  }
 })

 question8.addEventListener("click", function(){
  const answer8 = this.nextElementSibling;
  if(answer8.style.display==="block"){
    answer8.style.display = "none";
    plus8.textContent = "+";
  }else{
    answer8.style.display = "block";
    plus8.textContent = "-";
  }
 })

});