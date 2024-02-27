import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ContainerComponent } from "./container/container.component";
import { ProductDetailComponent } from "./container/product-list/product-detail/product-detail.component";
import { CanActivate } from "./auth.guard";

//DEFINE ROUTE

const routes: Routes = [
    {path:'',component:ContainerComponent},
    {path:'Login' , component:LoginComponent},
    {path:'Home' , component:ContainerComponent},
    {path:'products/product/:id' , component:ProductDetailComponent , canActivate:[CanActivate]}
]



@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})


export class RoutingModule{


}