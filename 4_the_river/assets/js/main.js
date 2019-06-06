$(document).ready(initializeApp);
var resource;
function initializeApp(){
  resource = new Board("stone");
  resource.makeNewPlayer('player1');

}
class Board{
  constructor( name ){
    this.name = name;
    this.value = null;
    this.players = {};
    this.resources = {
      'clay': 9,
      'wood': 9,
      'stone': 9,
      'food': 4
    };
    this.decrementResource = this.decrementResource.bind(this);
    this.selectProductionTile = this.selectProductionTile.bind(this); 
    this.addEventListeners();
    this.displayGameboard();
  }
  displayGameboard(){
    $('#claySpan').text(this.resources.clay);
    $('#woodSpan').text(this.resources.wood);
    $('#foodSpan').text(this.resources.food);
    $('#stoneSpan').text(this.resources.stone);
  }
  addEventListeners(){
    $('.resource').on('click', 'button', this.decrementResource);
    $('.tiles').on('click', 'button', this.selectProductionTile );

  }
  getResourceValue(resourceType){
    return this.resources[resourceType];
    
  }
  decrementResource(event){
    debugger;
    var resourceType = $(event.currentTarget).attr('data-resource'); 
    var newValue = this.getResourceValue(resourceType); 
    
    if (newValue >= 1) {
      newValue -= 1;
      this.resources[resourceType] = newValue;
      this.displayGameboard();
    
      this.players.player1.incrementPlayerResourceValue();
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
    this.updatePlayerDisplay();

    if(this.playerResource === 5){
      this.displayWinModal();
    }

  }
   updatePlayerDisplay(){
    $(".playerResourcesCount").text(this.playerResource);
    $(".playerProductionCount").text(this.production);
   }

  incrementPlayerProductionAmount(){
    this.production += 1;
    this.updatePlayerDisplay();
  }
   displayWinModal(){
    $("#winModalContainer").removeClass("hidden");

   }
  }

