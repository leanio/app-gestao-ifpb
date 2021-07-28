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

  urlDesbloqueadas = ['/usuarios/cadastro'];
  urlAtual: string;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) { 
    
  }
  
  async ngOnInit(): Promise<void> {
    await this.carregarUrl();
    this.verificarAutenticacao(); 
  }

  async carregarUrl(): Promise<void> {
    this.router.events.subscribe(changeEvent => {
      if (changeEvent['url']) this.urlAtual = changeEvent["url"];
    });
  }

  logout(): void {
    this.authService.logout();
    this.verificarAutenticacao();
  }

  navegarParaLogin(): void {
    this.router.navigateByUrl('/login');
  }

  verificarAutenticacao(): void {
    if (!this.authService.isAutenticado() && !this.urlDesbloqueadas.includes(this.urlAtual)) {
      this.navegarParaLogin();
    }
  }

}
