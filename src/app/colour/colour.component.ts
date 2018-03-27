import { Component, OnInit,Input } from '@angular/core';
import {Colour} from '../colour-list';
import {LIST} from '../colour-items';


@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {


  items= LIST.sort();
  it1=console.log(this.items);
  
 message ="I'am thinking in one of this colours: \n \n"+
 "blue, cyan, gold, green, magenta, orange, red, white,"+ 					 "yellow \n \n"+
"What colour am I thinking of?";
 /*guess=prompt(this.message,"");*/
 guess1="";

 count = 0;
  targetIndex = Math.floor(Math.random() * LIST.length); 
  target1 = LIST[this.targetIndex];
  tar=console.log(this.target1.colour);

  /*choice = this.check_guess(this.target,this.guess);*/
 
  

  getColour(target1,guess1)
  {
     if(target1 < guess1){
      alert("Your input is alphabetically higher than mine!");
        this.count++;
        return true;
    }
    console.log(guess1);

    if(LIST.indexOf(guess1) < 0){
      
      console.log(LIST.indexOf(guess1));
      /*console.log(target1);*/
        alert("I don’t recognize that color!");
          this.count++;
          return true;
      }
     
       else if(target1 > guess1){
        alert("Your input is alphabetically lower than mine!");
          this.count++;
          return true;
      }
      else (target1 == guess1)
      {
          document.body.style.backgroundColor = guess1;

        alert("You are right! You took " + this.count + " guesses! \n \n Check the page background!!");
          return false;
      }
  }
   /*msg = function(){
      var choice = true;
    var target = Math.floor(Math.random() * LIST.length);
      console.log(LIST[target]);

      while(choice){
        var message = "I'am thinking in one of this colours: \n \n"+
                    "blue, cyan, gold, green, magenta, orange, red, white,"+ 					 "yellow \n \n"+
                "What colour am I thinking of?";
         var guess = prompt(message,"");
          choice = this.check_guess(LIST[target],guess);
      }
                         
  }*/



constructor() { 
  
}

  ngOnInit() {
    /*this.msg();*/
  }
 
}
