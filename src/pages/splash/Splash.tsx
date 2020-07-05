import React, { useState, useRef } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonSlides, IonSlide, IonIcon, useIonViewWillEnter, IonGrid, IonRow, IonCol } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

interface OwnProps extends RouteComponentProps { };

interface TutorialProps extends OwnProps { };

const Splash= () => {
    const [showSkip, setShowSkip] = useState(true);
    const slideRef = useRef<HTMLIonSlidesElement>(null);

    useIonViewWillEnter(() => {

    });

    const startApp = async () => {

    };

    const handleSlideChangeStart = () => {
        slideRef.current!.isEnd().then(isEnd => setShowSkip(!isEnd));
    };

    return (
        <IonPage id="tutorial-page">
            <IonHeader no-border>
                <IonToolbar>
                    <IonButtons slot="end">
                        {showSkip && <IonButton color='primary' onClick={startApp}>Skip</IonButton>}
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonSlides ref={slideRef} onIonSlideWillChange={handleSlideChangeStart} pager={true}>
                    <IonSlide>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <img src="assets/img/ica-slidebox-img-1.png" alt="" className="slide-image" />
                                    <h2 className="slide-title">
                                        Welcome to <br /> 
                                        <b>Train E-Tickets</b>
                                    </h2>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <p><b>Train E-tickets</b> is an online platform to purchase train tickets</p>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default Splash
