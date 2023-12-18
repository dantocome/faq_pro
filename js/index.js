document.addEventListener("DOMContentLoaded", function(){
  const para1 = document.querySelector(".para1")  ;

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
});