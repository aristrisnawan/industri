import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Satu from '../images/1.jpg';
import Dua from '../images/2.jpg';
import Tiga from '../images/3.jpg';


const useStyle = makeStyles((theme) => ({
    root:{
        backgroundColor:"#fff",
        height:"50vh"
    },
    txt:{
        fontSize:70,
        fontWeight:700,
        lineHeight:1.2,
        textTransform:"uppercase",
        fontFamily:"Teko, sans-serif",
        color:"rgb(14, 19, 42)",
        paddingTop:50
    },
    div1:{
        marginLeft:theme.spacing(7)
    }
}))

const Gambar = [
    {
        image: Satu,
        title: "Worker",
        Deskription: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: Dua,
        title: "Worker",
        Deskription: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        image: Tiga,
        title: "Worker",
        Deskription: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },

]

function Services() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div className={classes.div1}>
            <Typography variant="h2" className={classes.txt}>
                Our Service
            </Typography>
            </div>
            <Card>
                        <CardActionArea >
                    <CardMedia>
                        
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Title
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            containt
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Services
