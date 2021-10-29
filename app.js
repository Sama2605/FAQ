//using selectors inside the element

const questions = document.querySelectorAll(".question");
// console.log(questions); //nodeList with 3 articles

questions.forEach(function (quest) {
  const btn = quest.querySelector(".question-btn");
  console.log(quest);
  console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (ques) {
      if (ques !== quest) {
        ques.classList.remove("show-text");
      }
    });
    quest.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
// const question = e.currentTarget.parentElement.parentElement;
// console.log(e.currentTarget.parentElement.parentElement);//.question
// question.classList.toggle("show-text");
//   });
// });
