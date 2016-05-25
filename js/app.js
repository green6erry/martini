$(function(){


var pantry = {
	gin: 100;
	vodka: 100;
}

// bartender funtion

var Bartender = function(){};

var questions = {};

var liquor = Object.create(questions);
liquor.prompt = "what kind of liquor would you prefer?";
liquor.answers = ['gin', 'vodka', 'Lillet Blanc'];

var garnish = Object.create(questions);
garnish.prompt = "what kind of garnish would you like?";
garnish.answers = ['lemon', 'olive', 'onion'];

var prefs = ([liquor, garnish]);

Bartender.prototype.askQuestions = function(){
	prefs: '';
	questions: []

	
};
Bartender.prototype.createDrink = function(prefs){};





// recipe function

var Recipe = function(){};

var drink = new Recipe();

drink.name = 'drink';
drink.liquor = ['gin', 'vodka', 'Lillet Blanc'] 
drink.garnish = ['lemon', 'olive', 'onion'];
drink.mixing = ['shaken', 'stirred'];
drink.dirty = [1, 2, 3, 4, 5];
drink.vermouth = [1, 2, 3, 4];
drink.style = ['classic', 'fancy'];
drink.rocks = false;












// End of Page Ready Function
});