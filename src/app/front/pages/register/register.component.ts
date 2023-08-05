import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  passwordView:boolean = false;
  passwordCheckView:boolean = false;

  registerForm: FormGroup = this.fb.group({
      nombre : [, [Validators.required,Validators.minLength(10)]],
      alias : [,Validators.required],
      email : [,Validators.required],
      password : [,Validators.required],
      passwordCheck : [,Validators.required]
  });

  constructor(private fb:FormBuilder){


  }
  ngOnInit(): void {
    
  }

  campoValido(campo:string){
    return this.registerForm.controls[campo].errors && this.registerForm.controls[campo].touched;
  }

  inputChanger(state:boolean){
    return !state;
  }

  passwordMatchValidator(): boolean {
    
    

    if(this.registerForm.get('password')?.value == this.registerForm.get('passwordCheck')?.value){
      console.log(this.registerForm);
      if(this.registerForm.get('password')?.value == null){
        return false;
      }else{
        return true;
      }
      
    }else{
      console.log(true);

      return false;
    }
}

  enviar(){
    if(!this.passwordMatchValidator()){
      this.registerForm.controls['passwordCheck'].setErrors({'mismatched':true});
      this.registerForm.controls['passwordCheck'].markAsTouched;
      
    }else{
      this.registerForm.controls['passwordCheck'].setErrors(null);
      this.registerForm.controls['passwordCheck'].status;
    }
    
    
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
    
    console.log(this.registerForm);
  }


}
