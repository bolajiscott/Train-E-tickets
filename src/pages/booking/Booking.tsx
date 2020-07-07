import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import BaseMap from '../../components/BaseMap';


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
                    <BaseMap></BaseMap>
                </IonContent>
            </IonPage >
        );
    }
};

export default Booking;
