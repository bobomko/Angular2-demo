import { Component } from '@angular/core';
import {PostService} from '../services/post.service';
import { post } from 'selenium-webdriver/http';

@Component({
    moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostService){
        this.name = 'Ali Akalin';
        this.email = 'pimpip@pim.pip';
        this.address ={
          street: 'Maria Tusch Str',
          city: 'Vienna'
        } 
        this.hobbies = ['Music', 'Movies','Sports'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        })

    }
    toggleHobbies(){
        console.log("toogle hobbies");
        this.showHobbies=!this.showHobbies;
    }
    addHobby(hobby: string){
        this.hobbies.push(hobby);
    }
    deleteHobby(i: number){
        this.hobbies.splice(i,1);
    }
}
interface address{
    street: string;
    city: string;
}

interface Post{
    id: number;
    title: string;
    body: string;

}