import React from 'react';

export const pageConfig = {
    "backgroundImage": "url('assets/img/home-bg.jpg')",
    "pageTitle": "Architecture Blog",
    "pageSubTitle": "A Blog for architecture",
    "githubToken": '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',
    "firebaseConfi": {
        apiKey: "AIzaSyBczw0vICVnVZcfrdYXW1DJTaAvbdhGR0M",
        authDomain: "blog-hector.firebaseapp.com",
        projectId: "blog-hector",
        storageBucket: "blog-hector.appspot.com",
        messagingSenderId: "782647056381",
        appId: "1:782647056381:web:c4b836092a06d03fc0ab94",
        measurementId: "G-5LDTLQ3CPB"
        //databaseURL: "https://blog-hector-default-rtdb.firebaseio.com/"
    }
};

export const PageContext = React.createContext(
    pageConfig // default value
);