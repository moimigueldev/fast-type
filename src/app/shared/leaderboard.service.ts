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

        this.leaderBoard = this.afs.doc('leaderboard/leaders').valueChanges()
    }


    getLeaderBoard() {
        return this.leaderBoard
    }


    onUpdateLeaderboard(newLeaderBoard) {
        // console.log('on update', leaderBoard)

        this.afs.doc('leaderboard/leaders').set({
            leaderboard: newLeaderBoard
        })
    }
}