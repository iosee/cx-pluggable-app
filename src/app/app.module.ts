import { Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { RouterService } from './services/router.service';
import { AppComponent } from './app.component';
import { CxMarketplaceComponent } from './marketplace/marketplace.component';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
    AppComponent,
    CxMarketplaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'marketplace', pathMatch: 'full'
      },
      {
        path: 'marketplace', component: CxMarketplaceComponent
      }
    ], {useHash: true})
  ],
  providers: [RouterService,
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
