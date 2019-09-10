import { Component, OnInit } from '@angular/core';
import {Movie} from '../movies'
import {MOVIE} from '../move-starter'

@Component({
  selector: 'app-movie-info-component',
  templateUrl: './movie-info-component.component.html',
  styleUrls: ['./movie-info-component.component.css']
})
export class MovieInfoComponentComponent implements OnInit {

  movies = MOVIE;

  constructor() { }

  ngOnInit() {
  }

}
