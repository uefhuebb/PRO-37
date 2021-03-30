class Question {
    constructor() {
      this.input1 = createInput("Enter your Name here");
      this.input2 = createInput("Enter your Answer here");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1=createElement('h2');
      this.option2=createElement('h2');
      this.option3=createElement('h2');
      this.option4 = createElement('h2');
      this.title=createElement('h4');
    }
  
    hide(){
     
      
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      
    }
  
    display(){
       
      this.title.html("My Quiz Game");
      this.title.position(350, 0);

      this.question.html('Question : What starts and ends with letter E , but has only one letter?');
      this.question.position(150,60);

      this.option1.html('1.Everyone');
      this.option1.position(150,100);
      this.option2.html('2.Envelope');
      this.option2.position(150,140);
      this.option3.html('3.Estimate');
      this.option3.position(150,180);
      this.option4.html('4.Example');
      this.option4.position(150,220);


      
      
      this.input1.position(150, 280);
      this.input2.position(330, 280);
      this.button.position(200, 320);

      
      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
  
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        
        contestantCount+=1;
        contestant.index=contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        
        
      });
     
  
    }
  
    
  }
  