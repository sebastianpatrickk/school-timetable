window.onload = function () {
  var subjects = document.getElementsByClassName('subject');

  for (var i = 0; i < subjects.length; i++) {
    subjects[i].addEventListener('click', function () {
      var timeCell = this.parentNode.getElementsByClassName('time')[0];

      alert(`You have ${this.textContent} at ${timeCell.textContent}`);
    });
  }
};
