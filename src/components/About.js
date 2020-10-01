import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Boss from '../images/pengusaha.jfif'

const useStyle = makeStyles((theme) => ({
    root:{
        // height:"50vh",
        backgroundColor:"#fff"
    },
    typ:{
        fontSize:70,
        fontWeight:700,
        lineHeight:1.2,
        textTransform:"uppercase",
        fontFamily:"Teko, sans-serif",
        color:"rgb(14, 19, 42)",
        paddingTop:50,
        marginLeft:theme.spacing(3)
    },
    txt:{
        color:"#0b0b2b",
        fontSize:17,
        fontWeight:700,
        marginBottom:46
    },
    txt1:{
        fontFamily:"Barlow, sans-serif",
        fontSize:15,
        marginBottom:46
    },
    grd:{
        margin:theme.spacing(3,0,2,2)
    },
    btn:{
        backgroundColor:"#ff5f13",
        textTransform:"uppercase",
        fontFamily:"Teko, sans-serif",
        // height:14,
        color:"#fff"
    },
    gmbr:{
        width:"95%",
        height:"50vh"
    }
}))

function About() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div>
                <Typography variant="h2" className={classes.typ}>
                    WHO WE ARE
                </Typography>
                <Grid container spacing={5} className={classes.grd}>
                    <Grid item xs={6}>
                        <Typography className={classes.txt}>
                        Mollit anim laborum duis au dolor in voluptcate velit ess cillum <br/>
                        dolore eu lore dsu quality mollit anim laborumuis au dolor in <br/>
                        voluptate velit cillu.
                        </Typography>
                        <Typography className={classes.txt1}>
                        Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit <br/>
                        esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa <br/>
                        cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt<br/>
                        ut;o5tu layjobore mofllit anim.<br/>
                        </Typography>
                        <Button variant="contained" className={classes.btn}>
                            Reade More
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Boss} alt="owner" className={classes.gmbr}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default About
