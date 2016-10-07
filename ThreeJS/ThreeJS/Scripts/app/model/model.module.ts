import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { ModelService }        from './model.service';

import { ModelComponent }     from './model.component';
import { ModelListComponent }       from './model-list.component';
import { ModelHomeComponent } from './model-home.component';
import { ModelDetailComponent }     from './model-detail.component';

import { ModelRoutingModule } from './model-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModelRoutingModule
  ],
  declarations: [
    ModelComponent,
    ModelListComponent,
    ModelHomeComponent,
    ModelDetailComponent
  ],
  providers: [
    ModelService
  ]
})
export class ModelModule {}