$(document).ready(initializeApp);

function initializeApp(){

var resource = new Board("stone");
$('.resource').on('click', 'button', resource.decrementResource);

}
class Board{
  
  constructor( name ){
    this.name = name;
    this.value = null;
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
    var player1 = new Player();
    player1.incrementPlayerResourceValue();
  

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

   var playerResourcesCount = this.playerResource;

   playerResourcesCount++;
   this.playerResource = playerResourcesCount;
   $(".playerResourcesCount").text(this.playerResource);


  }
  displayPlayerResourceValue(){

  }
}

