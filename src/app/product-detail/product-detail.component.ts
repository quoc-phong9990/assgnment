import { Component, inject } from '@angular/core';
import { routes } from '../app.routes';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {  
  product:any = {title:""};
  constructor(private routes: ActivatedRoute){
  }
  httpClient = inject(HttpClient);
  ngOnInit(){
    let id = this.routes.snapshot.paramMap.get('id');

    this.getDetailProductById(Number(id));
  }
  getDetailProductById(id:number){
    // console.log(id);  
    this.httpClient.get(`https://dummyjson.com/products/${id}`)
    .subscribe((response:any)=>{
        // console.log(response);
        this.product = response;
    })  
  }
}
