import { AbstractControl, FormControl, ReactiveFormsModule, ɵFormControlCtor } from "@angular/forms";

export class CustomValidators{
    static noSpaceAllowed=(control:FormControl) =>{
     
        if(control.value != null && control.value.indexOf(' ')!= -1){
            return{noSpaceAllowed:true};
        }
    
        return null;
    }
    
    // async validator
    static checkUserName(control:AbstractControl): Promise<any>{
        return userNameAllowed(control.value);
    }
}

function userNameAllowed(username:string){
    const takenUserNames = ['TonyStark' , 'SteveRogers' , 'BruceBanner'];

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(takenUserNames.includes(username)){
            resolve({checkUserName:true});
        }
        else{
            resolve(null);
        }
        },5000);
    })
}

