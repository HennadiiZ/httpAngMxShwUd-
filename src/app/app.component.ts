import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  ngOnInit() {}

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
  }

  onClearPosts() {
    // Send Http request
  }
}
