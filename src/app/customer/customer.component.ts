import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers:Customer[] = []
  selectedCustomer!:Customer;
  

  ngOnInit(): void {
    this.customers = [

      {id:1,firstName:'Kenan ',lastName:'Mirzeyev',age:24},
      {id:2,firstName:'Sebuhi ',lastName:'Yusiov',age:21},
      {id:3,firstName:'Nijat ',lastName:'Salmanov',age:22}

    ]
  }
  selectCustomer(name:Customer){
    this.selectedCustomer = name
  }

}
