import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';



@Injectable()
export class WordsService {

    words: string[];


    constructor(private http: Http) {
    }

    getWords() {

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        

        return this.http.get('http://localhost:3000/words', {headers:headers});
    }

    randomWordSelector() {
        
    }
}