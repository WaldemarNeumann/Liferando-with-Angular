import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit{

  constructor() {

  }

  ngOnInit(): void {
    
  }


  menus = [
    {
      title: 'Döner-Tasche',
      selection: 'mit einer Fleischsorte, Salat, Cocktail und Tzatziki',
      description: 'Wahl aus: mit Hähnchenfleich von Drehspieß, mit Kalbfleisch von Drehspieß, mit Cocktailsouce, mit Tzatziki, ohne Souce und mehr',
      price: '5.00€'
    },
    {
      title: 'Döner-Teller',
      selection: 'mit einer Fleischsorte nach Wahl, Salat und einer Beilage nach Wahl',
      description: 'Wahl aus: mit Hähnchenfleich von Drehspieß, mit Kalbfleisch von Drehspieß, mit Pommes frites, mit Reis und ohne Beilage',
      price: '9.50€'
    },
    {
      title: 'Pizza Margherita',
      description: 'Wahl aus: mit Ananas, mit Artischocken, mit Broccoli, mit Champignons, Geflügel oder mehr',
      price: '9.50€'
    },
    {
      title: 'Salat Mista',
      description: 'Wahl aus: mit Essig-Öl-Dressing, mit Joghurt-Dressing, mit Spetial-Dressing, ohne Dressing, mit Ananas und mehr',
      price: '7.00€'
    },
    {
      title: 'Bauernsalat',
      selection: 'mit roten Zwiebeln, Gewürzgurken und Burgersouce',
      price: '9.00€'
    },
    {
      title: 'Hamburger',
      selection: 'mit Peperoni und Feta',
      price: '9.00€'
    },
    {
      title: 'Chilli-Cheeseburger',
      selection: 'mit Cheddar, karamellisierten Zwiebeln, Jalapenos und Chilli-Cheesesouce',
      price: '10.00€'
    }
 
  ];

}
