export class User {
    id: string = '';
    nome: string = '';
    email: string = '';

    constructor()
    constructor(obj: any)
    constructor(obj?: any) {
        if(obj && obj.id){
            this.id = obj && obj.id || '';
        } else{
            this.id = obj && obj.$key || '';
        }

        this.nome = obj && obj.nome || '';
        this.email = obj && obj.email || '';
    }
}