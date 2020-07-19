import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import BaseMap from '../../components/BaseMap';
import Pullbar from '../../components/Pullbar';
import './Booking.css'

class Booking extends React.Component {
    render() {
        return (
            <IonPage id="login" >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Select Location</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <div className="map">
                        <BaseMap></BaseMap>
                    </div>
                    <div className="info mobile">
                        <Pullbar></Pullbar>
                    </div>
                </IonContent>
            </IonPage >
        );
    }
};

export default Booking;
