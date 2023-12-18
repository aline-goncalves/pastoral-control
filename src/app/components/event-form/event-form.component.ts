import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent  {
  eventFormGroup!:FormGroup;
  movement!:FormControl;

  trueValue: boolean = true;
  falseValue: boolean = false;

  showLabel: boolean = true;

  formMessage!:string;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit():void{
    this.eventFormGroup = this.formBuilder.group({
      id:[null],
      name: '',
      coordinator: '',
      patronSaint: '',
      isMovement: [false],
      fixedActivity: ''
    });
  }

  public onSubmitForm() {
    console.log(this.eventFormGroup.value);
    return this.formMessage = 'Pastoral/Movimento cadastrado com sucesso!';
  }

  isMovementChecked(isMovementOutput:boolean): void{
    this.eventFormGroup.patchValue({isMovement: isMovementOutput});
  }
}