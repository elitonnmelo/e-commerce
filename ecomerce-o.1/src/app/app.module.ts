import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { UserProvider } from '../providers/user/user';
import { database } from 'firebase';
import { IonicStorageModule } from '@ionic/storage';
import { FirebaseStorageProvider } from '../providers/firebase-storage/firebase-storage';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EnderecosProvider } from '../providers/enderecos/enderecos';
import { CartaoProvider } from '../providers/cartao/cartao';
import { CartProvider } from '../providers/cart/cart';
import { DemandasProvider } from '../providers/demandas/demandas';



const firebaseConfig = {
  apiKey: "AIzaSyBs8uKKVyRaftm7_BXREMG-wOgqm2j3rmY",
  authDomain: "cidts-ecommerce.firebaseapp.com",
  databaseURL: "https://cidts-ecommerce-default-rtdb.firebaseio.com",
  projectId: "cidts-ecommerce",
  storageBucket: "cidts-ecommerce.appspot.com",
  messagingSenderId: "338849693638",
  appId: "1:338849693638:web:107d032daa58a260117cc7",
  measurementId: "G-7VW0F6PMGM"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseStorageProvider,
    ProdutosProvider,
    UserProvider,
    EnderecosProvider,
    CartaoProvider,
    CartProvider,
    DemandasProvider
  ]
})
export class AppModule {}
