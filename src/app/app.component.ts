import { Component, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  word = 'Word'
  secondsLeft = 5;
  score = 10;

  constructor(private elementRef: ElementRef){

  }
  ngAfterViewInit(){
    //changes the background color
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#D35B2B';
 }

 onNextWord() {
   console.log('clicked');
 }

}