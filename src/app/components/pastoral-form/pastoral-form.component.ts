import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-pastoral-form',
  templateUrl: './pastoral-form.component.html',
  styleUrls: ['./pastoral-form.component.css'],
  
})
export class PastoralFormComponent  {
  pastoralFormGroup!:FormGroup;
  movement!:FormControl;

  trueValue: boolean = true;
  falseValue: boolean = false;

  showLabel: boolean = true;

  formMessage!:string;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit():void{
    this.pastoralFormGroup = this.formBuilder.group({
      id:[null],
      name: '',
      coordinator: '',
      patronSaint: '',
      isMovement: [false],
      fixedActivity: ''
    });
  }

  public onSubmitForm() {
    console.log(this.pastoralFormGroup.value);
    return this.formMessage = 'Pastoral/Movimento cadastrado com sucesso!';
  }

  isMovementChecked(isMovementOutput:boolean): void{
    this.pastoralFormGroup.patchValue({isMovement: isMovementOutput});
  }
}