import { Component, Input } from '@angular/core';
import { Campo } from '../../interfaces/campo.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label:string = '';
  @Input() tipo:string = '';
  @Input() placeholder:string = '';
  @Input() textError:string = '';
  @Input() error:string = '';

}
