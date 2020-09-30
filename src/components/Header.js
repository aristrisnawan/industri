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
  
function Header(props) {
    const classes = useStyles()
    return (
        <div>
            <React.Fragment>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.App}>
                        <Toolbar>
                        <Grid container spacing={4} className={classes.grd}>
                            <Grid item xs={3}>
                            <Typography variant="h2" className={classes.title}>
                            <Button color="inherit" startIcon={<LocationCityIcon />}>
                                Constraction
                            </Button>
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Projects</Button>
                            <Button color="inherit">Services</Button>
                            <Button color="inherit">Blog</Button>
                            <Button color="inherit">Pages</Button>
                            <Button color="inherit">Contact</Button>
                            </Grid>
                            <Grid item xs={3}>
                            <Button
                                variant="contained"
                                className={classes.cstm}
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
