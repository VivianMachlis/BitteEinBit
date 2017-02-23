import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appParseCss]'
})
export class ParseCssDirective {

  constructor(el: ElementRef) { 
  	el.nativeElement.style.backgroundColor = this.backroundColor+ "!important";
  }
  @Input() backroundColor: string;

}
