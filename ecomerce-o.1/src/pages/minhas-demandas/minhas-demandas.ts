import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user';
import { DemandasProvider } from '../../providers/demandas/demandas';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the MinhasDemandasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minhas-demandas',
  templateUrl: 'minhas-demandas.html',
})
export class MinhasDemandasPage {
  itemArr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public demandasProvider: DemandasProvider,
    public userProvider: UserProvider,
    
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
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasDemandasPage');
  }
  verDetalhes(){
    const modal = this.modalCtrl.create('DetalheDemandasPage');
    modal.present();
  }
}
