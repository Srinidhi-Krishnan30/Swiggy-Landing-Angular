import { Component } from '@angular/core';

interface Restaurant {
  name: string;
  imageUrl: string;
  discount?: string;
  rating: number;
  deliveryTime: string;
  description: string;
  priceLabel: string;
}

@Component({
  selector: 'app-resturant',
  standalone: true,
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css'],
})


export class ResturantComponent {
  /*restaurantData: Restaurant[] = [
    {
      name: 'Pizza Hut',
      imageUrl: '../../assets/pizzaHut.png',
      discount: '50% OFF UPTO ₹400',
      rating: 4.1,
      deliveryTime: '30-35 mins',
      description: 'Pizzas, Perumbakkam',
      priceLabel: 'ITEMS AT ₹89'
    },
    {
      name: 'KFC',
      imageUrl: '../../assets/KFC.png',
      rating: 4.1,
      deliveryTime: '20-25 mins',
      description: 'Burgers, Fast Food, Rolls & Wraps, Perumbakkam',
      priceLabel: 'ITEMS AT ₹89'
    },
    {
      name: 'Chinese Wok',
      imageUrl: '../../assets/chineseWok.png',
      rating: 4,
      deliveryTime: '40-45 mins',
      description: 'Chinese, Asian, Tibetan, Desserts, Old Mahabalipuram Road OMR',
      priceLabel: 'ITEMS AT ₹149'
    },
    {
      name: 'Domino\'s Pizza',
      imageUrl: '../../assets/dominos.png',
      rating: 4.1,
      deliveryTime: '20-25 mins',
      description: 'Pizzas, Italian, Pastas, Desserts, Sholinganallur',
      priceLabel: '₹125 OFF ABOVE ₹1199'
    },
    {
      name: 'LunchBox - Meals and Tiffin',
      imageUrl: '../../assets/lunchBox.png',
      rating: 4.4,
      deliveryTime: '30-35 mins',
      description: 'Biryani, North Indian, Punjabi, Medavakkam',
      priceLabel: 'ITEMS AT ₹149'
    }
  ];

  currentIndex = 0;
  pageSize = 5;

  get displayedRestaurants(): Restaurant[] {
    return this.restaurantData.slice(this.currentIndex, this.currentIndex + this.pageSize);
  }

  prevPage(): void {
    this.currentIndex = Math.max(this.currentIndex - this.pageSize, 0);
  }

  nextPage(): void {
    this.currentIndex = Math.min(this.currentIndex + this.pageSize, this.restaurantData.length - 1);
  }*/
}
