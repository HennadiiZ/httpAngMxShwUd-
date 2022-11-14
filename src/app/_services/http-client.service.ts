import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  LINK = 'https://httpangmxshwud-default-rtdb.firebaseio.com/'; // starting point
  endpoint = 'posts.json'; // end point

  constructor(private http: HttpClient) {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData); // {title: '7', content: '8'}
    return this.http.post<{ name: string }>(`${this.LINK}${this.endpoint}`, postData)
  }

  onFetchPosts() {
    // Send Http request
    return this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(`${this.LINK}${this.endpoint}`)
    .pipe(map((responseData)=> {
      const postsArray: Post[] = [];

      for (const key in responseData) {
        if ( responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    })
    )
  }
}
