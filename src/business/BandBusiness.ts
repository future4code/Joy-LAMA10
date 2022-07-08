import { UserDatabase } from "../data/UserDatabase";
import { BaseError, InvalidName } from "../error/BaseError";
import { BandInputDTO } from "../model/Band";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {

    public createBand=async(input: BandInputDTO)=> {
      try {
        const {name,music_genre,responsible } = input
        
        if (!name || !music_genre || !responsible ) {
    
          throw new BaseError(
            400,
            'Necessário preencher os campos "name", "music_genre" e "responsible"'
          );
        }
        // if (Band.name.length < 3) {
        //   throw new InvalidName();
        // }
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const userDatabase = new UserDatabase();
        userDatabase.createBand(
              id,
              name,
              music_genre,
              responsible
          );
    
} catch (error: any) {
    throw new Error(error.message);
  }
    }
}
