$(document).ready(initializeApp);

function initializeApp(){
var stoneResource = new Resource("stone");
$('.stone').on('click', 'button', stoneResource.decrementResource);

}
class Resource{
  
  constructor( name ){
    this.name = name;
    this.value = this.getResourceValue();
    this.decrementResource = this.decrementResource.bind(this);
  }
  
  getResourceValue(){
    var value = $('.resource.stone span').text();
    var integerValue = parseInt(value);
    return integerValue;
  }

  decrementResource(){
    debugger;
    var newValue = this.value - 1;
    var updatedValue = $('.stone span').text(newValue);
    var player1 = new Player();
    player1.incrementPlayerResourceValue();
    return updatedValue;
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
    debugger;
   var playerResourcesCount = this.playerResource;
   playerResourcesCount++;
   this.playerResource = playerResourcesCount;
   $(".playerResourcesCount").text(this.playerResource);


  }
  displayPlayerResourceValue(){

  }
}

