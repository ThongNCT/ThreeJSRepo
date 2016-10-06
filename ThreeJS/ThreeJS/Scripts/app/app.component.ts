import { Component, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent { 
  constructor(element: ElementRef) {
    $('#carousel').carouFredSel({
      circular: false,
      infinite: false,
      width: '100%',
      height: 405,
      items: 3,
      auto: false,
      prev: '#prev',
      next: '#next',
      scroll: {
        items: 1,
        duration: 1000,
        easing: 'quadratic',
        onBefore: function( data ) {
          data.items.old.find( 'img[src*="-grey"]' ).stop().fadeTo( 500, 1 );
          data.items.old.removeClass( 'selected' );
          data.items.old.stop().animate({
            height: 313
          });
          $('body').css( 'backgroundColor', '#ddd' );
        },
        onAfter: function( data ) {
          openItem( data.items.visible.eq( 1 ) );
        }
      },
      onCreate: function( data ) {
        openItem( data.items.eq( 1 ) );
      }
    });
  }
}