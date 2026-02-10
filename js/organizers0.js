// Collapsible menus for organizer profile pictures

document.addEventListener("DOMContentLoaded", function() {
  const collapsibles = document.querySelectorAll(".collapsible-profile-tiles");

  collapsibles.forEach(collapsible => {
    let i = 0;
    collapsible.addEventListener("click", function() {
      if (i < 1) {
        collapsible.classList.add("open");
        i++;
      }
      else {
        collapsible.classList.remove("open");
        i = 0;
      }
    })
  })
})



//collapsible.addEventListener("click", function() {
//  if (i < 1) {
//    collapsible.classList.add("open");
//    plusButton.innerHTML = "-";
//    i++;
//  }
//  else {
//    collapsible.classList.remove("open");
//    plusButton.innerHTML = "+";
//    i = 0;
//  }
//})



//collapsibles.forEach(collapsible => {
//  collapsible.addEventListener("click", function() {
//    collapsible.classList.toggle("open")
//  })
//})