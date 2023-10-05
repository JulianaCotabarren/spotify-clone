import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    console.log('Image not found:', this.elHost);
    elNative.src = '../../../assets/img-broken.png'
  }

  constructor(
    private elHost: ElementRef
  ) { }

}
