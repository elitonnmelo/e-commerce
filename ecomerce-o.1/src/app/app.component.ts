import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import {Storage} from "@ionic/storage";
import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'BemVindoPage';

  pages: Array<{title: string, component: any}>;
  

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    public userProvider: UserProvider,
    public menuController: MenuController

    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: 'Carrinho', component: 'CarrinhoPage' },
      { title: 'Meus Pedidos', component: 'MeusPage' },
      { title: 'Favoritos', component: 'FavoritosPage' },
      { title: 'Cadastrar', component: 'CadastrarPage' },
      { title: 'Perfil', component: 'PerfilPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.userProvider.lerLocal().then(_usuario => {
        if(_usuario && _usuario.length > 0){
          this.rootPage = HomePage;
        } else{
          this.rootPage = 'BemVindoPage';
        }
      })
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  close(){
    this.menuController.toggle();
  }
}
