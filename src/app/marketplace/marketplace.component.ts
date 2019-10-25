import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { ModuleService } from '../services/module.service';
import { ModuleData } from '../models/module.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'cx-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class CxMarketplaceComponent implements OnInit {
  installedModules$: any;
  errorMessage: string;
  errorVisible = false;

  constructor(private routerService: RouterService, private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.installedModules$ = this.moduleService.loadModules().pipe(
      tap(res => res.forEach(x => {
          if (this.isRegistered(x)) {
            x.registered = true;
          } else {
            if (x.registered) {
              this.registerRoute(x);
            }
          }
        })
      )
    );
  }

  enableModule(moduleToEnable: ModuleData) {
    // enable or disable module
    if (this.isRegistered(moduleToEnable)) {
      moduleToEnable.registered = false;
      this.routerService.unRegisterRoute(moduleToEnable.path);
    } else {
      moduleToEnable.registered = true;
      this.registerRoute(moduleToEnable);
    }
  }

  isRegistered(moduleData: ModuleData): boolean {
    return this.routerService.routeIsRegistered(moduleData.path);
  }

  private registerRoute(moduleToEnable: ModuleData) {
    // load up the umd file and register the route whenever succeeded.
    this.moduleService.loadModuleSystemJS(moduleToEnable).then((exports) => {
      this.routerService.createAndRegisterRoute(moduleToEnable, exports);
    }, (err) => this.showError(`${moduleToEnable.moduleName} could not be found, did you copy the umd file to ${moduleToEnable.location}?`, err));
  }

  private showError(message: string, err) {
    this.errorMessage = message;
    this.errorVisible = true;
    console.log(err); // Log error in console
  }

  closeError() {
    this.errorVisible = false;
  }
}
