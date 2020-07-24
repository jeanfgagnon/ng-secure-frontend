import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from './../../services/app-data.service';
import { AuthUser } from './../../common/auth-user';
import { AgentModel } from '../../models/agent-model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-trak-road-main',
  templateUrl: './trak-road-main.component.html',
  styleUrls: ['./trak-road-main.component.scss']
})
export class TrakRoadMainComponent implements OnInit {

  public authUser: AuthUser;
  public agent: AgentModel;

  constructor(
    private dataService: AppDataService,
    private authService: AuthenticationService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.authUser =  this.authService.authUserValue;
    this.dataService.loadAgent(this.authUser.id).subscribe((data: AgentModel) => {
      this.agent = data;
    })
  }
}
