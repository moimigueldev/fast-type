import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LeaderBoardPlayer } from './leaderboard.model';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'



@Injectable()
export class LeaderBoardService {



    leaderBoard;

    constructor(
        private http: Http,
        public afs: AngularFirestore,

    ) {
        console.log('on init')
        this.leaderBoard = this.afs.doc('leaderboard/leaders').valueChanges()
    }


    getLeaderBoard() {
        // this.leaderBoard = this.afs.doc('leaderboard/leaders').valueChanges().subscribe(el => console.log('el', el))

        return this.leaderBoard
    }

    // getLeaderBoard() {
    //     const headers = new Headers({
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     })
    //     return this.http.get('http://localhost:3000/leaderboard', { headers: headers });
    // }

    onUpdateLeaderboard(leaderBoard: LeaderBoardPlayer[]) {

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });

        return this.http.put('http://localhost:3000/leaderboard', { leaderBoard }, { headers: headers });

    }






}