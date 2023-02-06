import React from 'react';
import useStyles from './style';
import { Typography, Button, AppBar , Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';


const cards=[1,2,3,4,5,6,7,8,9];


const App=() =>{
    const classes = useStyles();
    return(
 <>
 <CssBaseline />
 <AppBar position="relative">
    <toolbar>
        <PhotoCamera className={classes.icon}/>
        <Typography variant="h6">
        Photo Album
        </Typography>
    </toolbar>
 </AppBar>
 <main>
    <div className={classes.container}>
        <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
                Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary"  paragraph>
            this is about the photo album
            </Typography>
            <div className={classes.buttons}>
                <Grid container spacing={2} justify="center">
                   <Grid item>
                        <Button variant="contained" color="primary">
                            See my photos
                        </Button>
                   </Grid>
                <Grid item>
                        <Button variant="outlined" color="primary">
                            Secondary option
                        </Button>
                </Grid>
                </Grid>
            </div>
        </Container>
    </div>
    <Container className={classes.cardGrid} maxWidth="md">
        <Grid container justifyContent="space-between" alignItems="center" spacing={4} spacing={4}>
            {cards.map((card) =>(
                <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                  className={classes.CardMedia}
                  image="https://source.unsplash.com/random"
                  title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                     <Typography gutterBottom variant="h5">
                        Thalapathy Media Card
                     </Typography>
                     <Typography>
                        This is about the media card section
                     </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
            </Grid>
            ) )}
        </Grid>
    </Container>
 </main>
 <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom> 
    Footer
    </Typography>
    <Typography variant="h2" align="center" color="sky blue">
        this is about material ui concept small demo
    </Typography>
 </footer>
 </>
    );
}

export default App;