import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogauthGuard } from './blogauth.guard';
import { NewsComponent } from './news/news.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [

  {path:'',component:NewsComponent},
  {path:'news',component:NewsComponent,data:{title:('Home')}},

  {path:'story',component:StoryComponent,canActivate:[BlogauthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
