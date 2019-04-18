import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: "[app-dropdown]"
})
export class DropdownDirectiive {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen= !this.isOpen;
    }
}