import { Directive, ElementRef, Input, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appMathjax]'
})
export class MathjaxDirective implements AfterViewInit {
  @Input('appMathjax') mathExpression: string = '';

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadMathJax();
    }
  }

  private loadMathJax() {
    if (typeof window !== 'undefined' && (window as any).MathJax) {
      this.el.nativeElement.innerHTML = this.mathExpression;
      setTimeout(() => { //ssr problemi (caching?)
        (window as any).MathJax.typesetClear();
        (window as any).MathJax.typesetPromise()
        .then(() => console.log("MathJax rendering complete"))
        .catch((err: any) => console.error('MathJax render error:', err));
    }, 50);
    } else {
      this.loadMathJaxScript();
    }
  }

  private loadMathJaxScript() {
    if ((window as any).MathJax) {
        console.log("MathJax already loaded, reprocessing...");
        this.loadMathJax(); //procesiraj sam xpr?
        return;
    }
    
    const script = document.createElement('script');
    script.id = 'mathjax-script';
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js';
    script.async = true;
    script.onload = () => {
    this.loadMathJax(); //fix za problemi z renderajnem dynamic mathjax na clientu pr ssr - nope ig
    };
    document.head.appendChild(script);
  }
}
