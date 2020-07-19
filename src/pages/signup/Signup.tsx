import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonText, IonList, IonItemDivider, IonItem, IonInput, IonLabel, IonButton, IonRow, IonCol, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import "./Signup.css";

import SignupBtn from '../../components/SignupBtn';

export const Signup: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);

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
            setPasswordError(false);
        }
        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }

    return (
        <IonPage id="login">
            {/* <IonHeader no-border>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader> */}
            <IonContent fullscreen class="ion-padding">
                <IonText>
                    <h1 className="welcome-text">Create <br />Account</h1>
                </IonText>

                <form noValidate onSubmit={login}>

                    <IonList>
                        {/* Name */}
                        <IonItem>
                            <IonLabel position="floating">Name</IonLabel>
                            <IonInput name="name" type="text" value={name} spellCheck={false} autocapitalize="off" onIonChange={e => setName(e.detail.value!)} required></IonInput>
                        </IonItem>
                        {formSubmitted && nameError && <IonText color="danger">
                            <p className="ion-padding-start">
                                Name is required
                                </p>
                        </IonText>}


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

                        {/* Email Address */}
                        <IonItem>
                            <IonLabel position="floating">Email Address</IonLabel>
                            <IonInput name="email" type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required>
                            </IonInput>
                        </IonItem>
                        {formSubmitted && emailError && <IonText color="danger">
                            <p className="ion-padding-start">
                                Email Address is required
                                </p>
                        </IonText>}

                        {/* Password */}
                        <IonItem>
                            <IonLabel position="floating">password</IonLabel>
                            <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required>
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
                    <IonText>
                        <p className="no-account">Don’t have an Account?
                            <span className="signup"> sign Up </span>
                        </p>
                    </IonText>
                </form>

                <IonRow class="ion-justify-content-center">
                    <IonCol size="4"><hr /></IonCol>
                    <IonCol size="auto">or</IonCol>
                    <IonCol size="4"><hr /></IonCol>
                </IonRow>
                <SignupBtn></SignupBtn>
            </IonContent>
        </IonPage >
    );
};
