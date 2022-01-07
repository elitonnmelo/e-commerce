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


const firebaseConfig = {
  apiKey: "AIzaSyDmir3XOsL2YdFjsK80BXIM_1Aok3zRdqo",
  authDomain: "e-commerce-398eb.firebaseapp.com",
  projectId: "e-commerce-398eb",
  storageBucket: "e-commerce-398eb.appspot.com",
  messagingSenderId: "588203640801",
  appId: "1:588203640801:web:da0d7b891da56632f3b4a0",
  measurementId: "G-W1Q7MF6KN2",
  databaseURL: "https://e-commerce-398eb-default-rtdb.firebaseio.com/"
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
    CartaoProvider
  ]
})
export class AppModule {}
