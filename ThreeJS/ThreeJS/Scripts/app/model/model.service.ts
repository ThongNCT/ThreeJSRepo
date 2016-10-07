export class Model {
    constructor(public id: number, public name: string) {}
}

const _MODELS = [
  new Model(1, 'Dragon Burning Cities'),
  new Model(2, 'Sky Rains Great White Sharks'),
  new Model(3, 'Giant Asteroid Heading For Earth'),
  new Model(4, 'Procrastinators Meeting Delayed Again'),
];

let ModelPromise = Promise.resolve(_MODELS);

import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {

  static nextModelId = 100;

  getModels() { return ModelPromise; }

  getModel(id: number | string) {
    return ModelPromise
      .then(models => models.find(model => model.id === +id));
  }


  addModel(name: string) {
    name = name.trim();
    if (name) {
      let model = new Model(ModelService.nextModelId++, name);
      ModelPromise.then(models => models.push(model));
    }
  }
}