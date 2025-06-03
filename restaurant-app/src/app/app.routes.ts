import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';


export const routes: Routes = [
    {
        path: '',
        component: RestaurantListComponent
    },
    {
    path: 'restaurant/:id',
    component: RestaurantInfoComponent
  }
];
