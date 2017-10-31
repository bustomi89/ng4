import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CategoriModel } from 'app/masterdata/kategori/kategori.model';


@Injectable()
export class CategoriService {

  constructor(private _http:Http) { }
  checkMe:any;
  
  getCategories(): Observable<CategoriModel>{
    return this._http.get("http://35.188.20.96/medical-record/category-select.php/")
      .map(res=>{
        this.checkMe = res;
        // if(this.checkMe._body !== "0"){
        return res.json();
        // }
      });
  }

  addCategory(info){
    return this._http.post("http://35.188.20.96/medical-record/category-insert.php",info)
      .map(()=>"");
  }
  
  getCategory(id){
    return this._http.post("http://35.188.20.96/medical-record/category-selectone.php/",{'id':id})
      .map(res=>res.json());
  }

  deleteCategory(id){
    return this._http.post("http://35.188.20.96/medical-record/category-delete.php/",{'id':id})
      .map(()=>this.getCategories());
  }

  updateCategory(info){
    return this._http.post("http://35.188.20.96/medical-record/category-update.php/", info)
      .map(()=>"");
  }

}
