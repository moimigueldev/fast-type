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
        console.log('activating get leaderboard')

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })  
        return this.http.get('http://localhost:3000/leaderboard', {headers:headers});
    }

    onUpdateLeaderboard(leaderBoard: LeaderBoardPlayer[]) {
       
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        return this.http.put('http://localhost:3000/leaderboard', {leaderBoard}, {headers:headers});
        
    }

   

    

   
}