// window.onload = function () {
//   let subjects = document.getElementsByClassName('subject');

//   for (let i = 0; i < subjects.length; i++) {
//     subjects[i].addEventListener('click', function () {
//       let timeCell = this.parentNode.getElementsByClassName('time')[0];
//       let dayCell = document.getElementsByClassName('day')[0];
//       console.log(dayCell);

//       alert(
//         `You have ${this.textContent} on ${dayCell.textContent} ${timeCell.textContent}`
//       );
//     });
//   }
// };

window.onload = function () {
  let subjects = document.getElementsByClassName('subject');
  let days = document.getElementsByClassName('day');

  for (let i = 0; i < subjects.length; i++) {
    subjects[i].addEventListener('click', function () {
      let timeCell = this.parentNode.getElementsByClassName('time')[0];
      let index = Array.prototype.indexOf.call(this.parentNode.children, this);
      let dayCell = days[index];

      alert(
        `You have ${this.textContent} on ${dayCell.textContent} at ${timeCell.textContent}`.replace(
          /\s+/g,
          ' '
        )
      );
    });
  }
};
