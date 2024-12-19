import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";
import { CardComponent } from "../../components/card/card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SearchbarComponent,
    CardComponent
],
  declarations: [HomePage]
})
export class HomePageModule {}
