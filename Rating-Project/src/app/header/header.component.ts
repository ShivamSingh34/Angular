import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  router:Router = inject(Router);
  auth: AuthService = inject(AuthService);

  goToHome(){
     this.router.navigate(['home'])
  }

  logout(){
     this.auth.logout();
  }

}
