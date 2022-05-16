import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccoutSummaryComponent } from 'src/app/widgets/accout-summary/accout-summary.component';
import { MyAssetsComponent } from 'src/app/widgets/my-assets/my-assets.component';
import { BeneficiariesComponent } from 'src/app/widgets/beneficiaries/beneficiaries.component';
import { AssetAllocationComponent } from 'src/app/widgets/asset-allocation/asset-allocation.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatDialogModule } from '@angular/material/dialog'
import { AssetpopupComponent } from 'src/app/modals/assetpopup/assetpopup.component';
import { MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BeneficiariesPopupComponent } from 'src/app/modals/beneficiaries-popup/beneficiaries-popup.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
     DefaultComponent,
     DashboardComponent,
     AccoutSummaryComponent,
     MyAssetsComponent,
     BeneficiariesComponent,
     AssetAllocationComponent,
     AssetpopupComponent,
     BeneficiariesPopupComponent

  ],
  imports: [
    CommonModule, 
    RouterModule,
    SharedModule,
    MatToolbarModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    GoogleChartsModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
  
})
export class DefaultModule { 

}
