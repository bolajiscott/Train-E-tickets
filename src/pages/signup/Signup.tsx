import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonText, IonList, IonItemDivider, IonItem, IonInput, IonLabel, IonButton, IonRow, IonCol, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import "./Signup.css";
import SignUpAuth from '../../components/SignUpAuth';

export const Signup: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const signup = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (!name) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        // if (username && password) {
        //     await setIsLoggedIn(true);
        //     await setUsernameAction(username);
        // history.push('/tabs/schedule', { direction: 'none' });
        // }
    };

    return (
        <IonPage id="signup">
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

                <form noValidate onSubmit={signup}>
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
                    </IonList>

                    {/* Sign In Button */}
                    <IonButton type="submit" color="primary" class="ion-text-capitalize" expand="block">Sign In</IonButton>
                    <IonText>
                        <p className="no-account">Already have an Account?
                            <span className="signup"> Sign Up</span>
                        </p>
                    </IonText>
                </form>

                {/* External Auth */}
                <IonRow class="ion-justify-content-center">
                    <IonCol size="4"><hr /></IonCol>
                    <IonCol size="auto">or</IonCol>
                    <IonCol size="4"><hr /></IonCol>
                </IonRow>
                <SignUpAuth></SignUpAuth>
            </IonContent>
        </IonPage >
    );
};
