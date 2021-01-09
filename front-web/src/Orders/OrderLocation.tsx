import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async'; /* (enquanto estiver pesquisando o usuário pode continuar pesquisando o mapa) */
import { fetchLocalMapBox } from '../api';
import { OrderLocationData } from './types';

const initialPosition = {
    lat: 51.505, 
    lng: -0.09
}

type Place = {
    label?: string; /* Interrogação pra dizer que a propriedade é não obrigatória */
    value?: string;
    position: {
        lat: number;
        lng: number;
    };
}

type Props = {
    onChangeLocation: (location: OrderLocationData) => void;
}

function OrderLocation({ onChangeLocation }: Props) {
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            }
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
          latitude: place.position.lat,
          longitude: place.position.lng,
          address: place.label!                        /* a exclamação informa ao typescrypt que o endereço está todo preenchido */
        });
      };

    return(
        <div className="order-location-container">
            <div className="order-location-content"> 
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">
                    <AsyncSelect
                        placeholder="Digite um endereço para entregar o pedido"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}  /* casting do value as Place, palava as */
                        />
                </div>
                <MapContainer 
                    center={address.position}     /* obtendo os dados do address que estará sendo alterado acima */
                    zoom={13} 
                    key={address.position.lat}    /* forçar a renderização do mapa, mudando 1 das keys conforme minha variável address */
                    scrollWheelZoom>   
                    
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                    <Popup>
                        {address.label}
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default OrderLocation;

/* instanciei o products, fiz fetch através do axios pra obter o json do Product[], alimentei no useEffect com setProducts, e repassei o products para o renderizador do ProductsList > ProductsCard */

/* toda prop é true por padrão quando booleana */