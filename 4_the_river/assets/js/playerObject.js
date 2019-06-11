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
        $(".winModal > p").text('Congratulations, you win!');
        $("#winModalContainer").removeClass("hidden");

    }
    resetPlayerStats(){
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
        };
        this.updatePlayerDisplay();

    }
}
