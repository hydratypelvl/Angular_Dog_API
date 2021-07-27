import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "./post";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  public posts: any;
  API_ENDPOINT = "https://dog.ceo/api/breeds/image/random/50";


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  getPosts() {
     fetch(this.API_ENDPOINT)
      .then(function(response){
        return response.json();
      })
      .then((data) =>{
        this.posts = data.message;
      })
      .catch(function(error){
        console.log("Error: " + error);
      })
    // let headers = new HttpHeaders().set('x-rapidapi-host', 'the-cocktail-db.p.rapidapi.com');
    // let params = new HttpParams().set('', '');
    // this.posts = this.httpClient.get(this.API_ENDPOINT);
  };



}
