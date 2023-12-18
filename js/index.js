document.addEventListener("DOMContentLoaded", function(){
  const para1 = document.querySelector(".para1");
  const para2 = document.querySelector(".para2")

  para1.addEventListener("click", function(){
    const answer1 = this.nextElementSibling;
    const plus = document.getElementById("plus");

    if(answer1.style.display==="block"){
        answer1.style.display = "none"
        plus.textContent ="-";
    }else{
        answer1.style.display ="block";
        plus.textContent ="+"
    }

  });
  
  para2 .addEventListener("click", function(){
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
});