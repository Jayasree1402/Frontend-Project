import { Component, Input, OnInit } from '@angular/core';
import { Cake } from '../models/cake';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css'],
})
export class CakeCardComponent implements OnInit {
  @Input() cake: Cake = {};
  ratings:any = []

  ngOnInit(): void {
    this.ratings = new Array(this.cake.cakeRating);
  }
}
