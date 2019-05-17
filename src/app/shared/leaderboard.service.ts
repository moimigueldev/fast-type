import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LeaderBoardPlayer } from './leaderboard.model';



@Injectable()
export class LeaderBoardService {



  

    constructor(
        private http: Http
        ) {
    }

   

    getLeaderBoard() {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })  
        return this.http.get('https://fasttype.herokuapp.com/leaderboard', {headers:headers});
    }

    onUpdateLeaderboard(leaderBoard: LeaderBoardPlayer[]) {
       
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        return this.http.put('https://fasttype.herokuapp.com/leaderboard', {leaderBoard}, {headers:headers});
        
    }

   

    

   
}