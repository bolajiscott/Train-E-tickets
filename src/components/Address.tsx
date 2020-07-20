import React from 'react';
import './Address.css'
import { IonSearchbar, IonItem, IonIcon, IonLabel, IonList, IonListHeader, IonCard, IonAvatar } from '@ionic/react';
import { pin, location, caretDown, ellipse } from 'ionicons/icons';
import stations from "../data/Stations.json"

const Address = () => {
    var stationsArr: any = [];
    // loops trough json data for stations and pushes to stationsArr
    Object.keys(stations).forEach(function (key: any) {
        stationsArr.push(stations[key]);
    });
    return (
        <div id="address">
            <IonItem lines="none" button className="show-map">
                <IonIcon icon={pin} slot="start" className="detail-icon"></IonIcon>
                <IonLabel>Show on map</IonLabel>
            </IonItem>

            <IonCard className="address-card">
                <IonSearchbar searchIcon={ellipse} class="address-search" placeholder="Board Station" inputmode="text" type="text" onIonChange={ev => console.log(ev)} debounce={250} show-cancel-button="never"></IonSearchbar>
                <hr />
                <IonSearchbar searchIcon={caretDown} class="address-search" placeholder="Drop Station" inputmode="text" type="text" onIonChange={ev => console.log(ev)} debounce={250} show-cancel-button="never"></IonSearchbar>
            </IonCard>

            <IonList>
                <IonListHeader>
                    <IonLabel className="station-label">Train Stations</IonLabel>
                </IonListHeader>
                {
                    stationsArr.map((station: any) => {
                        return (
                            <IonItem button>
                                <IonAvatar slot="start" className="detail-icon avatar">
                                    <IonIcon icon={location} className="detail-icon"></IonIcon>
                                </IonAvatar>
                                <IonLabel>
                                    <p className="station">{station.name}</p>
                                    <span className="location">{station.location}</span>
                                </IonLabel>
                            </IonItem>
                        )
                    })
                }
            </IonList>
        </div>
    )
};

export default Address;