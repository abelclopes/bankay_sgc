import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { PostModels } from '../models/post.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: PostModels[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getHomeList()
    .subscribe(data =>{
      console.log(data)
      this.posts =  data;
  })
    
  }

}
