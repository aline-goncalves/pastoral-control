import { Component, Input, forwardRef } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR, FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
  @Input('id') id: string = '';

  @Input('class') class: string = "flex gap-2 justify-content-center";

  @Input('showLabel') showLabel: boolean = true;

  @Input('labelWhenTrue') labelWhenTrue!: string;
  @Input('labelWhenFalse') labelWhenFalse!: string;

  @Input('trueValue') trueValue: any = true;
  @Input('falseValue') falseValue: any = false;

  @Input('class-span') classSpan: string = '';

  @Input() formControl!: FormControl;
  @Input() formControlName!: string;

  inputSwitchFormGroup!:FormGroup;

  get isMovement() : any{
    return this.isMovement.get(this.id)?.value;
  }

  constructor(private formBuilder : FormBuilder){}

  ngOnInit():void{
    this.isMovement.get(this.id)?.setValue(false);

    this.inputSwitchFormGroup = this.formBuilder.group({
      isMovement: [false]
    });
  }

  get isEnable(){
    console.log(this.isMovement?.value);
    return this.isMovement?.value;
  }
}
