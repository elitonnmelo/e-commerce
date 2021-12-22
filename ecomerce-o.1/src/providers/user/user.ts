import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {Storage} from "@ionic/storage";
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class UserProvider {

  constructor(
    public http: HttpClient,
    public afd: AngularFireDatabase,
    public storage: Storage,
    public afa: AngularFireAuth,
    public afs: AngularFirestore


    ) {
    console.log('Hello UserProvider Provider');
  }

  login(email, senha){
    return this.afa.auth.signInWithEmailAndPassword(email, senha);
  }

  cadastro(usuario){
    this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(_usuarioAuth => {
        usuario.id = _usuarioAuth.uid;
        delete usuario.senha; 

        this.salvarUsuario(usuario);
      }).catch (error =>{

      });

  }
  byId(id: string) {
    return this.afd.object('/usuarios/' + id).valueChanges();
  }

  salvarLocal(id) {
    return this.storage.set('usuario', id);
  }
  lerLocal() {
    return this.storage.get('usuario');
  }

  removeLocal() {
    return this.storage.remove('usuario');
  }

  recuperarSenha(email){
    return this.afa.auth.sendPasswordResetEmail(email);

  
  }

  salvarUsuario(usuario){
    this.afd.object('/usuarios/' + usuario.id).update(usuario);
  }

}
