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
        console.log('gettting leaderBoards')

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })

        
        
        

        return this.http.get('http://localhost:3000/leaderboard', {headers:headers});
    }

   

    

   
}