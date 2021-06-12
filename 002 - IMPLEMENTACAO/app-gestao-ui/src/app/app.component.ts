import { Component, OnInit } from '@angular/core';
import { AuthService } from './autenticacao/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-gestao-ui';

  campusId: number;

  constructor(
    private autenticacaoService: AuthService
  ) {

  }
  ngOnInit(): void {
    this.campusId = this.autenticacaoService.jwtPayload.campus_id;
  }


}
