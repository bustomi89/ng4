import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriService } from 'app/masterdata/kategori/kategori.service';
import { CategoriModel } from 'app/masterdata/kategori/kategori.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _categoriService: CategoriService
  ) { }

  ngOnInit() {
    this.getSingleEmployee();
  }
  
  category:CategoriModel;

  getSingleEmployee(){
    var id = this.route.snapshot.params['id'];
    this._categoriService
      .getCategory(id)
      .subscribe(category =>{
          this.category = category[0];
          })
  };

  goBack(){
    this.router.navigate(['/masterdata/kategori/home']);
  }
}
