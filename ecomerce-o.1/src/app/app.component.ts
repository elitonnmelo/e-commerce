import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';

import {Storage} from "@ionic/storage";
import { UserProvider } from '../providers/user/user';
import { FirebaseStorageProvider } from '../providers/firebase-storage/firebase-storage';
import { User } from '../models/user';

import 'rxjs/add/operator/take';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('fileUserPhoto') fileUserPhoto;
  
  item = new User();
  foto = 'assets/imgs/user.png';
  isUploaded = false;


  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;
  

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    public userProvider: UserProvider,
    public menuController: MenuController,
    public firebaseStorageProvider: FirebaseStorageProvider

    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      //{ title: 'List', component: ListPage },
      { title: 'Carrinho', component: 'CarrinhoPage' },
      { title: 'Meus Pedidos', component: 'MeusPage' },
      { title: 'Favoritos', component: 'FavoritosPage' },
      { title: 'Cadastrar', component: 'CadastrarPage' },
      { title: 'Perfil', component: 'PerfilPage' }
    ];

  }
  //novo
  
    
  //ate aqui
  initializeApp() {
    /*console.log("0");
    this.userProvider.lerLocal().then(_userId => {
      console.log("1");
      this.userProvider.byId(_userId).subscribe(_user => {
        this.item = new User();
        this.item.id = _userId;
        this.item.nome = _user['nome'];
        console.log("2");
        this.item.email = _user['email'];


        const path = '/user/' + this.item.id + '/foto.jpg';
        this.firebaseStorageProvider.downloadImageStorage(path).then(_data => {
          this.foto = _data;

        });

      })
    }) */
    this.platform.ready().then(() => {
      console.log("5");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.userProvider.lerLocal().then(_usuario => {
        console.log("4");

        this.userProvider.byIdFS(_usuario).subscribe(_user => {
          console.log("1", _user);
          this.item = new User(_user);
          console.log("2", this.item);
          
          if(this.item.id !== '') {
            const path = '/user/' + this.item.id + '/foto.jpg';
            this.firebaseStorageProvider.downloadImageStorage(path).then(_data => {
              this.foto = _data;
            }).catch(error => {
              console.log(error)
            });
          }
        });

        
        if(_usuario && _usuario.length > 0){
          this.rootPage = 'HomePage';

          console.log("0");
         /* this.userProvider.lerLocal().then(_userId => {
            console.log("1");
            this.userProvider.byId(_userId).subscribe(_user => {
              this.item = new User();
              this.item.id = _userId;
              this.item.nome = _user['nome'];
              console.log("2");
              this.item.email = _user['email'];


              const path = '/user/' + this.item.id + '/foto.jpg';
              this.firebaseStorageProvider.downloadImageStorage(path).then(_data => {
                this.foto = _data;

              });

            })
          }) */


        } else{
          this.rootPage = 'LoginPage';
        }
      })
    });
  }

  processWebImage($event){
      this.firebaseStorageProvider.processWebImage($event, (imageBase64, w, h) => {
        this.foto = imageBase64;
        this.isUploaded = true;
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
