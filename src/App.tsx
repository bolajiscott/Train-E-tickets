import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonSplitPane, IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Menu from './components/Menu';
import Splash from './pages/splash/Splash';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import Booking from './pages/booking/Booking';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <Menu /> */}
      <IonRouterOutlet id="main">
        {/* <Route path="/" component={Splash} /> */}
        <Route exact path="/booking/address" component={Booking} />
        <Route exact path="/booking/outbound" component={Booking} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
