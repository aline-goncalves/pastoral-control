import { Component, Input, forwardRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pastoral-input-switch',
  templateUrl: './pastoral-input-switch.component.html',
  styleUrls: ['./pastoral-input-switch.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PastoralInputSwitchComponent),
        multi: true
    }
  ]
})
export class PastoralInputSwitchComponent {
  @Input('id') id!: string;
  @Input('class') class: string = "flex gap-2 justify-content-center";

  @Input('showLabel') showLabel: boolean = true;

  @Input('labelWhenTrue') labelWhenTrue!: string;
  @Input('labelWhenFalse') labelWhenFalse!: string;

  @Input('trueValue') trueValue!: any;
  @Input('falseValue') falseValue!: any;

  @Input('class-span') classSpan: string = '';

  inputSwitchFormGroup!:FormGroup;

  checked: boolean = false; 

  handleEvent(event : any){
    this.checked = this.returnIfIsChecked(event);  
  }

  private returnIfIsChecked(event : any): boolean{
    return event.checked == this.trueValue;
  }
}
