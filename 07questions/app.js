// using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(Q){
  const btn = Q.querySelector(".question-btn");

  btn.addEventListener("click", function(){
    questions.forEach(function(item){
      // close other question which didn't click
      if (item !== Q){
        item.classList.remove("show-text");
      }
    });
    Q.classList.toggle("show-text");
  })
})