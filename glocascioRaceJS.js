//Start the Race here!
$('.racer').on('click', function() { 
  var userBet = this.id;

//Declare variables
  var Animal = function(n, s, f) {
    this.name = n;
    this.speed=s;
    this.focus=f;
    this.position = 0;
    this.report = function(){
      return this.name + " is at " + this.position;
    };
    this.run = function(){
      if (this.focus>(Math.random()*10)){
        this.position+=this.speed;
      }
    };
    this.notYetWon = function() {
      var distance = 50;
      return this.position<distance
    }
  }

  var turtle = new Animal("Mitch McConnell",2,8.5);
  var rabbit = new Animal("Bunsauce Hoppalong",8,2);
  var duck = new Animal("Professor Quackingtons",4,4);
  var winner

//Running loop to progress the racers
  while(turtle.notYetWon() && rabbit.notYetWon() && duck.notYetWon()) {
    turtle.run();
    rabbit.run();
    duck.run();
  }

  console.log(turtle.report());
  console.log(rabbit.report());
  console.log(duck.report());

//Determine a winner
  if (turtle.position > rabbit.position && turtle.position > duck.position) {
    winner=("turtle");
  }else if (rabbit.position > turtle.position && rabbit.position > duck.position) {
    winner=("rabbit");
  }else{ 
    winner=("duck");
  };

//Check if you had the winning bet
  if (userBet==winner) {
    $('li').addClass('winningBet');
    $('li').append('<p id="winnerConfirm">The ' + winner + ' has won the race, and you had the winning bet!</p>');
  }else{
    $('li').addClass('losingBet');
    $('li').append('<p id="winnerConfirm">The ' + winner + ' has won the race! You did not win the bet.</p>');
  };

//Show who won the race
  $('.racer').fadeOut('slow');
  $('#' + winner).stop();

});

