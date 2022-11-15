import React from 'react';

export const pageConfig = {
    "backgroundImage": "url('assets/img/home-bg.jpg')",
    "pageTitle": "Architecture Blog",
    "pageSubTitle": "A Blog for architecture"
};

export const PageContext = React.createContext(
    pageConfig // default value
  );