import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators} from './Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Form';

  reactiveForm: FormGroup;
  

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required , CustomValidators.noSpaceAllowed]),
      lastname: new FormControl(null , Validators.required),
      email: new FormControl(null , [Validators.required , Validators.email]),
      username: new FormControl(null,Validators.required,CustomValidators.checkUserName),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India'),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        postal: new FormControl(null,Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null,Validators.required),
      ]),
      experience: new FormArray([
        
      ])
    })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm);
    
  }

  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  DeleteSkill(index:number){

    let controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);

  }

  AddExp(){
    const formgroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(formgroup);
  }

  DeleteExp(index:number){
    let controls = <FormArray>this.reactiveForm.get('experience');
    controls.removeAt(index)
  }

}
