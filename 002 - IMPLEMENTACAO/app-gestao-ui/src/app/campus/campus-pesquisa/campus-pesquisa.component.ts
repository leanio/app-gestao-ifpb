import { Component, OnInit } from '@angular/core';
import { CampusService } from '../campus.service';

@Component({
  selector: 'app-campus-pesquisa',
  templateUrl: './campus-pesquisa.component.html',
  styleUrls: ['./campus-pesquisa.component.css']
})
export class CampusPesquisaComponent implements OnInit {

  listaCampus: any[];

  constructor(
    private campusService: CampusService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.campusService.listar().then(dados => {
      this.listaCampus = dados;
    })
  }

}
