import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WordsService } from './shared/words.service';
import { NgForm } from '@angular/forms';
import * as Timeout from 'smart-timeout';
import { LeaderBoardService } from './shared/leaderboard.service';
import { promise } from 'protractor';
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

  leaderBoard = [];

  word = 'Word'
  secondsLeft = 5;
  score = 0;
  words: any;
  timerStarted = false;

  constructor(
    private elementRef: ElementRef,
    private http: Http,
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
           
    const data = res.json().leaderBoard;

    data.forEach(el => {
         this.leaderBoard.push(new LeaderBoardPlayer(el.name, el.score))
    });

    console.log('LEADERBOARD', this.leaderBoard)

    this.leaderOne = new LeaderBoardPlayer(this.leaderBoard[0].name, this.leaderBoard[0].score)
    this.leaderTwo = new LeaderBoardPlayer(this.leaderBoard[1].name, this.leaderBoard[1].score)
    this.leaderThree = new LeaderBoardPlayer(this.leaderBoard[2].name, this.leaderBoard[2].score)
    this.leaderFour = new LeaderBoardPlayer(this.leaderBoard[3].name, this.leaderBoard[3].score)
    this.leaderFive = new LeaderBoardPlayer(this.leaderBoard[4].name, this.leaderBoard[4].score)
    
 })

  
  
 }

  onNextWord() {
  this.word = this.words[Math.floor(Math.random()*this.words.length)];
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
        this.timerStarted = false;
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

 




}