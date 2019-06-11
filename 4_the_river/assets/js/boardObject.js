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
        this.resetGame = this.resetGame.bind(this);
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
        $('.playButton').on('click', this.resetGame);
        $(closeBtn).on('click', this.closeModal);
        $('.keepPlayingButton').on('click', this.closeWarningModal);



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
            $(".warningModal > p").text('You have exhausted all ' + resourceType + ' resources.');
            $("#warningContainer").removeClass("hidden");


        }
        else {
            $(".warningModal> p").text("You do not have the production power of " + resourceType + ".");
            $("#warningContainer").removeClass("hidden");
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


    resetGame(){
        $("#winModalContainer").addClass("hidden");
        this.players.player1.resetPlayerStats();
        this.resetBoardStats();
    }
    resetBoardStats(){
        this.resources = {
            'clay': 9,
            'wood': 9,
            'stone': 9,
            'food': 4
        };
        this.displayGameboard();
    }
    closeWarningModal(){
        $("#warningContainer").addClass("hidden");
    }
    closeModal(){
        $('.instructionModal').css({
                    'display': 'none'
        });    
    }
    close 
}