import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userName', 'password'];
  userForm = {
    userName: '',
    password: ''
  };
  dataSource = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.showUserList();
  }

  saveUser(): void {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    this.http.post('//localhost:8080/user', this.userForm, {headers}).subscribe((data: any[])=>{
      this.dataSource = data;
      this.showUserList();
    });
  }

  showUserList(): void {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    this.http.get('//localhost:8080/user', {headers}).subscribe((data: any[])=>{
      this.dataSource = data;
    });
  }
}
