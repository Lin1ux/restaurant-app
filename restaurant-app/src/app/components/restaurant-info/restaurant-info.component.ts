import { Component } from '@angular/core';
import { Restaurant } from '../../modules/restaurant-module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-info',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './restaurant-info.component.html',
  styleUrl: './restaurant-info.component.css'
})
export class RestaurantInfoComponent {
  restaurant: Restaurant | undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = this.restaurantService.getRestaurantById(id);
  }
}
