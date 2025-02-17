import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMathjax]'
})
export class MathjaxDirective implements AfterViewInit {
  @Input() appMathjax?: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.renderMath();
  }

  private renderMath(): void {
    this.el.nativeElement.innerHTML = this.appMathjax;
    (window as any).MathJax.typesetPromise();
  }
}