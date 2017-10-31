import { Component, OnInit } from '@angular/core';
import { CategoriService } from 'app/masterdata/kategori/kategori.service';
import { CategoriModel } from 'app/masterdata/kategori/kategori.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private _categoriService: CategoriService,
     private router: Router) { }

  ngOnInit() {
  }

model = new CategoriModel();
  addCategory(){
      this._categoriService
        .addCategory(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/masterdata/kategori/home']);
  }
}