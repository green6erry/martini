$(function(){


//(possible another Proto...still in testing)
var RecipeLine = function(){
	'Fill martini glass with ice and set to the side',
	'Add the following to your mixer: '
}

//1st proto - making questions
var Question = function(){
	this.martiniQuestions =[
	"On the rocks or straight up?",
	"What kind of liquor would you prefer?",
	"Dry?",
	"Dirty?",
	"What kind of garnish?"
	];
};

var ask = new Question;




//2nd Proto = options for the martini
var Ingredient = function(){

	this.ice = [{
		label: ["Straight Up", "On the Rocks"],
		amount: [0, "enough ice to fill the glass"],
		item: "ice",
		//special recipe line
	}];
	this.liquor = [{
		label: ["Vodka", "Gin"],
		amount: ["2.5 oz.", "2.5 oz."],
		item: ["Vodka", "Gin"],
	}];
	this.dry = [{
		label: ["No", "A little", "Yes", "Very", "50:50"],
		amount: [0, 'a dash', '.25 oz.', ".5 oz.", "3/4 - 1 oz.", "as much as you added liqor of"],
		item: "Dry Vermouth",
	}];
	this.dirty = [{
		label: ["No", "A little", "Yes", "Very/Filthy"],
		amount: [0, 'a splash', '1/3 oz.', '3/4 oz (or more)'],
		item: "Olive Brine",
	}];
	this.garnish = [{
		label: ["Olive", "Twist (lemon)", "Onion (AKA a \"Gibson\""],
		amount: 1,
		item: ["an olive", "a lemon peel", "a pearl onion"],
		//special recipe line
	}];
};

var ingredient = new Ingredient;


//3rd proto - apsects of martini
var Category = function (prompt, ingredient) {
	this.prompt = prompt;
	this.ingredient = ingredient;
};

//instances of my prototypes, instances of martini traits correlating to their prompts
var categories = [
	new Category(ask.martiniQuestions[0], ingredient.ice),
	new Category(ask.martiniQuestions[1], ingredient.liquor),
	new Category(ask.martiniQuestions[2], ingredient.dry),
	new Category(ask.martiniQuestions[3], ingredient.dirty),
	new Category(ask.martiniQuestions[4], ingredient.garnish),
];

//4 proto - empty so you can adjust for later
var Recipe = function(){
	this.amounts = []
	this.items = [];
};

//add method to add ingredient to Drink proto via input data
Recipe.prototype.addLine = function(selectedCategories){
	var self = this;
	var items = this.items = []; //still empty
	var amounts = this.amounts = []; //still empty
	
	selectedCategories.forEach(function(){
		push(self.ingredient); // AHHH HALP!!! Not doing random thing
	});
};

//making an instance of the drink, of the 4th proto (pre-defined by proto and already catered to specific data)
  drink = new Drink;





//5th proto = empty to leave open to specifications
var Controller = function(question, ingredient, drink){ //ingregient which is all ingredients
};

//add method to show ingredients based on specifications
//how you want the DOM to look when you show results too
Controller.prototype.showResults = function(ingredList){
	var parent = $('.question-input');
	ingredList.forEach(function(ingredient) {
		var resultsHTML = '<li class="result">'+ingredient.label+'</li><br>';
		$(parent).append(resultsHTML);
	});
	var closeBtn = '<input type="submit" class="btn btn-alt close" value="close">';
	$(parent).append(close);
};

	
//I want to pass in 2 variables to ingredient. So the recipe line with one of the variables above


Controller.prototype.closeBtnActions = function() {
	var self = this;
	$('.question-input').on('click', '.close', function(event){
		self.clearResults();
		self.createForm();
		event.preventDefault();
	});
};

  Controller.prototype.clearResults = function() {
    $('.question-input').html('');
  };

  Controller.prototype.unHideQuestions = function() {
    $('.question-input div').css('display','block');
  };


























//end of page load
});