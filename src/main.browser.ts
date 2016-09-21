import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { App, Home } from './app/app';
import { githubRouting } from './app/github.routes';
import { About } from './app/components/about/about';
import { Home as GithubHome } from './app/components/home/home';
import { RepoBrowser } from './app/components/repo-browser/repo-browser';
import { RepoList } from './app/components/repo-list/repo-list';
import { RepoDetail } from './app/components/repo-detail/repo-detail';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, Home, About, GithubHome, RepoBrowser, RepoList, RepoDetail ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    githubRouting,
  ]
})
export class MainModule {

}
