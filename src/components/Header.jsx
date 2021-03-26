import React, {useState, useEffect} from "react";
import { Toolbar, AppBar, Typography, makeStyles, Button } from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(
    () => ({
        header: {
            backgroundColor: "#400CCC",
        },
        logo: {
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            color: "#FFFEFE",
            textAlign: "left",
          },
        menuButton: {
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px",
         },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
          },
    })
 );

 const headersData = [
     {
         titulo: "Asociado?",
         href: "/asociado",
     },
     {
        titulo: "Registrarse",
        href: "/registrarse",
     },
     {
        titulo: "Mi Cuenta",
        href: "/mi_cuenta",
     },
 ];

function Header(){
    const { header, logo, menuButton, toolbar } = useStyles();
    const [state, setState] = useState({
        mobileView: false
    })
    const { mobileView } = state;

    // useEffect Hook
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                    ? setState((prevState) => ({ ...prevState, mobileView: true}))
                    : setState((prevState) => ({ ...prevState, mobileView: false}));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
            return <Toolbar className={toolbar}>
                    {asepyLogo}
                    <div>{getMenuButtons()}</div>
                  </Toolbar>
        }
    
    const asepyLogo = (
        <Typography variant="h5" component="h1" className={logo}>ASEPY_Logo</Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ titulo, href }) => {
                return (
                    <Button {...{ key: titulo,
                                  color: "inherit",
                                  to: href,
                                  component: RouterLink,
                                  className: menuButton
                                  }}>
                    {titulo}
                    </Button>
                );
        });
    };

 return(
     <header>
         <AppBar className={header}>{displayDesktop()}</AppBar>
     </header>
 );
}

export default Header;