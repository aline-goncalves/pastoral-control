import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pastoral-form',
  templateUrl: './pastoral-form.component.html',
  styleUrls: ['./pastoral-form.component.css']
})
export class PastoralFormComponent  {
  pastoralFormGroup!:FormGroup;

  get isMovement() : any{
    return this.isMovement.get('is-movement')?.value;
  }

  constructor(private formBuilder : FormBuilder){}

  ngOnInit():void{
    this.isMovement.get('is-movement')?.setValue(false);

    this.pastoralFormGroup = this.formBuilder.group({
      isMovement: [false]
    });
  }
}
