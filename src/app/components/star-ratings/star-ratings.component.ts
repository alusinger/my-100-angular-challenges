import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() public rating = 5;

  highestRating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);

  }

  public get hasHalfStar(): boolean {
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== this.highestRating;
    return hasHalfStar;
  }

  public get emptyStars(): number[] {
    let totalEmptyStars = Math.floor(this.highestRating - this.rating);
    if (this.rating - Math.floor(this.rating) < 0.5) {
      totalEmptyStars++;
    }

    return Array(totalEmptyStars).fill(0);
  }

  // public get modHalfStar(): boolean {
  //   const hasHalfStar = (this.rating % 1 >= 0.5) && this.rating !== this.highestRating;

  // }
}

// difference between string interpolation and property binding is that string interpolation is a one-way data binding from data source to view target and property 
// binding is a one-way data binding from data source to view target and view target to data source.
// string interpolation is a shorthand for property binding and it is used to display data from the component class in the template.