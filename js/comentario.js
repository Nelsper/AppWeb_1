class Comentario{

    constructor(user, coment){
        this.coment = coment;
        this.user = user;
        this.date = new Date();;
    }
    
    usuario(){
        this.user = 'Pedro'
        return this.user
    }
    fecha(){
        return this.date.get
    }
    nuevoComent(){
        this.coment = `Hola! soy ${this.user} y esto es un comentario del dia ${this.date}`;
        return this.coment;
    }


}
