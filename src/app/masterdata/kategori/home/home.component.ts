import { Component, OnInit, Input, ElementRef, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoriService } from 'app/masterdata/kategori/kategori.service';
import { Observable } from 'rxjs/Observable';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    require('smartadmin-plugins/datatables/datatables.min.css')
  ]
})
export class HomeComponent implements OnInit {
  timerSubscription: any;

  @Input() public options:any;
  @Input() public filter:any;
  @Input() public detailsFormat:any;

  @Input() public paginationLength: boolean;
  @Input() public columnsHide: boolean;
  @Input() public tableClass: string;
  @Input() public width: string = '100%';
  
  constructor(
    private _categoriService:CategoriService,
    private router: Router,
    private el: ElementRef) { }

  categories:any;

  ngOnInit() {
    Promise.all([
      System.import('script-loader!smartadmin-plugins/datatables/datatables.min.js'),
    ]).then(()=>{
      this.getCategories();
    })
  }

  getCategories(){
    this._categoriService.getCategories()
        .subscribe(categories => {
          this.categories = categories;
      } )
  }

  deleteCategory(id){
      this._categoriService
        .deleteCategory(id)
        .subscribe(() => {
          this.getCategories();
      } )
  }

}
