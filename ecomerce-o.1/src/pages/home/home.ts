import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {Slides} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {
    this.slides.slidesPerView= 'auto';
    this.slides.zoom = false;
    this.slides.spaceBetween = 0 ;

  }

  abrirCarrinho(){
    this.navCtrl.setRoot('CarrinhoPage');
  }

  abrirDetalhes(){
    this.navCtrl.push('DetalhesProdutoPage');
  }

  abrirFiltro(){
    this.navCtrl.push('FiltroPage');
  }

  categorias = [
      {
        id:1,
        nome:"Leite e Derivados",
        img:"../../assets/imgs/cat1.png"
      }, {
        id:2,
        nome:"Carnes",
        img:"../../assets/imgs/cat2.png"
      }, {
        id:3,
        nome:"Serviços",
        img:"../../assets/imgs/cat3.png"
      }, {
        id:4,
        nome:"Produtos animais",
        img:"../../assets/imgs/cat4.png"
      }, {
        id:5,
        nome:"Produtos Agricolas",
        img:"../../assets/imgs/cat5.png"
      },
    ]

}
