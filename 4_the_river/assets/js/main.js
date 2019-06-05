class Resource{
  constructor( name ){
    this.name = name;
    this.value = null;
  }
  getCurrentResourceValue(){
    
  }
}

class Player{
  constructor(){
    this.name = "player";
    this.number = "1";
  }

  incrementPlayerResourceValue(){
   var playerResourcesCount = $("div.playerResources > span > div").val().parseInt();
   playerResourcesCount++;

  }
}