import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

user=new FormGroup({
  username:new FormControl('',[Validators.required,Validators.minLength(3)]),
  password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
  age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(40)]),
  email:new FormControl('',[Validators.email])
});
registation() {
  console.log(this.user.value);
  
  }

}



