import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pastoral-field-group',
  templateUrl: './pastoral-field-group.component.html',
  styleUrls: ['./pastoral-field-group.component.css']
})
export class PastoralFieldGroupComponent {
  @Input('label') label:string = '';
  @Input('class') class:string = '';
  @Input('for') for:string = '';
  @Input('class-label') classLabel:string = '';
  @Input('error-template') errorTemplate:string = '';
  @Input('required-message') requiredMessage:string = '';
  @Input('max-length-message') maxLengthMessage:string = '';

  isRequired :boolean = false;
  isMaxLength :boolean = false;

}
