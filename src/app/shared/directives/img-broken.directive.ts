import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  //Escucha el evento error de manera nativa
  @HostListener('error') handleError(): void {
    const elNative = this.el.nativeElement;
    elNative.src = './assets/images/broken.png';    
  }

  constructor(private el: ElementRef<HTMLImageElement>) { }

}
