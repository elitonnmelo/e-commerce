import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto';
import { AngularFirestore } from 'angularfire2/firestore';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {
  ENTIDADE = '/produtos';

  constructor(public http: HttpClient,
    public afs: AngularFirestore,
    private storage: Storage,

    ) {
    console.log('Hello ProdutosProvider Provider');
  }

  inserir(produto: Produto){

    const obj = JSON.parse( JSON.stringify(produto));

    const id = this.afs.createId();
    console.log('inserir bem sucedido')
    return this.afs.doc(this.ENTIDADE + '/' + id).set(obj);
  }

  byId(id: string){
    console.log('by id deu certo')
    return this.afs.doc('/produtos/' + id).valueChanges();
  }
}
