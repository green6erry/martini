$(function(){

//1st proto - making questions
var Question = function(){
	this.martiniQuestions =[
	"Would you like a classic martini, or a variation?",
	"On the rocks or straight up?",
	"What kind of liquor would you prefer?",
	"Dry? (There's 'Bone Dry', 'Very Dry', 'Dry', 'Perfect', 'Wet', or '50:50')",
	"Dirty? (There's 'not dirty', 'a little dirty', 'dirty', 'very dirty/filthy')",
	"Stirred?",
	"What kind of garnish?"
	];
};

//making an instance of the question
var ask = new Question;

//2nd Proto = options for the martini
var Ingredient = function(){
	// var self = this;
	this.style = ["Classic", "Variation"];
	this.ice = ["On the Rocks", "Straight Up"];
	this.liquor = ["Vodka", "Gin"];
	this.dry = ["None", "A splash to coat the glass", "1/2 ounce", "3/4 ounce", "1 ounce", "As much as you have base liquor"];
			// function(){
		// self.name = ["Bone Dry", "Very Dry", "Dry", "Perfect", "Wet", "50:50"];
		// self.amount = ["None", "Splash to coat the glass", "1/2 ounce", "3/4 ounce", "1 ounce", "As much as you have base liquor"];
	};
	this.dirty = ["None", "A splash", "1/4 ounce", "1/2 ounce or more"];
	this.stirred = ["Stirred", "Shaken"];
	this.garnish = ["Olive", "Twist (lemon)", "Onion (called a \"Gibson\""];
};

var ingredient = new Ingredient;


//3rd proto - apsects of martini
var Category = function (prompt, ingredient) {
	this.prompt = prompt;
	this.ingredient = ingredient;
};

//instances of my prototypes, instances of martini traits correlating to their prompts
var categories = [
	new Category(ask.martiniQuestions[0], ingredient.style),
	new Category(ask.martiniQuestions[1], ingredient.ice),
	new Category(ask.martiniQuestions[2], ingredient.liquor),
	new Category(ask.martiniQuestions[3], ingredient.dry),
	new Category(ask.martiniQuestions[4], ingredient.dirty),
	new Category(ask.martiniQuestions[5], ingredient.stirred),
	new Category(ask.martiniQuestions[6], ingredient.garnish),
];

//4 prop - empty so you can adjust for later
var Drink = function(){
	this.ingredients = [];
};

//add method to add ingredient to Drink proto via input data
Drink.prototype.addIngredient = function(selectedCategories){
	var self = this;
	var ingredients = this.ingredients = []; //still empty
	selectedCategories.forEach(function(singlecateg){
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
		var resultsHTML = '<li class="result">'+ingredient+'</li><br>';
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