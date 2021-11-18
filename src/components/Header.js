import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';


import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';


function Header() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }


    return ( <
        Box sx = {
            { flexGrow: 1 } } >
        <
        AppBar position = "static" >
        <
        Toolbar > { /*https://stackoverflow.com/questions/63216730/can-you-use-material-ui-link-with-react-router-dom-link*/ } <
        Button variant = "contained"
        color = "primary"
        component = { RouterLink }
        to = "/" > { t('Home') } < /Button> <
        Button variant = "contained"
        color = "primary"
        component = { RouterLink }
        to = "/about" > { t('About') } < /Button> <
        Button variant = "contained"
        color = "primary"
        id = "fi"
        onClick = {
            () => changeLanguage('fi') } > FI < /Button> <
        Button variant = "contained"
        color = "primary"
        id = "en"
        onClick = {
            () => changeLanguage('en') } > En < /Button> <
        /Toolbar> <
        /AppBar> <
        /Box>
    )
}

export default Header