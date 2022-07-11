// export class Band{
//     static toUserBand(arg0: any): Band | PromiseLike<Band> {
//         throw new Error("Method not implemented.");
//     }
//     constructor(
//     private id: string,
//     private name: string,
//     private music_genre: string,
//     private responsible: string,

//     ){}

//     getId(){
//         return this.id;
//     }

//     getName(){
//         return this.name
//     }

//     getMusicGenre(){
//         return this.music_genre;
//     }

//     getResponsible(){
//         return this.responsible
//     }

//     setId(id: string){
//         this.id = id;
//     }

//     setName(name: string){
//         this.name = name;
//     }

// }
export interface BandInputDTO{
    id:string;
    name: string;
    music_genre: string;
    responsible: string;
}

// static toBandModel(Band: any): Band {
//     return new Band(band.id, band.name, band.music_genre, band.responsible);
//   }

export type Band = {
    id: string,
    name: string,
    music_genre: string,
    responsible: string
}

export interface GetBandInputDTO {
    id: string,
    name: string,
   
}