import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  LINK = 'https://httpangmxshwud-default-rtdb.firebaseio.com/'; // starting point
  endpoint = 'posts.json'; // end point
  errorSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData); // {title: '7', content: '8'}
    // return this.http.post<{ name: string }>(`${this.LINK}${this.endpoint}`, postData)
    return this.http.post<{ name: string }>(
      `${this.LINK}${this.endpoint}`,
      postData,
      {
        // observe: 'body' // {name: '-NGvmgM0Qut5prBksY2b'}
        observe: 'response' // HttpResponse {headers: HttpHeaders, status: 200, statusText: 'OK', url: 'https://httpangmxshwud-default-rtdb.firebaseio.com/posts.json', ok: true, …}
      }
    )
  }

  onFetchPosts() {
    // Send Http request
    return this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    // return this.http.delete<Post>(`${this.LINK}${this.endpoint}${id}`);

    // return this.http.delete<Post>(`${this.LINK}${this.endpoint}`);

    return this.http.delete<Post>(
      `${this.LINK}${this.endpoint}`,
      {
        // observe: 'body'
        // observe: 'response'
        observe: 'events',
        // responseType: 'blob' // for files
        // responseType: 'text'
        responseType: 'json' // default
      }).pipe(
      tap((event: any) => {
                            // {type: 0}
        console.log(event); // HttpResponse {headers: HttpHeaders, status: 200, statusText: 'OK', url: 'https://httpangmxshwud-default-rtdb.firebaseio.com/posts.json', ok: true, …}
        if( event.type === HttpEventType.Sent ) {

        }
        if( event.type === HttpEventType.Response ) {
          console.log(event.body);
        }
      })
    );
  }

  private fetchPosts() {
    // return this.http.get<{ [key: string]: Post }>(`${this.LINK}${this.endpoint}`)
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('way', 'yawn');

    return this.http.get<{ [key: string]: Post }>(
      `${this.LINK}${this.endpoint}`,
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        // params: new HttpParams().set('print', 'pretty')
        params: searchParams
      }
    )
    .pipe(
      map((responseData)=> {
        const postsArray: Post[] = [];

        for (const key in responseData) {
          if ( responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      },
      catchError(errorRes => {
        return throwError(errorRes);
      })
      )
    )
  }
}
