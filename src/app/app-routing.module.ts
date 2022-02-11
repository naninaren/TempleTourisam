import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExploreMoreComponent } from './explore-more/explore-more.component';
import { DonateComponent } from './explore_more/donate/donate.component';
import { PrasadamComponent } from './explore_more/prasadam/prasadam.component';
import { TicketsComponent } from './explore_more/tickets/tickets.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about',component:AboutComponent},
  {path:'explore-more',component:ExploreMoreComponent,children:[
    {path:'donate',component:DonateComponent},
    {path:'prasadam',component:PrasadamComponent},
    {path:'tickets',component:TicketsComponent}

  ]},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
