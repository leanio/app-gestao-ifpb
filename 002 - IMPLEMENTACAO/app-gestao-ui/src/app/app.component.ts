import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './autenticacao/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-gestao-ui';

  constructor(
    public authService: AuthService,
    private router: Router
  ) { 
    this.verificarAutenticacao(); 
  }
  
  ngOnInit(): void {

  }

  logout(): void {
    this.authService.logout();
    this.verificarAutenticacao();
  }

  navegarParaLogin(): void {
    this.router.navigateByUrl('/login');
  }

  verificarAutenticacao(): void {
    if (!this.authService.isAutenticado()) {
      this.navegarParaLogin();
    }
  }

}
