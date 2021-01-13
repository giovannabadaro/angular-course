import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html'
})

export class StarComponent implements OnChanges{

  @Input()
  rating: number = 0;

  startWidth: number;

  ngOnChanges(): void{
    this.startWidth = this.rating * 94 / 5;
  }

}
