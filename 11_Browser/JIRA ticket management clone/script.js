let modalCont = document.querySelector(".modal-cont");

let addBtn = document.querySelector(".add-btn");

let addFlag = false;

addBtn.addEventListener("click", function (e) {

  addFlag = !addFlag;


  if (addFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

