import { NgModule } from '@angular/core';
import { CxFormComponent } from './components/form.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [CxFormComponent],
  imports: [
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    RouterModule.forChild([{
      path: '',
      component: CxFormComponent
    }])
  ],
  exports: [CxFormComponent]
})
export class CxFormModule { }
