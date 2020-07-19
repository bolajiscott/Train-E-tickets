import React from 'react';
import './ExploreContainer.css';
import { IonButton } from '@ionic/react';

const SigninBtn = () => {
    return (
        <div>
            <IonButton routerLink="/" color="light" class="ion-text-capitalize" expand="block">Sign in with Google</IonButton>
            <IonButton routerLink="/" color="light" expand="block" class="ion-text-capitalize">Sign in with Facebook</IonButton>
        </div>
    );
};

export default SigninBtn;