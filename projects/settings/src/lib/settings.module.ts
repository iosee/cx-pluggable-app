import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CxSettingsComponent } from './components/settings.component';
import { MatExpansionModule, MatIconModule, MatInputModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
  declarations: [CxSettingsComponent],
  imports: [
    MatExpansionModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild([{
      path: '',
      component: CxSettingsComponent
    }])
  ],
  exports: [CxSettingsComponent]
})
export class CxSettingsModule { }
