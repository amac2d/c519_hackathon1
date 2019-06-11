$(document).ready(initializeApp);


var resource;
function initializeApp(){
  resource = new Board("stone");
  resource.makeNewPlayer('player1');

  $('#checkbox').on("click", function saveToLocalStorage() {
    localStorage.setItem("DontShow", "true");
  });

  if(localStorage.getItem("DontShow")) {
   
    $("#forgetMe").hide();
}
}

