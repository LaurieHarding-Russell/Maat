import {NgModule} from '@angular/core';

import {MaatComponent} from './maat.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [CompanyComponent, 
    MaatComponent
  ],
  exports: [MaatComponent],
})
export class MaatModule {}