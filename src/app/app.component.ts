import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  LINK = 'https://httpangmxshwud-default-rtdb.firebaseio.com/'; // starting point
  endpoint = 'posts.json'; // end point

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData); // {title: '7', content: '8'}

    this.http.post(`${this.LINK}${this.endpoint}`, postData)
      .subscribe(data => {
        console.log(data); // {name: '-NGqaoXxhXyUVR20-4b6'}
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {

    this.http.get(`${this.LINK}${this.endpoint}`)
    .pipe(map((responseData: {[key: string]: Post})=> {
      const postsArray: Post[] = [];

      for (const key in responseData) {
        if ( responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    }))
    .subscribe(posts => {
      // console.log(posts[0].);
      console.log(posts); // {-NGqUXPm10Q8KSvWfcPJ: {…}, -NGq_rxEYjb_Ll3-YMu0: {…}, -NGqaarVTecKANzA0pyo: {…}, -NGqakIcsJ9id9_vbqpb: {…}, -NGqaoXxhXyUVR20-4b6: {…}, …}
    });

  }
}
