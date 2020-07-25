import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonRouterOutlet } from '@ionic/react';
import BaseMap from '../../components/BaseMap';
import Pullbar from '../../components/Pullbar';
import './Booking.css'
import Address from '../../components/Address';
import Outbound from '../../components/Outbound';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

function Booking() {
    let { path } = useRouteMatch();
    console.log(path);

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
                    <Switch>
                        <Route exact path="/booking/address" component={Address} />
                        <Route exact path="/booking/outbound" component={Outbound} />
                    </Switch>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Booking;
