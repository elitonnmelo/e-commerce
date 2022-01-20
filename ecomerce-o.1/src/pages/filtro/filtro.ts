import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filtro',
  templateUrl: 'filtro.html',
})
export class FiltroPage {

  Value=''


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltroPage');
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
