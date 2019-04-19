import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WordsService } from './shared/words.service';
import { NgForm } from '@angular/forms';
import * as Timeout from 'smart-timeout';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  word = 'Word'
  secondsLeft = 5;
  score = 0;
  words: any;
  timerStarted = false;
 
 



  constructor(
    private elementRef: ElementRef,
    private http: Http,
    private wordsService: WordsService
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
    
  })
  
  
  
 }

  onNextWord() {
  this.word = this.words[Math.floor(Math.random()*this.words.length)];
 }

  onStartTyping(form: NgForm)  {

    let formValue = form.value.answer; 
    
    if (formValue === "" || form.dirty === false && this.score !== 0) {
      console.log('restarting timer');

      Timeout.restart('gameTimer')
    }

    else if(formValue === "" || form.dirty === false) {
      console.log(Timeout.exists('gameTimer'))
      console.log('stoping timer')
      
      Timeout.clear('gameTimer')
      
      
    } 

    else if (formValue !== ""  && this.timerStarted === false) {
      console.log('timerStarted')
      this.timerStarted = true;

      Timeout.set('gameTimer',() =>{
        alert('ran out of time')
        form.reset();
        this.timerStarted = false;
        this.score = 0;
        this.onStartTyping(form)
        
      }, 3000)
    
    } else if (formValue != "" ) {
      this.checkIfAnswerValid(form);
      
      if(this.word === formValue ) {
        console.log('words match and stoping timer', Timeout.exists('gameTimer'));
        Timeout.restart('gameTimer')
        this.onNextWord();
        this.timerStarted = false;
        this.score++;
      
    
        form.reset();
    
       this.onStartTyping(form);
    
      } 

      

    } 

    
 } //end of function

 checkIfAnswerValid(form: NgForm) {
  let formValue = form.value.answer; 

  
 }





}