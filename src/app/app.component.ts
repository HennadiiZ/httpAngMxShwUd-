import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { HttpClientService } from './_services/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;

  // LINK = 'https://httpangmxshwud-default-rtdb.firebaseio.com/'; // starting point
  // endpoint = 'posts.json'; // end point

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    console.log(postData);

    this.httpClientService.onCreatePost(postData)
      .subscribe(data => {
        console.log(data);
        this.onFetchPosts();
      });
  }

  onClearPosts() {
    this.isLoading = true;
    this.httpClientService.onClearPosts()
    .subscribe(
      () => {
        this.isLoading = false;
        this.loadedPosts = [];
      }
    );
  }

  onFetchPosts() {
    this.isLoading = true;

    // this.httpClientService.onFetchPosts()
    // .subscribe(posts => {
    //   this.isLoading = false;
    //   this.loadedPosts = posts;
    //   console.log(posts);
    // });

    this.httpClientService.onFetchPosts()
    .subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
      console.log(posts);
    }, (error: HttpErrorResponse) => {
      this.error = error.error.error;
      console.error('error',error);
    });
  }
}
