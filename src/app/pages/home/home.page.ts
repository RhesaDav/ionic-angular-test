import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  data:User[] = [
    {
      id: "10208",
      name: "John Doe",
      contractPeriod: {
        start: new Date("2020-01-01"),
        end: new Date("2020-12-31")
      },
      adjustment: "20",
      projectLocation: "New York",
      supervisor: "Jane Doe",
      funnelGenId: "14623",
      so: "117293",
      soIdc: "70724",
      renewalStatus: "Waiting Approval",
    },
    {
      id: "10209",
      name: "Jane Doe",
      contractPeriod: {
        start: new Date("2020-01-01"),
        end: new Date("2020-12-31")
      },
      adjustment: "20",
      projectLocation: "New York",
      supervisor: "John Doe",
      funnelGenId: "14624",
      so: "117294",
      soIdc: "70725",
      renewalStatus: "Waiting Approval",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
