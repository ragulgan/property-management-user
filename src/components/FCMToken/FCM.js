import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";
import { setLocalStorage } from '../../utils/helper'


const firebaseConfig = {
    apiKey: "AIzaSyDY9d5J6DhkW4VZnFXetq0azfO5NDvuvSQ",
    authDomain: "property-management-landlord.firebaseapp.com",
    projectId: "property-management-landlord",
    storageBucket: "property-management-landlord.appspot.com",
    messagingSenderId: "792929745144",
    appId: "1:792929745144:web:ca6209856aa12a7a69a30d",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const RequestForToken = () => {
    return getToken(messaging, { vapidKey: 'BBSXOTavlcU5wqq02kX5knq7Pq0eHsS0AI4XxzDdVbJ10vtw20R67KmenaDoTRxsea3YrK5czRMbIXxpI0dcNAU' })
        .then((currentToken) => {
            if (currentToken) {
                setLocalStorage("FCM",currentToken)
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

initializeApp(firebaseConfig);