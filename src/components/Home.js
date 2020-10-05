import React from 'react'
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Cranes from '../images/cranes.jpg'
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Style } from '@material-ui/icons';
import Hom from '../css/Home.css'

const useStyle = makeStyles((theme) => ({
    root:{
        minHeight:"100vh",
        height:"auto",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    },
    div1:{
        marginLeft:27,
        paddingTop:190
    },
    handCar:{
        position:"relative",
        color:"#fff",
        fontSize:18,
        textTransform:"uppercase",
        fontFamily:"Teko, sans-serif",
        fontWeight:400,
        letterSpacing: "0,03em",
        display:"block",
        '&::before':{
            position:"absolute",
            content:"",
            width:25,
            height:2,
            left:-30,
            top:"50%",
            bacground:"rgb(255, 95, 19)"
        }
    },
    construction:{
        fontSize:100,
        fontWeight:900,
        fontFamily:"Barlow, sans-serif",
        lineHeight:0.3,
        marginLeft:50,
        marginTop:-100,
        textTransform:"uppercase",
        color:"rgb(255, 95, 19)"
    },
    media:{
        color:"yellow"
    }
}))



function Home() {
    const classes = useStyle()
    return (
        <div style={{backgroundImage:`url(${Cranes})`}} className={classes.root} id="Home">
            <Container className={classes.div1}>
                <div>
                    <span className={classes.handCar}>
                        "Hand car wash and detailing service"
                    </span>
                </div>
                <h1 className="advanced">ADVANCED</h1>
                <div className={classes.construction}>
                    <h2 className="title-1">Construction</h2>
                </div>
            </Container>
        </div>
    )
}

export default Home
