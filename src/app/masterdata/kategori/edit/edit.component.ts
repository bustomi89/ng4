import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriService } from 'app/masterdata/kategori/kategori.service';
import { CategoriModel } from 'app/masterdata/kategori/kategori.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _categoriService: CategoriService
  ) { }

  ngOnInit() {
      this.getSingleCategory();
  }

  //model:any={};
  model = new CategoriModel();
  
  id = this.route.snapshot.params['id'];

  getSingleCategory(){
    this._categoriService
      .getCategory(this.id)
      .subscribe(employee =>{
          this.model = employee[0];
          })
         
  };
  
  updateCategory(){
      this._categoriService
        .updateCategory(this.model)
        .subscribe(()=> this.goBack());
        
        this._categoriService.getCategories();
  }
 
   goBack(){
    this._categoriService.getCategories();
    this.router.navigate(['/masterdata/kategori/home']);
  }
}
