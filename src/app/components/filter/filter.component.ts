import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { User } from 'src/app/interface/user';
import { dummyData } from 'src/app/data/data';

interface FilterValues {
  pendingSO: boolean;
  contractStatus: string[];
  supervisor: string[];
  location: string[];
  adjustment: string | null;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: false,
})
export class FilterComponent implements OnInit {
  filters: FilterValues = {
    pendingSO: false,
    contractStatus: [],
    supervisor: [],
    location: [],
    adjustment: null
  };

  supervisorList = dummyData
    .map(user => user.supervisor)
    .filter((value, index, self) => self.indexOf(value) === index);
  locationList = dummyData
    .map(user => user.projectLocation)
    .filter((value, index, self) => self.indexOf(value) === index);
  contractStatusList: User['renewalStatus'][] = ['Waiting Approval', 'Approved', 'Rejected'];

  constructor(
    private modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (Object.keys(params).length > 0) {
        this.filters = {
          pendingSO: params['pendingSO'] === 'true',
          contractStatus: this.parseQueryParam(params['contractStatus']),
          supervisor: this.parseQueryParam(params['supervisor']),
          location: this.parseQueryParam(params['location']),
          adjustment: params['adjustment'] || null
        };
      }
    });
  }

  private parseQueryParam(param: string | string[] | undefined): string[] {
    if (!param) return [];
    if (Array.isArray(param)) {
      return param;
    }
    return param.split(',').map(item => item.trim());
  }

  dismissModal(): void {
    this.modalController.dismiss();
  }

  getContractStatusLabel(value: string): string {
    return this.contractStatusList.find(status => status === value) || value;
  }

  getSupervisorLabel(value: string): string {
    return this.supervisorList.find(supervisor => supervisor === value) || value;
  }

  getLocationLabel(value: string): string {
    return this.locationList.find(location => location === value) || value;
  }

  removeContractStatus(status: string): void {
    this.filters.contractStatus = this.filters.contractStatus.filter(s => s !== status);
    this.updateQueryParams();
  }

  removeSupervisor(supervisor: string): void {
    this.filters.supervisor = this.filters.supervisor.filter(s => s !== supervisor);
    this.updateQueryParams();
  }

  removeLocation(location: string): void {
    this.filters.location = this.filters.location.filter(l => l !== location);
    this.updateQueryParams();
  }

  resetFilters(): void {
    this.filters = {
      pendingSO: false,
      contractStatus: [],
      supervisor: [],
      location: [],
      adjustment: null
    };
    this.router.navigate(['/home'], { 
      queryParams: {},
      replaceUrl: true
    });
    this.modalController.dismiss();
  }

  applyFilters(): void {
    const queryParams = this.getCleanQueryParams();
    this.router.navigate(['/home'], { 
      queryParams,
      replaceUrl: true
    });
    this.modalController.dismiss(this.filters);
  }

  private updateQueryParams(): void {
    const queryParams = this.getCleanQueryParams();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      replaceUrl: true,
      queryParamsHandling: 'merge'
    });
  }

  private getCleanQueryParams(): { [key: string]: string | boolean | null } {
    const queryParams: { [key: string]: string | boolean | null } = {};
    
    if (this.filters.pendingSO) {
      queryParams['pendingSO'] = this.filters.pendingSO;
    }
    
    if (this.filters.contractStatus.length > 0) {
      queryParams['contractStatus'] = this.filters.contractStatus.join(',');
    }
    
    if (this.filters.supervisor.length > 0) {
      queryParams['supervisor'] = this.filters.supervisor.join(',');
    }
    
    if (this.filters.location.length > 0) {
      queryParams['location'] = this.filters.location.join(',');
    }
    
    if (this.filters.adjustment) {
      queryParams['adjustment'] = this.filters.adjustment;
    }
    
    return queryParams;
  }
}