import { ElementRef } from "@angular/core";
import { Directive, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasichighlight]'
})

export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'red';
        this.elementRef.nativeElement.style.color = 'blue';
    }

}