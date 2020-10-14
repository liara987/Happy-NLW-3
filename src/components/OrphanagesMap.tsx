import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import mapMarker from '../images/Local.svg';
import '../styles/ophanages-map.css';
import SimpleMap from './SimpleMap'

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>SP</span>
                </footer>
            </aside>                                    
            <SimpleMap/>

            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#FFF"/>
            </Link>            
        </div>
    )
}

export default OrphanagesMap;