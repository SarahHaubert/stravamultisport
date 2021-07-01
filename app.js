

const multisportActivity = document.querySelector(".multisport-display");

const multisportTitle = document.getElementById("entry-title");

const individualDisplay = document.querySelector(".individual-display");

const compressBtn = document.getElementById("compress-btn");



function toggleOpen() {
    multisportActivity.classList.toggle('open');
    individualDisplay.classList.toggle('open');

  }

multisportTitle.addEventListener("click", toggleOpen);

compressBtn.addEventListener("click", toggleOpen);
