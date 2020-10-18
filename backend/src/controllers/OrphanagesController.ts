import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Orphanages from '../models/Orphanages'
import orphanageView from '../views/orphanages_view'
import * as Yup from 'yup';

export default {
    async index(request: Request, response:Response){
        const orphanageRepository = getRepository(Orphanages);
        const orphanages = await orphanageRepository.find({
            relations: ['images']
        });

        return response.json(orphanageView.renderMany(orphanages));
    },
    async show(request: Request, response:Response){
        const {id} = request.params
        const orphanageRepository = getRepository(Orphanages);
        const orphanage = await orphanageRepository.findOneOrFail(id, {
            relations: ['images']
        });        
        return response.json(orphanageView.render(orphanage));
    },

    async create(request:Request, response:Response){
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_weekends
        } = request.body;

        const orphanageRepository = getRepository(Orphanages);
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_weekends,
            images
        }

        const schema = Yup.object( {
            name: Yup.string().required('Nome obrigatório'),
            latitude: Yup.number().required('Latitudo obrigatória'),
            longitude: Yup.number().required('Longitude obrigatória'),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required('Instruções obrigatórias'),
            opening_hours: Yup.string().required('Horario de atendimento obrigatório'),
            open_weekends: Yup.boolean().required('Se abre fim de semana é obrigatório'),
            images: Yup.array(
            Yup.object().shape({
                path: Yup.string().required('Caminho da imagem obrigatório')
            }))
        });

        await schema.validate(data, {
            abortEarly: false
        })

        const orphanage = orphanageRepository.create(data);
    
        await orphanageRepository.save(orphanage);
    
        return response.status(201).json(orphanage);
    }
}