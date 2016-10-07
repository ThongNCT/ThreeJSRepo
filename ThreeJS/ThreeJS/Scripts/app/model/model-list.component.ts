import { Component, ElementRef, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Model, ModelService } from './model.service';

declare var $: any;

@Component({
  templateUrl: 'view/model-list.component.html' 
})

export class ModelListComponent implements OnInit {
  models: Model[];
  public selectedId: number;

  constructor(
    private element: ElementRef,
    private service: ModelService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    let $element = $(this.element.nativeElement);
    $element.find('#carousel span').append('<img src="img/gui/carousel_glare.png" class="glare" />');
    $element.find('#thumbs a').append('<img src="img/gui/carousel_glare_small.png" class="glare" />');
  
    $element.find('#carousel').carouFredSel({
      responsive: true,
      circular: false,
      auto: false,
      items: {
        visible: 1,
        width: 200,
        height: '56%'
      },
      scroll: {
        fx: 'directscroll'
      }
    });
  
    $element.find('#thumbs').carouFredSel({
      responsive: true,
      circular: false,
      infinite: false,
      auto: false,
      prev: '#prev',
      next: '#next',
      items: {
        visible: {
          min: 2,
          max: 6
        },
        width: 150,
        height: '66%'
      }
    });
  
    $element.find('#thumbs a').click((e: any) => {
      $element.find('#carousel').trigger('slideTo', '#' + e.target.href.split('#').pop() );
      $element.find('#thumbs a').removeClass('selected');
      $(e.target).addClass('selected');
      return false;
    });
  }

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