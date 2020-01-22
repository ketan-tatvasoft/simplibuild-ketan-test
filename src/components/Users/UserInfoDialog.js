import React, { Fragment } from 'react';

// UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const UserInfoDialog = (props) => {
  const { 
    openUserInfo,
    handleCloseUserInfo,
    info
  } = props;   
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();  
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };  
  
  return (    
    <Dialog
      fullScreen={fullScreen}
      open={openUserInfo}
      onClose={handleCloseUserInfo}
      aria-labelledby="responsive-dialog-title"
    >
      { Object.keys(info).length && info.constructor === Object ? (
        <Fragment>          
          <DialogContent>            
          <Card className={classes.card}>
            <CardHeader
              avatar={                
                <Avatar src={info.picture.thumbnail} />                      
              }
              title={info.name.title + ' ' + info.name.first + ' ' + info.name.last}
              subheader={'Reg. on ' + new Date(info.registered.date).toLocaleString("en-US", dateOptions)}
            />
            <CardMedia
              className={classes.media}
              image={info.picture.medium}
              title={info.name.title + ' ' + info.name.first + ' ' + info.name.last}
            />
            <CardContent>              
              <List className={classes.list}>
                <ListItem>                
                  <ListItemText primary="ID" secondary={info.id.value} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="E-mail" secondary={info.email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Gender" secondary={info.gender} />
                </ListItem>
                <ListItem>                
                  <ListItemText primary="Date of Birth" secondary={new Date(info.dob.date).toLocaleString("en-US", dateOptions)} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Address" secondary={
                    info.location.street.number + ' - ' + info.location.street.name + ', '
                    + info.location.city + ', '
                    + 'Postcode : ' + info.location.postcode + ', '
                    + info.location.state + ', '
                    + info.location.country} 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone" secondary={info.phone} />
                </ListItem>                              
              </List>
            </CardContent>
          </Card>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleCloseUserInfo} color="primary">
              Close
            </Button>            
          </DialogActions>
        </Fragment>
      ) : (
        <DialogContent>
          <h3>No Record Selected !</h3>
          <DialogActions>
            <Button autoFocus onClick={handleCloseUserInfo} color="primary">
              Close
            </Button>            
          </DialogActions>
        </DialogContent>
      )      
    }      
    </Dialog>
  );
}

export default UserInfoDialog;