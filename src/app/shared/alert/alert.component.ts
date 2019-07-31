import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @ViewChild('alertModal') alertModal;
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  onShowModal(){
    //this.alertModal.nativeElement.modal()
    this.alertModal.nativeElement.className = 'modal show';
  }
  onClose() {
    this.close.emit();
  }
}
