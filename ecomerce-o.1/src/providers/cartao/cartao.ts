import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';
import { UserProvider } from '../user/user';
import { Cartao } from '../../models/cartao';




@Injectable()
export class CartaoProvider {
  ENTIDADE = '/cartoes';
  item = new Cartao();
  itemID = undefined;
  id: string; 
  //id: string; 

  constructor(
    public http: HttpClient,
    public afd: AngularFireDatabase,
    public userProvider: UserProvider,
    private storage: Storage,
    public afs: AngularFirestore

    ) {
    console.log('Hello CartaoProvider Provider');
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Cartao();
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

  /*listarFS() {
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Cartao();   
        this.item.id = _userId;
        console.log(this.item.id);
      })
    })
    let uid = this.item.id;
    return this.afs.collection('/usuarios/'+ uid + this.ENTIDADE)
    .snapshotChanges()
    .map(item => item.map( changes => ({key: changes.payload.doc.id, value: changes.payload.doc.data() })));
  }*/

  inserirFS(item) { 
    item.id = this.afs.createId();
    let item2 = JSON.parse(JSON.stringify(item))
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Cartao();   
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
        this.item = new Cartao();    
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
        this.item = new Cartao();
        this.item.id = _userId;
        console.log(this.item.id);

      })
    })
    let uid = this.item.id;
    return this.afs.doc('/usuarios/'+ uid + this.ENTIDADE + '/' + id).delete();
  }

}
