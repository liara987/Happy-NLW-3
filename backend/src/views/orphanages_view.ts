import Orphanages from '../models/Orphanages'
import imagesView from './images_view';

export default {
    render(orphanage: Orphanages){
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_weekends: orphanage.open_weekends,    
            images: imagesView.renderMany(orphanage.images),
        }
    },

    renderMany(orphanages: Orphanages[]){
        return orphanages.map(orphanage => this.render(orphanage));
    }
}