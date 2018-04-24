export class Trabajo {
    constructor(public id: string, public nombre: string, public descripcion: string, public img: string, public ciudad: string, public skills: Array<string>, public salario: number | undefined){
        
    }
}
