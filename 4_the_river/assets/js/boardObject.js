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
        this.gameBegins = this.gameBegins.bind(this);
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
        var closeBtn = $('.closeBtn')[0];
        $('.resource').on('click', 'button', this.decrementResource);
        $('.tiles').on('click', 'button', this.selectProductionTile );

        $('.playButton').on('click', this.gameBegins);//calls gameBegins function on line 80
        //which displays modal and calls the functions to reset the stats on the game board
        //and in the player stats ( we still need to change the player stats and resources dynamically)
        $(closeBtn).on('click', this.closeModal);


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
            $(".winModal > p").text('You have exhausted all ' + resourceType + ' resources.');
            $("#winModalContainer").removeClass("hidden");
            //needs a button to hide the modal WITHOUT resetting the stats


        }
        else {
            $(".winModal > p").text("You do not have the production power of " + resourceType + ".");
            $("#winModalContainer").removeClass("hidden");
            //needs a button to hide the modal WITHOUT resetting the stats
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


    gameBegins(){
        $("#winModalContainer").addClass("hidden");
        this.players.player1.resetPlayerStats();
        this.resetBoardStats();
    }//gameBegins function displays win modal and calls reset functions//
    resetBoardStats(){
        this.resources = {
            'clay': 9,
            'wood': 9,
            'stone': 9,
            'food': 4
        };
        this.displayGameboard();
    }//resetBoardStats function resets the board stats and displays the resources //still needs to be changed
    //dynamically

    closeModal(){
        console.log('hello');
        $('.instructionModal').css({
                    'display': 'none'
        });    
    }
}