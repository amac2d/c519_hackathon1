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
    var resourceType = $(event.currentTarget).attr('data-resource');
    var newValue = this.getResourceValue(resourceType); 
    var tempValue = newValue;
    var productionValue = this.players.player1.production[resourceType];

    if (productionValue > newValue && newValue !== 0){
      newValue -= newValue;
      this.resources[resourceType] = newValue;
      this.displayGameboard();
      this.players.player1.incrementPlayerResourceValue(tempValue, resourceType);
    } else if (productionValue !== 0 && newValue !== 0) {
      newValue -= productionValue;
      this.resources[resourceType] = newValue;
      this.displayGameboard();
      this.players.player1.incrementPlayerResourceValue(productionValue, resourceType);
    } else if ( newValue === 0 ){
      alert('You have exhausted all ' + resourceType + ' resources.');

    }
    else {
      alert("You do not have the production power " + resourceType + "." + "\n" + "Please build more Pylons.");
    }

  }
  selectProductionTile(event){
    var productionType = $(event.currentTarget).attr('data-resource');

    this.players.player1.incrementPlayerProductionAmount(productionType);

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
    this.playerResource = {
        'clay': 0,
        'wood': 0,
        'stone': 0,
        'food': 0,
    };
    this.production = {
      'clay': 0,
      'wood': 0,
      'stone': 0,
      'food': 0,
    }

  }
  incrementPlayerResourceValue(resourceNumber, resourceType){
    this.playerResource[resourceType] += resourceNumber;
    this.updatePlayerDisplay();

    if(this.playerResource.clay === 9 && this.playerResource.food === 4 &&
      this.playerResource.wood === 9 && this.playerResource.stone === 9){
      this.displayWinModal();
    }

  }
   updatePlayerDisplay(){
     $("#clayAmount").text(this.playerResource.clay);
     $("#foodAmount").text(this.playerResource.food);
     $("#woodAmount").text(this.playerResource.wood);
     $("#stoneAmount").text(this.playerResource.stone);
    // $(".playerProductionCount").text(this.production[resourceType]);
     $('#clayPower').text(this.production.clay);
     $('#foodPower').text(this.production.food);
     $('#woodPower').text(this.production.wood);
     $('#stonePower').text(this.production.stone);

   }

  incrementPlayerProductionAmount(resourceType){
    this.production[resourceType] += 1;
    this.updatePlayerDisplay(resourceType);
  }
   displayWinModal(){
    $("#winModalContainer").removeClass("hidden");

   }
  }

