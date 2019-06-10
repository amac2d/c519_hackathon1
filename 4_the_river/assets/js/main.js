$(document).ready(initializeApp);
$(document).on("click", "#forgetMe", function saveToLocalStorage() {
  localStorage.setItem("DontShow", "true");
});

var resource;
function initializeApp(){
  resource = new Board("stone");
  resource.makeNewPlayer('player1');

  if(localStorage.getItem("DontShow")) {
    $("#forgetMe").hide();
}
}

