import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRepo]'
})
export class RepoDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("click") onClicks(){
    this.text("rgb(247, 84, 111)")
  }
  private text(action:any){
    this.elem.nativeElement.style.color=action;
  }
}
