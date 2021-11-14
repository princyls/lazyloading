import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ShellService } from './shell.service';

// const routes: Routes = [
//     {path:'about',component:AboutComponent},
//      {path:'home',component:HomeComponent},
//     {
      
//       path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
//     }
  

// ];
const routes: Routes = [
  ShellService.childRooting([
    {path:'about',component:AboutComponent},
   {path:'home',component:HomeComponent},
  {
    
    path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),canActivate:[AuthGuard]
  },
  {
    path:'hospital',loadChildren:() =>import('./hospital/hospital.module').then(m =>m.HospitalModule)
  }

  ])
  


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
