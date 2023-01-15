import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'yellow');
    this.render.setStyle(this.eleRef.nativeElement, 'color', 'red');
  }
}
