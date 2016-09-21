import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {About} from './components/about/about';
import {Home} from './components/home/home';
import {RepoBrowser} from './components/repo-browser/repo-browser';
import {RepoList} from './components/repo-list/repo-list';
import {RepoDetail} from './components/repo-detail/repo-detail';

const githubRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'github', component: RepoBrowser, children: [
    { path: ':org', component: RepoList, children: [
      { path: ':repo', component: RepoDetail },
      { path: '', component: RepoDetail }
    ]},
    { path: '', component: RepoList}
  ]}
];

export const githubRouting: ModuleWithProviders = RouterModule.forRoot(githubRoutes);

