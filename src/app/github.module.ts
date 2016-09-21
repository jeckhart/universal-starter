import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {GithubAbout, GithubHome, GithubRepoBrowser, GithubRepoDetail, GithubRepoList} from './components';
import {GithubService} from './services';
import {githubRouting} from './github.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    githubRouting
  ],
  declarations: [
    GithubAbout,
    GithubHome,
    GithubRepoBrowser,
    GithubRepoDetail,
    GithubRepoList
  ],
  providers: [
    GithubService
  ]
})
export class GithubModule {}
