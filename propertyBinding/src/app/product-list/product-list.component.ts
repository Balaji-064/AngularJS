import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 age:number=56
  product={
    name:"vivo",
    price:9000,
    color:"black",
    discount:10,
    instock:10,
    Ipath:"../../assets/mobile.jpg"
    

  }
  getDiscountPrice(){
    return this.product.price-(this.product.price*this.product.discount/100)
  }

}
