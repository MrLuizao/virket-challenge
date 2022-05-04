import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-tems',
  templateUrl: './cart-tems.component.html',
  styleUrls: ['./cart-tems.component.scss'],
})
export class CartTemsComponent implements OnInit {

  cartItems = [
    {
      brand: "Jabra",
      colors: [{
        hex: "#ffa500",
        name: "Naranja"
      }],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      discount: "350.0",
      id: 6,
      is_favorite: false,
      product_image: "https://purepng.com/public/uploads/large/headphones-1ax.png",
      product_name: "Jabra Star light",
      product_price: "1500.0",
      reviews: "10",
      score: 3,
      sku: "00750105772039",
    },
    {
      brand: "Jabra",
      colors: [{
        hex: "#ffa500",
        name: "Naranja"
      }],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      discount: "350.0",
      id: 6,
      is_favorite: false,
      product_image: "https://purepng.com/public/uploads/large/headphones-1ax.png",
      product_name: "Jabra Star light",
      product_price: "1500.0",
      reviews: "10",
      score: 3,
      sku: "00750105772039",
    },
    {
      brand: "Jabra",
      colors: [{
        hex: "#ffa500",
        name: "Naranja"
      }],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      discount: "350.0",
      id: 6,
      is_favorite: false,
      product_image: "https://purepng.com/public/uploads/large/headphones-1ax.png",
      product_name: "Jabra Star light",
      product_price: "1500.0",
      reviews: "10",
      score: 3,
      sku: "00750105772039",
    },
    {
      brand: "Jabra",
      colors: [{
        hex: "#ffa500",
        name: "Naranja"
      }],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      discount: "350.0",
      id: 6,
      is_favorite: false,
      product_image: "https://purepng.com/public/uploads/large/headphones-1ax.png",
      product_name: "Jabra Star light",
      product_price: "1500.0",
      reviews: "10",
      score: 3,
      sku: "00750105772039",
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('cartItems', this.cartItems);
  }

}
