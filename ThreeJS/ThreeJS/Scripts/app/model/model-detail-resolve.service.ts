import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Model, ModelService } from './model.service';

@Injectable()
export class ModelDetailResolve implements Resolve<Model> {
  constructor(private cs: ModelService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Model>|boolean {
    let id = +route.params['id'];

    return this.cs.getModel(id).then(model => {
      if (model) {
        return model;
      } else { // id not found
        this.router.navigate(['/model']);
        return false;
      }
    });
  }
}