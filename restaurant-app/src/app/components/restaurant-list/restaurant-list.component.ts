import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuType, Restaurant } from '../../modules/restaurant-module';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  standalone: true, 
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'] 
})
export class RestaurantListComponent {
  
  searchTerm: string = '';     
  localizationSearchTerm: string = '';         
  sortOrder: 'A-Z' | 'Z-A' | 'Ocena' = 'A-Z';
  menuTypeFilter: MenuType = '';   
  restaurantList: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  //Wczytanie listy restauracji z serwisu
  ngOnInit(): void
  {
    this.restaurantList = this.restaurantService.getRestaurants();
  }

  //Filtrowanie i sortowanie
  get filteredRestaurants(): Restaurant[] 
  {
    let filtered = this.restaurantList;

    //Filtrowanie - zebranie tylko tych restauracji których nazwa pasuje do wyszukanego tekstu
    if (this.searchTerm) 
    {
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    //Filtrowwanie - zebranie tylko tych restauracji których miasto pasuje do wyszukanego tekstu
    if (this.localizationSearchTerm) 
    {
      filtered = filtered.filter(r =>
        r.town.toLowerCase().includes(this.localizationSearchTerm.toLowerCase())
      );
    }
    //Filtrowanie - tylko o określonym menu
    if (this.menuTypeFilter != '') 
    {
      filtered = filtered.filter(r =>
        r.type.toLowerCase().includes(this.menuTypeFilter.toLowerCase())
      );
    }
    //Sortowanie
    if(this.sortOrder)
    {
      filtered.sort((a, b) => 
      {
        if(this.sortOrder === 'A-Z')  //Sortowanie alfabetyczne
        {
          return a.title.localeCompare(b.title);
        }
        else if(this.sortOrder === 'Z-A') //Sortowanie od z do a 
        {
          return b.title.localeCompare(a.title);
        }
        else  //Sortowanie według średniej ocen
        {
          return b.GetAvarage() - a.GetAvarage()
        }
      });
    }

      return filtered;
    
  }
}