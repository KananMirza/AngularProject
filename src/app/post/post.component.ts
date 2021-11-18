import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from './post.service';
import { UserService } from './user.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService,
  UserService]

})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient,
    private activatedRoute:ActivatedRoute,
    private alertifyservice:AlertifyService,
    private postservices:PostService,
    private userservices:UserService){

  }
  posts!:Post[];
  users!:User[];
  filterText!:string;



  date = new Date();

  ngOnInit(){


    this.getUsers(),
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['userid'])
      this.getPosts(params["userid"])
    })

  }
  getPosts(userid:number){

    this.postservices.getPosts(userid).subscribe(data=>{
      this.posts = data
    })
  }
  getUsers(){
    this.userservices.getUsers().subscribe(data=>{
      this.users = data
    })
  }
  addToFavorite(post:any){
    this.alertifyservice.success("Add to Favorite"+post.title)
  }


}


