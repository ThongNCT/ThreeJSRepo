import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Model, ModelService } from './model.service';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let model of models"
        [class.selected]="isSelected(model)"
        (click)="onSelect(model)">
        <span class="badge">{{model.id}}</span> {{model.name}}
      </li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class ModelListComponent implements OnInit {
  models: Model[];
  public selectedId: number;

  constructor(
    private service: ModelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  isSelected(model: Model) {
    return model.id === this.selectedId;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['id'];
      this.service.getModels()
        .then(models => this.models = models);
    });
  }

  onSelect(model: Model) {
    this.selectedId = model.id;

    // Navigate with relative link
    this.router.navigate([model.id], { relativeTo: this.route });
  }
}