import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class CardComponent  implements OnInit {
  @Input() data: User = {
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
    pendingSO: true
  };

  constructor() { }

  ngOnInit() {}

  getRenewalStatusClass() {
    return {
      'waiting-approval': this.data.renewalStatus === 'Waiting Approval',
      'approved': this.data.renewalStatus === 'Approved',
      'rejected': this.data.renewalStatus === 'Rejected'
    }
  }
}
