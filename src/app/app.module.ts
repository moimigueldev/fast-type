import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WordsService } from './shared/words.service';
import { LeaderBoardService} from './shared/leaderboard.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [WordsService, LeaderBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
