import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Gambar1 from '../images/1.jpg'
import Gambar2 from '../images/2.jpg'
import Gambar3 from '../images/3.jpg'
import Grid from '@material-ui/core/Grid';


const useStyle = makeStyles((theme) => ({
    root:{
        backgroundColor:"#fff",
        height:"90vh"
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
    },
    gmbr:{
        height:280,
        width:"100%"
    },
    grd:{
        width:"100%",
        margin:theme.spacing(5,4,5,2)
    }
}))

const Gambar = [
    {
        gmbr: Gambar1,
        title: "Worker",
        Deskription: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        gmbr: Gambar2,
        title: "Worker",
        Deskription: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
        gmbr: Gambar3,
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
            <Grid container spacing={2} className={classes.grd}>
            {
                Gambar.map((data,index) => (
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <Card key={index}>
                    <CardActionArea >
                        <CardMedia >
                        <img src={data.gmbr} className={classes.gmbr}/>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.Deskription}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
                   ))
            }
            </Grid>
        </div>
    )
}

export default Services
