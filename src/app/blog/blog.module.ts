import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { NewsComponent } from './news/news.component';
import { StoryComponent } from './story/story.component';


@NgModule({
  declarations: [
    NewsComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
