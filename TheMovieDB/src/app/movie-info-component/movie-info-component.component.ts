import { Component, OnInit } from '@angular/core';
import {Movie} from '../movies'

@Component({
  selector: 'app-movie-info-component',
  templateUrl: './movie-info-component.component.html',
  styleUrls: ['./movie-info-component.component.css']
})
export class MovieInfoComponentComponent implements OnInit {

  movies = Movie;

  constructor() { }

  ngOnInit() {
  }

}
