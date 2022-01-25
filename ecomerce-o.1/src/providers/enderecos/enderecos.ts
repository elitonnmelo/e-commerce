import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';
import { Enderecos } from '../../models/enderecos';
import { UserProvider } from '../user/user';

/*
  Generated class for the EnderecosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnderecosProvider {
  item = new Enderecos();
  itemID = undefined;
  ENTIDADE = '/enderecos';
  id: string; 

  constructor(
    public http: HttpClient,
    public afd: AngularFireDatabase,
    public userProvider: UserProvider,
    private storage: Storage,
    public afs: AngularFirestore

    ) {
    console.log('Hello EnderecosProvider Provider');
    console.log('ionViewDidLoad Pageteste');
  
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Enderecos();
        this.item.id = _userId;
        //console.log(this.item.id);

      })
    }) 
  

  }
  
  listarFS(userID) {
    return this.afs.collection('/usuarios/'+ userID + this.ENTIDADE)
      .snapshotChanges()
      .map(item => item.map( changes => ({key: changes.payload.doc.id, value: changes.payload.doc.data() })));
  }

  inserirFS(item) { 
    /*this.storage.get('id').then((resolve) => {
      this.id = resolve;
      console.log(resolve)
    }) item.id = this.afs.createId();*/
    item.id = this.afs.createId();
    let item2 = JSON.parse(JSON.stringify(item))
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Enderecos();   
        this.item.id = _userId;
        console.log(this.item.id);
      })
    })
    let uid = this.item.id;
    console.log(uid);
    return this.afs.doc('/usuarios/'+ uid + this.ENTIDADE + '/' + item2.id).set(item2);
  }

  atualizarFS(id, item) {
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Enderecos();    
        this.item.id = _userId;
        console.log(this.item.id);
      })
    })
    let uid = this.item.id;
    return this.afs.doc('/usuarios/'+ uid + this.ENTIDADE + '/' + id).update(item);
  }

  removerFS(id) {
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Enderecos();
        this.item.id = _userId;
        console.log(this.item.id);

      })
    })
    let uid = this.item.id;
    return this.afs.doc('/usuarios/'+ uid + this.ENTIDADE + '/' + id).delete();
  }

}
