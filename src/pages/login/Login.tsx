import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonText, IonList, IonItemDivider, IonItem, IonInput, IonLabel, IonButton, IonRow, IonCol, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import "./Login.css";

export const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!username) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
        if (!password) {
            setPasswordError(true);
        } else {
            setUsernameError(false);
        }

        // if (username && password) {
        //     await setIsLoggedIn(true);
        //     await setUsernameAction(username);
        // history.push('/tabs/schedule', { direction: 'none' });
        // }
    };

    return (
        <IonPage id="login">
            <IonHeader no-border>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen class="ion-padding">
                <IonText>
                    <h1 className="welcome-text">Welcome Back</h1>
                </IonText>

                <form noValidate onSubmit={login}>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">Email Address</IonLabel>
                            <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)} required></IonInput>
                        </IonItem>
                        {formSubmitted && usernameError && <IonText color="danger">
                            <p className="ion-padding-start">
                                Username is required
                                </p>
                        </IonText>}

                        <IonItem>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}>
                            </IonInput>
                        </IonItem>

                        {formSubmitted && passwordError && <IonText color="danger">
                            <p className="ion-padding-start">
                                Password is required
                                </p>
                        </IonText>}

                        <div className="forgot-password">Forgot password</div>
                    </IonList>

                    <IonButton type="submit" color="primary" class="ion-text-capitalize" expand="block">Sign In</IonButton>
                    <IonText className="no-account">
                        <p>Don’t have an Account?
                            <span className="signup"> sign Up </span>
                        </p>
                    </IonText>
                </form>

                <IonRow class="ion-justify-content-center">
                    <IonCol size="4"><hr /></IonCol>
                    <IonCol size="auto">or</IonCol>
                    <IonCol size="4"><hr /></IonCol>
                </IonRow>
                <IonButton routerLink="/" color="light" class="ion-text-capitalize" expand="block">Sign in with Google</IonButton>
                <IonButton routerLink="/" color="light" expand="block" class="ion-text-capitalize">Sign in with Facebook</IonButton>
            </IonContent>   
        </IonPage >
    );
};
