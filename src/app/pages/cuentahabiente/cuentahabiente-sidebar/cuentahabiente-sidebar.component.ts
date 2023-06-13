import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cuentahabiente-sidebar',
  templateUrl: './cuentahabiente-sidebar.component.html',
  styles: [
  ]
})
export class CuentahabienteSidebarComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }



  public logout(){
    this.login.logout();
    window.location.reload();
  }
}
