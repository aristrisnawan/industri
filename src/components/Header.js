import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    App:{
        backgroundColor:"#343a40"
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      grd:{
          alignItems:"center"
      },
      cstm:{
          backgroundColor:theme.palette.warning.dark,
          color:"#fff"
      },
      fab:{
          backgroundColor:theme.palette.warning.dark
      },
      lnk:{
        color:"#fff",
        textDecoration:"none"
      }
  }));
  

  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  var number = "{{082117295505}}"
  var message = "{{Saya ingin memesan sebuah project}}"

  function getLinkWhatsApp(numb,mess) {
    numb = number
    mess = message
    return console.log('https://api.whatsapp.com/send?phone=' + numb + '&text=%20' + encodeURIComponent(mess))
  }
  
function Header(props) {
    const classes = useStyles()
    return (
        <div>
            <React.Fragment>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.App}>
                        <Toolbar>
                        <Grid container spacing={4} className={classes.grd}>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                            <Typography variant="h2" className={classes.title}>
                            <Button color="inherit" startIcon={<LocationCityIcon />}>
                                Constraction
                            </Button>
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                             <a href="#Home" className={classes.lnk}> 
                            <Button color="inherit">Home</Button>
                            </a>
                            <a href="#About" className={classes.lnk}>
                            <Button color="inherit">About</Button>
                            </a>
                            <a href="#" className={classes.lnk}>
                            <Button color="inherit">Projects</Button>
                            </a>
                            <a href="#Services" className={classes.lnk}>
                            <Button color="inherit">Services</Button>
                            </a>
                            <a href="#" className={classes.lnk}>
                            <Button color="inherit">Blog</Button>
                            </a >
                            <a href="#" className={classes.lnk}>
                            <Button color="inherit">Pages</Button>
                            </a>
                            <a href="#Contact" className={classes.lnk}>
                            <Button color="inherit">Contact</Button>
                            </a>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                            <Button
                                variant="contained"
                                className={classes.cstm}
                                href="https://api.whatsapp.com/send?phone=+{{082117295505}}&text=%207B%7BSaya%20ingin%20memesan%20sebuah%20project%7D%7D"
                            >
                                Contact Now
                            </Button>
                            </Grid>
                        </Grid>   
                        </Toolbar>
                    </AppBar>
                    <Toolbar id="back-to-top-anchor" />
                    
                    <ScrollTop {...props}>
                        <Fab className={classes.fab} size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>
            </React.Fragment>
        </div>
    )
}

export default Header
