$(document).ready(initializeApp);

function initializeApp(){
debugger;
var resource = new Board("stone");
$('.resource').on('click', 'button', resource.decrementResource);
resource.makeNewPlayer('player1');

}
class Board{
  constructor( name ){
    this.name = name;
    this.value = null;
    this.players = {};
    this.decrementResource = this.decrementResource.bind(this);
  }
  getResourceValue(spanId){
    this.value = $(`#${spanId}`).text();
    var integerValue = parseInt(this.value);
    return integerValue;
  }
  decrementResource(event){
    var spanId = $(event.currentTarget).parent().find('span').attr('id');
    var newValue = this.getResourceValue(spanId);
    if (newValue >= 1) {
    newValue = this.value - 1;
    }
    var updatedValue = $(`#${spanId}`).text(newValue);

    this.players.player1.incrementPlayerResourceValue();
    //clean this player1 part up since we are manually calling the property in the players obj
  }
  makeNewPlayer( name ){
    if (this.players[name]) {
      return false;
    } else {
      this.players[name] = new Player( name );
    }
  }
}

class Player{
  constructor(){
    this.name = "player";
    this.number = "1";
    this.playerResource = 0;
    // this.production = 0;
  }
  incrementPlayerResourceValue(){
    this.playerResource += 1;
   $(".playerResourcesCount").text(this.playerResource);

    //this.displayWinModal(); used this to test that display modal function worked
    if(playerResourcesCount === 5){
      this.displayWinModal();
    }

  }
   displayWinModal(){
    $("#winModalContainer").removeClass("hidden");

   }
  }
 // displayPlayerResourceValue(){
 // }
}

