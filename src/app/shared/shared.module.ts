import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarOptionSelectorDirective } from './directives/sidebar-option-selector/sidebar-option-selector.directive';


@NgModule({
  declarations: [MainLayoutComponent, SideBarComponent, FooterComponent, SidebarOptionSelectorDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
