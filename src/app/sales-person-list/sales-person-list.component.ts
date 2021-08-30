import { Component, OnInit } from '@angular/core';
import { Personsales } from './personsales';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  salespersonlist: Personsales[] = [
    new Personsales('yaseen', 'waleed', 'f5f5@gmail.com', 200000),
    new Personsales('ahmad', 'hussien', 'ahmad@gmail.com', 500000),
    new Personsales('lbna', 'al7mar', 'lban@gmail.com', 60000),
    new Personsales('mahmoud', 'hussien', 'mahmoud@gmail.com', 10000)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
