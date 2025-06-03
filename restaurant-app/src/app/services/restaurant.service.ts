import { Injectable } from '@angular/core';
import { Restaurant } from '../modules/restaurant-module';

@Injectable({providedIn: 'root'})
export class RestaurantService {

  private restaurantList: Restaurant[] = [
      new Restaurant({
        id: 0,
        title: 'Bara Boo',
        type: 'restauracja z obsługą',
        openHours: new Date('2025-06-02 12:00:00'),
        closeHours: new Date('2025-06-02 22:00:00'),
        address: 'al. Jana Pawła II 15',
        town: 'Poznań',
        comments: [
          {
            author: 'Marianno',
            message: 'bardzo dobra restauracja polecam',
            date: new Date('2025-06-02 14:03:20'),
            grade: 5 
          },
          {
            author: 'RafaelloV',
            message: 'Bardzo długo czekania',
            date: new Date('2025-06-01 16:11:20'),
            grade: 2 
          }
        ],
        grade: 4.6
      }),
      new Restaurant({
        id: 1,
        title: 'Mac Donaldo',
        type: 'fast food',
        openHours: new Date('2025-06-02 10:00:00'),
        closeHours: new Date('2025-06-02 23:00:00'),
        address: 'ul. Szybka 3',
        town: 'Kraków',
        comments: [
          {
            author: 'Captain Bomb',
            message: 'Nie ma tam hot dogów',
            date: new Date('2025-06-01 11:11:20'),
            grade: 1 
          },
          {
            author: 'Wiedźmin 3 Najlepszy',
            message: 'Frytki mogą być ale mięso w burgerach smakuje jak karton',
            date: new Date('2025-06-01 15:52:20'),
            grade: 2 
          }
        ],
        grade: 4.1
      }),
      new Restaurant({
        id: 2,
        title: 'Bar u Kuby',
        type: 'bar',
        openHours: new Date('2025-06-02 15:00:00'),
        closeHours: new Date('2025-06-02 02:00:00'),
        address: 'ul. Miodowa 7',
        town: 'Gdańsk',
        comments: [{
            author: 'MF',
            message: 'Będziesz to jeszcze jadł?',
            date: new Date('2025-06-01 13:11:20'),
            grade: 5 
          }],
        grade: 4.3
      }),
      new Restaurant({
        id: 3,
        title: 'Pizzeria Napoli',
        type: 'restauracja z obsługą',
        openHours: new Date('2025-06-02 11:00:00'),
        closeHours: new Date('2025-06-02 23:00:00'),
        address: 'ul. Włoska 9',
        town: 'Wrocław',
        comments: [{
            author: 'Harnaś',
            message: 'Rzymska lepsza ale ta nie jest zła',
            date: new Date('2025-06-01 16:11:20'),
            grade: 3 
          },
        {
            author: 'IgocC',
            message: 'Pająki spadają mi na talerz',
            date: new Date('2025-06-01 16:11:20'),
            grade: 1 
          }],
        grade: 4.7
      }),
      new Restaurant({
        id: 4,
        title: 'Burger King',
        type: 'fast food',
        openHours: new Date('2025-06-02 09:00:00'),
        closeHours: new Date('2025-06-02 22:00:00'),
        address: 'ul. Centralna 5',
        town: 'Poznań',
        comments: [],
        grade: 4.0
      }),
      new Restaurant({
        id: 5,
        title: 'Cybermachina',
        type: 'bar',
        openHours: new Date('2025-06-02 16:30:00'),
        closeHours: new Date('2025-06-02 03:00:00'),
        address: 'ul. 27 Grudnia 99',
        town: 'Poznań',
        comments: [
          {
            author: 'Vernon Roch',
            message: 'Najlepsze Piwo w mieście. Za Temerię zrobię wszystko!',
            date: new Date('2025-06-01 19:11:20'),
            grade: 5 
          },
          {
            author: 'Geralt',
            message: 'Nareszcie dobra restauracja i można w Gwinta pograć',
            date: new Date('2025-06-01 21:19:10'),
            grade: 5 
          },
          {
            author: 'Nilfgardczyk',
            message: 'Nie wiem co ludzie widzą w tym barze wszystko drogie, a drinki takie sobie ',
            date: new Date('2025-06-01 3:05:15'),
            grade: 1
          }
        ],
        grade: 4.0
      })
    ];
  
  constructor() { }

  getRestaurants(): Restaurant[] 
  {
    return this.restaurantList;
  }

  getRestaurantById(id: number): Restaurant | undefined 
  {
    return this.restaurantList.find(r => r.id === id);
  }
}
