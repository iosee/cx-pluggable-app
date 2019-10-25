import { HttpClient } from '@angular/common/http';
import { Compiler, Injectable } from '@angular/core';

import { ModuleData } from '../models/module.model';

// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as BrowserAnimations from '@angular/platform-browser/animations';
import * as AngularMaterial from '@angular/material';

import { Observable } from 'rxjs';

declare var SystemJS: any;

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  source = `http://${window.location.host}/`;

  constructor(private compiler: Compiler, private http: HttpClient) {
    console.log(compiler);
  }

  loadModules(): Observable<ModuleData[]> {
    return this.http.get<ModuleData[]>('./assets/plugins.json');
  }

  loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
    const url = this.source + moduleInfo.location;
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    SystemJS.set('@angular/material', SystemJS.newModule(AngularMaterial));

    // now, import the new module
    return SystemJS.import(url).then((module) => {
      console.log(module);
      return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
        console.log(compiled);
        return module;
      });
    });
  }
}
