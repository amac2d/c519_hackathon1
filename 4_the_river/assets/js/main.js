$(document).ready(initializeApp);

function initializeApp(){
var resource = new Board("stone");
$('.resource').on('click', 'button', resource.decrementResource);
resource.makeNewPlayer('player1');
$('.tiles').on('click', 'button', resource.selectProductionTile );

}
class Board{
  constructor( name ){
    this.name = name;
    this.value = null;
    this.players = {};
    this.decrementResource = this.decrementResource.bind(this);
    this.selectProductionTile = this.selectProductionTile.bind(this);
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
    var updatedValue = $(`#${spanId}`).text(newValue);

    this.players.player1.incrementPlayerResourceValue();
    //clean this player1 part up since we are manually calling the property in the players obj
    }
  }
  selectProductionTile(event){
    this.players.player1.incrementPlayerProductionAmount();

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
    this.production = 0;
  }
  incrementPlayerResourceValue(){
    this.playerResource += 1;
   $(".playerResourcesCount").text(this.playerResource);

    //this.displayWinModal(); used this to test that display modal function worked
    if(this.playerResource === 5){
      this.displayWinModal();
    }

  }

  incrementPlayerProductionAmount(){
    this.production += 1;
    $(".playerProductionCount").text(this.production);
  }
   displayWinModal(){
    $("#winModalContainer").removeClass("hidden");

   }
  }

