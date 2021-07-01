import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../autenticacao/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  codigoCampus = 1;

  constructor(
    public authService: AuthService
  ) { 

  }

  ngOnInit(): void {

  }


}
