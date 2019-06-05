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
    return updatedValue;
  }
}

