import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable()
export class randomWordGenerator {

    words: string;


    constructor(private http: Http) {
    }

    getWords() {
        return this.http.get('http://localhost:3000/words').subscribe((res: Response) => {
            console.log('response', res)
        })
    }
}