import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME = "LAMA_BANDAS";
  
    public async createBand(
      id: string,
      name: string,
      music_genre: string,
      responsible: string,
    ): Promise<void> {
      try {
        await this.getConnection()
          .insert({
            id,
            name,
            music_genre,
            responsible
          })
          .into(BandDatabase.TABLE_NAME);
      } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
}

//   public async getBandByName(name: string): Promise<Band> {
//     const result = await this.getConnection()
//       .select("*")
//       .from(UserDatabase.TABLE_NAME)
//       .where({ name });

//     return Band.toUserBand(result[0]);
//   }

