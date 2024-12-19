import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSearchbar, ModalController } from '@ionic/angular';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { User } from 'src/app/interface/user';
import { dummyData } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  @ViewChild('searchbar') searchbar!: IonSearchbar;
  filters = {
    search: "",
    pendingSO: false,
    contractStatus: [] as ('Waiting Approval' | 'Approved' | 'Rejected')[],
    supervisor: [] as string[],
    location: [] as string[],
    adjustment: ''
  };
  filteredData:User[] = [];
  data:User[] = dummyData;

  constructor(private modalController: ModalController, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.filters.search = params['search'] || '';
      this.filters.pendingSO = params['pendingSO'] || false;
      this.filters.contractStatus = params['contractStatus'] || [];
      this.filters.supervisor = params['supervisor'] || [];
      this.filters.location = params['location'] || [];
      this.filters.adjustment = params['adjustment'] || null;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredData = this.data.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.filters.search.toLowerCase());
      const matchesPendingSO = !this.filters.pendingSO || item.pendingSO;
      const matchesContractStatus = this.filters.contractStatus.length === 0 || this.filters.contractStatus.includes(item.renewalStatus);
      const matchesSupervisor = this.filters.supervisor.length === 0 || this.filters.supervisor.includes(item.supervisor);
      const matchesLocation = this.filters.location.length === 0 || this.filters.location.includes(item.projectLocation);
      const matchesAdjustment = !this.filters.adjustment || (
        (this.filters.adjustment === '20' && item.adjustment <= '20') ||
        (this.filters.adjustment === '40' && item.adjustment <= '40' && item.adjustment > '20') ||
        (this.filters.adjustment === '60' && item.adjustment <= '60' && item.adjustment > '40') ||
        (this.filters.adjustment === '80' && item.adjustment <= '80' && item.adjustment > '60') ||
        (this.filters.adjustment === '100' && item.adjustment <= '100' && item.adjustment > '80')
      );

      return matchesSearch && matchesPendingSO && matchesContractStatus && matchesSupervisor && matchesLocation && matchesAdjustment;
    });
  }

  onSearch(event: any) {
    this.filters.search = event.target.value;
    this.router.navigate(['/home'], {
      queryParams: {
        search: this.filters.search,
      },
      queryParamsHandling: 'merge',
    });
  }

  async openFilterModal() {
    const modal = await this.modalController.create({
      component: FilterComponent,
    });
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        if (this.searchbar) {
          this.searchbar.value = '';
        }
        
        const currentParams = { ...this.route.snapshot.queryParams };
        delete currentParams['search'];
        
        this.router.navigate(['/home'], {
          queryParams: currentParams
        });
      }
    });
    
    return await modal.present();
  }
}
