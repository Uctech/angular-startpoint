import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[backGround]'
})
export class BackGroundDirective {

  constructor(private el: ElementRef, private render: Renderer) {  }
  onFocus() {
    /**
     *the element you want to apply it in this case is input tag 
     * the property you want to set for input tag
     * value of property
     */
    //this.render.setElementStyle(this.el, 'width', '200' );
   this.el.nativeElement.style.backgroundColor = 'black';
  }
  onBlur() {
    //this.render.setElementStyle( this.el, 'width', '120' );
     this.el.nativeElement.style.backgroundColor = 'white';
  }
}
