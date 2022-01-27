import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user';
import { DemandasProvider } from '../../providers/demandas/demandas';
import { UserProvider } from '../../providers/user/user';
//import { EndereçosPage } from '../endereços/endereços';

/**
 * Generated class for the DetalheDemandasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-demandas',
  templateUrl: 'detalhe-demandas.html',
})
export class DetalheDemandasPage {
  item = new User();
  itemArr = [];
  itemArrEndereco = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public userProvider: UserProvider,
    //public enderecosPage: EndereçosPage,
    public demandasProvider: DemandasProvider
    
    ) {
      this.userProvider.lerLocal().then(_userId => {
        this.userProvider.byIdFS(_userId).take(1).subscribe(_data => {
          const _user = new User(_data);
          console.log('user', _user);

          this.demandasProvider.listarFS(_user.id).subscribe(_data => {
            console.log(_data);
            this.itemArr = _data;
          })
        })
      })
      
      this.demandasProvider.listarFSE().subscribe(_data => {
        console.log(_data);
        this.itemArrEndereco = _data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheDemandasPage');
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new User();
        this.item.id = _userId;
        this.item.nome = _user['nome'];
        this.item.email = _user['email'];

      })
    }) 
    //console.log(this.enderecosPage.valor);
    
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

}
