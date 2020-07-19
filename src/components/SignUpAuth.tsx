import React from 'react';
import './ExploreContainer.css';
import { IonButton } from '@ionic/react';

const SignUpAuth = () => {
    return (
        <div>
            <IonButton routerLink="/" color="light" class="ion-text-capitalize" expand="block">Sign up with Google</IonButton>
            <IonButton routerLink="/" color="light" expand="block" class="ion-text-capitalize">Sign up with Facebook</IonButton>
        </div>
    );
};

export default SignUpAuth;
