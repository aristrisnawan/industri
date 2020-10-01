import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LocationCityIcon from '@material-ui/icons/LocationCity';

const useStyle = makeStyles((theme) => ({
    root:{
        backgroundColor:"#070b11",
        height:"60vh"
    },
    grd:{
        paddingTop:40,
        margin:theme.spacing(0,0,6,0)
    },
    btn:{
        color:"#fff",
        fontSize:35,
        marginBottom:29,
        fontWeight:500,
        fontFamily:"Teko, sans-serif",
        marginLeft:80
    },
    txt:{
        color:"#9fa6bd",
        fontFamily:"Barlow, sans-serif",
        marginLeft:80
    },
    item:{
        marginLeft:30
    }
}))
 
function Footer() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container className={classes.grd}>
                <Grid item xs={3} className={classes.item}>
                        <Button color="inherit" className={classes.btn} startIcon={<LocationCityIcon />}>
                            Constraction
                        </Button>
                        <Typography className={classes.txt}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing <br/>
                        elit sed do eiusmod tempor incididunt ut labore.
                        </Typography>
                    
                </Grid>
                <Grid item xs={3} className={classes.item}>
                    <Typography className={classes.btn}>
                        Quick Links
                    </Typography>
                    <Typography className={classes.txt}>
                        About<br/><br/>
                        Services<br/><br/>
                        Projects<br/><br/>
                        Contact us 
                    </Typography>
                </Grid>
                <Grid item xs={3} className={classes.item}>
                    <Typography className={classes.btn}>
                        Contact
                    </Typography>
                    <Typography className={classes.txt}>
                    198 West 21th Street, Suite 721 New<br/><br/>
                    York,NY 10010<br/><br/>
                    Phone: +95 (0) 163 956 789<br/><br/>
                    Cell: +95 (0) 123 456 789 
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
