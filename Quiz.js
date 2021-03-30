class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountref=await database.ref('contestantCount').once('value')
        if(contestantCountref.exists()){
            contestantCount=contestantCountref.val();
            contestant.getCount();
  
        }
        
        question = new Question()
    question.display();
      }
    }

    play(){
        background('yellow');
        question.title.hide();
        textSize(30);
        text('Quiz Results',350,20);
        Contestant.getContestantInfo();
        if(allContestants!==undefined){
          var position=250;
          for(var plr in allContestants){
              var correctAns='2'
              position+=30;
            if(correctAns===allContestants[plr].answer)
            
            fill('green');
          
            else fill('red');
            textSize(15);
            text(allContestants[plr].name+':'+allContestants[plr].answer,200,position);
          }
        }
       
      }
  
}