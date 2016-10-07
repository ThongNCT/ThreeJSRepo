import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModelHomeComponent } from './model-home.component';
import { ModelListComponent }       from './model-list.component';
import { ModelComponent }     from './model.component';
import { ModelDetailComponent }     from './model-detail.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';

import { ModelDetailResolve }   from './model-detail-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/model',
        pathMatch: 'full'
      },
      {
        path: 'model',
        component: ModelComponent,
        children: [
          {
            path: '',
            component: ModelListComponent,
            children: [
              {
                path: ':id',
                component: ModelDetailComponent,
                canDeactivate: [CanDeactivateGuard],
                resolve: {
                  crisis: ModelDetailResolve
                }
              },
              {
                path: '',
                component: ModelHomeComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ModelDetailResolve
  ]
})
export class ModelRoutingModule { }