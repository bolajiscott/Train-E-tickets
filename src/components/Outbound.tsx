import React from "react";
import "./Outbound.css";
import stations from "../data/Stations.json";
import {
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonButton,
} from "@ionic/react";

const Outbound = () => {
  const outbounds = [
    {
      title: "standard",
      price: "N500",
      time: "9-30-10:30",
    },
    {
      title: "Exec",
      price: "N1500",
      time: "2-30-4:30",
    },
    {
      title: "VIP",
      price: "N3000",
      time: "7:00-8:30",
    },
  ];
  return (
    <div>
      <IonItem lines="none">
        <IonLabel>
          <h2 className="ion-font-weight-bold">Select Outbound</h2>
        </IonLabel>
      </IonItem>
      <div className="card-container">
        {outbounds.map((outbound) => {
          return (
            <IonCard button className="bound-card">
              <IonCardHeader>
                <IonCardTitle className="bound-title">
                  {outbound.title}
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <h1>{outbound.price}</h1>

                <div className="time-frame">
                  <h2>{outbound.time}</h2>
                </div>
              </IonCardContent>
            </IonCard>
          );
        })}
      </div>

      <IonButton
        color="primary"
        class="ion-text-capitalize"
        expand="block"
      >
        Book Ticket 
      </IonButton>
    </div>
  );
};

export default Outbound;
