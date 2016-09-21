import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterState} from '@angular/router';
import {GithubService} from '../../services';

@Component({
  selector: 'repo-detail',
  styleUrls: ['./repo-detail.css'],
  templateUrl: './repo-detail.html'
})
export class RepoDetail {
  private org:string;
  private repo:string;
  public repoDetails:any = {};

  constructor(public github: GithubService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const org = this.route.snapshot.parent.params['org'];
    console.log("org: " + org)
    this.route.params.subscribe(params => {
      this.org = org;
      this.repo = params['repo'] || '';

      if (this.repo) {
        this.github.getRepoForOrg(this.org, this.repo)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails;
          });
      }
    });
  }
}
