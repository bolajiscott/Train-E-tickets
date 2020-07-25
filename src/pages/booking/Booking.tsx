import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import BaseMap from '../../components/BaseMap';
import Pullbar from '../../components/Pullbar';
import './Booking.css'
import Address from '../../components/Address';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Outbound from '../../components/Outbound';

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
                        <Route exact path={path}>
                            <h3>Hello world</h3>
                        </Route>
                        <Route path={`${path}/address`}>
                            <Address></Address>
                        </Route>
                        <Route path={`${path}/outbound`}>
                            <Outbound></Outbound>
                        </Route>
                    </Switch>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Booking;
