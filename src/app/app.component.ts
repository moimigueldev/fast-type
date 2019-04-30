import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { WordsService } from './shared/words.service';
import { NgForm } from '@angular/forms';
import * as Timeout from 'smart-timeout';
import { LeaderBoardService } from './shared/leaderboard.service';
import { LeaderBoardPlayer } from './shared/leaderboard.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {



  // LEADERBOARD
  leaderOne: LeaderBoardPlayer;
  leaderTwo: LeaderBoardPlayer;
  leaderThree:  LeaderBoardPlayer;
  leaderFour: LeaderBoardPlayer;
  leaderFive: LeaderBoardPlayer;

  leaderBoard = []

  word = ''
  secondsLeft = 5;
  score = 0;
  words: any;
  timerStarted = false;

  constructor(
    private elementRef: ElementRef,
    private wordsService: WordsService,
    private leaderBoardService: LeaderBoardService
    ){

  }

 

  ngAfterViewInit(){
    //changes the background color
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#D35B2B';
 }

  ngOnInit() {

  this.wordsService.getWords().subscribe((res) => {

    const data = res.json().words;
    this.words = data;
    this.onNextWord()
    
  });



  this.leaderBoardService.getLeaderBoard().subscribe((res) => {
   this.onSetLeaderBoard(res);    
 })

  
  
 } //end of 

  onNextWord() {
  this.word = this.words[Math.floor(Math.random()*this.words.length)];
 }


 onSetLeaderBoard(res) {
      
  const data = res.json().leaderBoard;
  for (let index = 0; index < data.length; index++) {
    this.leaderBoard.splice(index, 1, new LeaderBoardPlayer(data[index].name, data[index].score))
  }

  this.leaderBoard = this.leaderBoard.sort((a, b) => parseFloat(a.score) - parseFloat(b.score)).reverse();

  this.leaderOne = new LeaderBoardPlayer(this.leaderBoard[0].name, this.leaderBoard[0].score)
  this.leaderTwo = new LeaderBoardPlayer(this.leaderBoard[1].name, this.leaderBoard[1].score)
  this.leaderThree = new LeaderBoardPlayer(this.leaderBoard[2].name, this.leaderBoard[2].score)
  this.leaderFour = new LeaderBoardPlayer(this.leaderBoard[3].name, this.leaderBoard[3].score)
  this.leaderFive = new LeaderBoardPlayer(this.leaderBoard[4].name, this.leaderBoard[4].score)

 }

  onStartTyping(form: NgForm)  {
    let formValue = form.value.answer; 
  
    if (formValue === "" || form.dirty === false && this.score !== 0) {
      Timeout.restart('gameTimer')
    }

    else if(formValue === "" || form.dirty === false) {     
      Timeout.clear('gameTimer')      
    } 

    else if (formValue !== ""  && this.timerStarted === false) {

      this.timerStarted = true;

      Timeout.set('gameTimer',() =>{
        form.reset();
        alert('ran out of time')
        this.timerStarted = false;
        this.checkScore();
        this.score = 0;
        this.onStartTyping(form)
        
      }, 3000)
    
    } else if (formValue != "" ) {
      this.checkIfAnswerValid(form);
    } 
 } //end of function

 checkIfAnswerValid(form: NgForm) {
  let formValue = form.value.answer; 
  
  if(this.word === formValue ) {

    this.onNextWord();
    this.timerStarted = false;
    this.score++;
    form.reset();
   this.onStartTyping(form);

  }
 }

 
checkScore() {
  console.log('checking score', Math.max(this.score, this.leaderBoard[0].score))

  for (let index = 0; index < this.leaderBoard.length; index++) {
    
  }




    // for (let index = 0; index < this.leaderBoard.length; index++) {
    //   console.log('cheking this person', this.leaderBoard[index])
    //   if (this.score >= this.leaderBoard[index].score) {

    //     const newPlayer = prompt(`You beat ${this.leaderBoard[index].name}! Please enter a name`)
    //     this.leaderBoard.splice(index, 1, new LeaderBoardPlayer(newPlayer, this.score))

        

    //     this.leaderBoardService.onUpdateLeaderboard(this.leaderBoard).subscribe((response) => {
     
    //       const data = response.json();
        
    //         for (let index = 0; index < data.length; index++) {
    //           this.leaderBoard.splice(index, 1, new LeaderBoardPlayer(data[index].name, data[index].score))

    //         }
    
    //         this.ngOnInit();
    //     })
    //     break;

    //  }

   
    // } 

    

  
}//end of checkScore



}