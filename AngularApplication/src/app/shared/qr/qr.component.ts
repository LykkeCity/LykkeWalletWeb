import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var QRious: any;

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html'
})
export class QrComponent implements OnInit {

  @Input() data: string;
  @Input() size: number;
  @ViewChild('qr') qr: ElementRef;
  public qrCodeInstance: any;

  constructor() { }

  ngOnInit() {

    this.qrCodeInstance = new QRious({
      element: this.qr.nativeElement,
      value: this.data,
      size: this.size
    });
  }

}
