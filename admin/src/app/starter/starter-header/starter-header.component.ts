import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../common/application.service';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {

  username: string;

  constructor(protected applicationService: ApplicationService,
              protected loginService: LoginService,
              protected router: Router) {
  }

  ngOnInit() {

    this.username = this.applicationService.user.username;
  }

  signOut(event: any): void {

    event.preventDefault();

    this.loginService.logout();

    this.applicationService.signOut();

    this.router.navigate(['login']);
  }

  changePassword(event: any): void {

    event.preventDefault();

    this.router.navigate(['starter/changePassword']);
  }
}
