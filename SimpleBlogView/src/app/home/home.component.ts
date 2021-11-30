import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bio = `William Henry Gates III, mais conhecido como Bill Gates
  é um magnata, empresário, diretor executivo, investidor
  filantropo e autor americano, que ficou conhecido por fundar
  junto com Paul Allen a Microsoft a maior e mais conhecida
  empresa de software do mundo em termos de valor de mercado.`;

  nome = 'Bill Gates';

  url = '../../assets/img/Home/bill-gates-2.jpg';
}
