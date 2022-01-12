import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Demanda } from '../../models/demanda';
import { Storage } from '@ionic/storage';
import { UserProvider } from '../user/user';

/*
  Generated class for the DemandasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DemandasProvider {
  item = new Demanda();
  itemID = undefined;
  ENTIDADE = '/demandas';
  ENTIDADE2 = '/cartoes';
  ENTIDADE3 = '/enderecos';
  id: string; 

  constructor(
    public http: HttpClient,
    public afd: AngularFireDatabase,
    public userProvider: UserProvider,
    private storage: Storage,
    public afs: AngularFirestore
    
    ) {
    console.log('Hello DemandasProvider Provider');
  }
  
  listarFS() {
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Demanda();   
        this.item.id = _userId;
        console.log(this.item.id);
      })
    })
    let uid = this.item.id;
    return this.afs.collection('/usuarios/'+ uid + this.ENTIDADE)
    .snapshotChanges()
    .map(item => item.map( changes => ({key: changes.payload.doc.id, value: changes.payload.doc.data() })));
  }
  listarTodosFS(){
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Demanda();   
        this.item.id = _userId;
        console.log(this.item.id);
      })
    })
    let uid = this.item.id;
    return this.afs.collection('/usuarios/'+ uid + this.ENTIDADE)
    .snapshotChanges()
    .map(item => item.map( changes => ({key: changes.payload.doc.id, value: changes.payload.doc.data() })));
    
  }

  //FUNÇÕEES PARA TESTE
  inserirFS(item) { 
    /*this.storage.get('id').then((resolve) => {
      this.id = resolve;
      console.log(resolve)
    }) item.id = this.afs.createId();*/
    item.id = this.afs.createId();
    let item2 = JSON.parse(JSON.stringify(item))
    this.userProvider.lerLocal().then(_userId => {
      this.userProvider.byIdFS(_userId).subscribe(_user => {
        this.item = new Demanda();   
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
        this.item = new Demanda();    
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
        this.item = new Demanda();
        this.item.id = _userId;
        console.log(this.item.id);

      })
    })
    let uid = this.item.id;
    return this.afs.doc('/usuarios/'+ uid + this.ENTIDADE + '/' + id).delete();
  }


}
