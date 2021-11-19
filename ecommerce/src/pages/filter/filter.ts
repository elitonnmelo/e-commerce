import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
    
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }
  fechar() {
    //this.navCtrl.push('HomePage');
    this.viewCtrl.dismiss();
  }
  /*share(slidingItem: ItemSliding) {
    slidingItem.close();
  }*/

}
