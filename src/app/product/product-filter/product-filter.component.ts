import { CategoryService } from './../../category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
@Input('category') category;

  constructor(categoryService:CategoryService) { 
    this.categories$= categoryService.getCategories();
    console.log("cat"+this.categories$);
  }
  search(query)
  {
    console.log(query.value)
  }

  ngOnInit(): void {
  }

}
