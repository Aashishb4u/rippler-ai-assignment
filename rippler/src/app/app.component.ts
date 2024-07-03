import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rippler';
  products: any = [
    {
      img: 'assets/products/Image-Master-1.png',
      name: 'Flowy Dress with pink and gold',
      highlighted: 'Burberry',
      rrp: '£129.99',
      size: '4',
      rental: '£12.00'
    },
    {
      img: 'assets/products/Image-Master-2.png',
      name: 'Beach Dress',
      highlighted: 'Prada',
      rrp: '£129.99',
      size: '8',
      rental: '£12.00'
    },
    {
      img: 'assets/products/Image-Master-3.png',
      name: 'Res Dress for evening wear',
      highlighted: 'Bandage',
      rrp: '£129.99',
      size: '12',
      rental: '£12.00'
    },
    {
      img: 'assets/products/Image-Master-4.png',
      name: 'Wedding Guest',
      highlighted: 'Prada',
      rrp: '£129.99',
      size: '12',
      rental: '£12.00'
    },
    {
      img: 'assets/products/Image-Master-5.png',
      name: 'Nighwear',
      highlighted: 'Ansell',
      rrp: '£129.99',
      size: '14',
      rental: '£12.00'
    },
    {
      img: 'assets/products/Image-Master-1.png',
      name: 'Summer Dress',
      highlighted: 'Desacada',
      rrp: '£129.99',
      size: '8',
      rental: '£12.00'
    }
  ]
}
