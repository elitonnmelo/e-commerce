import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';




@Injectable()
export class CartaoProvider {
  ENTIDADE = '/cartoes';
  //id: string; 

  constructor(
    public http: HttpClient,
    public afd: AngularFireDatabase,
    private storage: Storage,
    public afs: AngularFirestore

    ) {
    console.log('Hello CartaoProvider Provider');
  }

  listarFS() {
    
    return this.afs.collection(this.ENTIDADE)
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
    return this.afs.doc(this.ENTIDADE + '/' + item2.id).set(item2);
  
  }

  atualizarFS(id, item) {
    return this.afs.doc(this.ENTIDADE + '/' + id).update(item);
  }

  removerFS(id) {
    return this.afs.doc(this.ENTIDADE + '/' + id).delete();
  }

}
