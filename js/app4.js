$(function(){

  $(function(){
    controller.initialize();
  });

//1st proto
  var Question = function() {
    this.questions =
      [
        "Gin? (Default is vodka)",
        "Neat? (Default is on the Rocks)",
        "Dirty?",
        "Dry?",
        "With a twist?"
      ];
  };

  var question = new Question;

// 2nd Proto
  var Ingredient = function() {
    this.liquor = ["Add 2.5 oz. Vodka to the mixer.", "Add 2.5 oz Gin to the mixer."];
    this.ice = ["Add glass full of ice to martini glass to let it chill and then add scoop of ice to mixer", "Add scoop of ice to mixer"];
    this.dirty = ["Add a splash of olive brine to mixer", "Add .5 oz. of olive brine to mixer"];
    this.dry = ["Add a splash of dry vermouth to mixer", "Add .5 oz. of dry vermouth to mixer"];
    this.garnish = ["Place a spiraled lemon peel on the edge after stretching it taut over the martini glass.", "Garnish with an speared olive (or two) in the martini glass. "];
  };

  var ingredient = new Ingredient;

  // a conglomerate of data and ingredient
  
  //3rd proto
  var Category = function(prompt, ingredient) {
    this.prompt = prompt;
    this.ingredient = ingredient;
  }

  // Category.prototype.getRandomIngredient = function() {
  //   return this.ingredient[Math.floor(Math.random()*this.ingredient.length)];
  // };

  //making children of the 3rd proto
  var categories = [
    new Category(question.questions[0], ingredient.liquor),
    new Category(question.questions[1], ingredient.ice),
    new Category(question.questions[2], ingredient.dirty),
    new Category(question.questions[3], ingredient.dry),
    new Category(question.questions[4], ingredient.garnish)
  ];

  //4th proto
  var Drink = function() {
    this.ingredients = [];
  };

  // indicating what the 4th proto is made of
  Drink.prototype.addIngredient = function(responses) {
    var self = this;
    var ingredients = this.ingredients = [];
  

    responses.forEach(function(response, i) {
      if(response){
        ingredients.push(categories[i].ingredient[1]);
        console.log('should be 1');
      } else{
        ingredients.push(categories[i].ingredient[0]);
        console.log('should be 2');
      };
    });
  };

  drink = new Drink

  // 5th empty proto - do-er. Functions! Movements!
  var Controller = function(question, ingredient, drink) {
  }

  // One movement is to show results at the end
  Controller.prototype.showResults = function(ingredientList) {
    var self = this;
    self.clearResults();
    self.changeBackground();
    var parent = $('#list');
    ingredientList.forEach(function(ingredient) {
        var resultsHTML = '<li class="result">' + ingredient  + '</li><br>';
        $(parent).append(resultsHTML);
    });

    var close = '<input type="submit" class="btn btn-alt" href="javascript:close_window();" value="close">';
    var again = '<input type="submit" class="btn btn-alt close" value="again">';
    $(parent).append(again);
  };


  Controller.prototype.clearResults = function() {
    $('#list').html('');
  };

  Controller.prototype.unHideQuestions = function() {
    $('#list div').css('display','block');
  };

  Controller.prototype.changeBackground = function() {
    var picture = $('body');
    // var bk = picture.css('background-color', "cornsilkblue");

  };

  Controller.prototype.unChangeBackground = function() {
    // $('body').css('background-color', "red")
  };

  // Controller.prototype.checkFormResponse = function(responses) {
  //   var self = this;
  //   console.log('responses', responses);
  //   var lines = [];
  //   for(var i=0; i<responses.length; i++){
  //       lines.push(categories[i]);
  //   };

  //   drink.addIngredient(lines);
  //   controller.showResults(drink.ingredients);
  // };





// beginen______________________________________


  // Another movement is to add a close button to the Dom and reset everything
  Controller.prototype.attachHandlerCloseButton = function() {
    var self = this;
    $('#list').on('click', '.close', function(e) {
      self.clearResults();
      self.unChangeBackground();
      self.createForm();
      e.preventDefault();
    });
  };

    Controller.prototype.attachHandlerFormSubmit = function() {
    var self = this;

    $('.question-input').on('submit',function(e) {
      console.log('e', e);
      var answers = [];
      $('input[type="checkbox"]').each(function(){
        answers.push($(this).prop('checked'));
      });
      drink.addIngredient(answers);
      controller.showResults(drink.ingredients);
      e.preventDefault();
    });
  };

  Controller.prototype.createForm = function() {
    var parent = $('#list');
    categories.forEach(function(cat) {
      var questAns = [
        '<div>',
          '<label for="'+ cat.ingredient[0] +'">'+ cat.prompt +'</label>',
          '<input type="checkbox" id="'+ cat.ingredient[0] +'">',
        '</div><br>'
        ].join("");
      $(parent).append(questAns);
    });
    var submit = '<input type="submit" class="btn btn-alt" value="arugah!!!">';
    $(parent).append(submit);
  };

  Controller.prototype.initialize = function() {
    this.createForm();
    this.attachHandlerFormSubmit();
    this.attachHandlerCloseButton();
  };

  var controller = new Controller(question, ingredient, drink);

});
