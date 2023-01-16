import { ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: String = "green";
  @Input() highlightColor: String = "blue";

  @HostBinding('style.backgroundColor') backgroundColor: String = '';

  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    //this.render.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'yellow');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') mouseover(evendData: Event) {
    //this.render.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue')
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(evendData: Event) {
    //this.render.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent')
    this.backgroundColor = this.defaultColor;
  }
}
