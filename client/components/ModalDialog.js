import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { ImageList, ImageListItem, Divider, Avatar } from '@material-ui/core';
import { avatarList, users } from '../../script/seedData';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserThunk } from '../store/auth';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  box: {
    display: 'flex',
  },
  imageList: {
    color: theme.pr,
    display: 'flex',

    flexDirection: 'row',
    wrap: 'flex-wrap',
  },
  image: {
    height: 200,
    width: 200,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalDialog() {
  const classes = useStyles();

  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [open, setOpen] = React.useState(false);

  const user = useSelector((state) => state.auth);
  const [avatarPreview, SetAvatarPreview] = useState(user.profileImg);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imageClickHandler = (e) => {
    SetAvatarPreview(e.target.src);
  };

  const updateUser = async () => {
    const updatedUser = { ...user, profileImg: avatarPreview };
    await dispatch(updateUserThunk(updatedUser));
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Choose a New Avatar
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Choose an Avatar!
            </Typography>
            <Button autoFocus color="inherit" onClick={updateUser}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div className={classes.imageDiv}>
          <Avatar
            className={classes.avatar}
            id="avatar"
            alt={`${user.username}`}
            src={`${avatarPreview}`}
          />
        </div>
        <div className={classes.box}>
          <ImageList
            className={classes.imageList}
            variant="round"
            rowHeight={160}
            cols={3}
          >
            {avatarList.map((item, idx) => (
              <ImageListItem key={idx} cols={item.cols || 1}>
                <img
                  src={item.src}
                  className={classes.image}
                  alt="my profile image"
                  key={idx}
                  onClick={imageClickHandler}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Dialog>
    </div>
  );
}
