import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from './../Component/Nav/IMAGE/Logo.png';

export default function Whatspp() {
    return (
        <div className="App">
            <FloatingWhatsApp
                phoneNumber="9028079000"
                accountName="Sri Balajee Construction"
                avatar={logo}
                chatMessage="Hello"
                allowEsc
                allowClickAway
                notification
                notificationSound
            />
        </div>
    );
}