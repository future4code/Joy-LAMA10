import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO } from "../model/Band";
import { Request, Response } from "express";

const bandBusiness = new BandBusiness()

export class BandController{
    public createBand=async(req: Request, 
        res: Response)=> {
        try {

            const{
                name,
                music_genre,
                responsible
            } = req.body

            const input:BandInputDTO = {
                name,
                music_genre,
                responsible,
                id: ""
            }


            await bandBusiness.createBand(input)

            res.send('Banda criada com sucesso!')

        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
        }
    }
}