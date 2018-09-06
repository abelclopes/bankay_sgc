import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PostModels } from "../../models/post.models";
import { MessagesService } from '../../../sharead/messages/messages.service';

@Injectable()
export class HomeRestService{
    URL_API: string = `https://localhost:5001/api/`;

    constructor(private http: HttpClient,
        private messageService: MessagesService
    ){}
    
    public getHomeList(): Observable<PostModels[]>{
       return this.http.get<PostModels[]>(`${this.URL_API}home`)    
       .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

   /** Log a HeroService message with the MessageService */
   private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}