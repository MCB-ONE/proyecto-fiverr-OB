import React from 'react';
import { Link, useHistory } from 'react-router-dom';
/** Import MUI components */
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Drawer,
} from '@material-ui/core';
import { Nav } from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';
import {
 AiFillHome, AiFillUnlock, AiOutlineClose, AiOutlineLogout,
} from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import Logo from '../../../public/images/logo.svg';
import '../../styles/css/appbar.scss';
/** Mui make styles theme */
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  menuIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuItems: {
    '& > *': {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  drawerpaper: {
    width: '270px',
    color: 'white',
  },
}));

const NavBar = ({ logged }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };
  let menuItems = [
    {
      name: 'Home',
      icon: <AiFillHome />,
      path: '/',
    },
    {
      name: 'Iniciar sesión',
      icon: <FaUser />,
      path: '/login',
    },
    {
      name: 'Unirse',
      icon: <AiFillUnlock />,
      path: '/register',
    },
  ];

  menuItems = logged ? [{
    name: 'Home',
    icon: <AiFillHome />,
    path: '/',
  },
  {
    name: 'Cerrar sesión',
    icon: <AiOutlineLogout />,
    path: '/login',
  }] : menuItems;

  /** Function to generate diferent menuItems list for desktop view */
  const deskMenuItems = menuItems.filter((item) => item.name !== 'Home');
  const handleClick = (item) => {
    return () => {
      if (item.name === 'Cerrar sesión') {
        localStorage.removeItem('token');
        window.dispatchEvent(new Event('storage'));
      }
      history.push(item.path);
    };
  };
  return (
    <div className={classes.root}>
      <AppBar elevation={0}>
        <Toolbar>
          <div className="navBrand">
            <Nav.Link as={Link} to="/" className="p-0">
              <img src={Logo} alt="Logo Fiverr" />
            </Nav.Link>
          </div>
          <div className={classes.menuItems}>
            {deskMenuItems.map((item) => (
              <Button
                variant={item.name === 'Iniciar sesión' || item.name === 'Cerrar sesión' ? 'contained' : 'outlined'}
                color="primary"
                onClick={handleClick(item)}
                key={item.name}
              >
                {item.name}
              </Button>
            ))}
          </div>

          <IconButton
            edge="end"
            onClick={handleDrawer}
            className={classes.menuIcon}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="right"
        classes={{ paper: classes.drawerpaper }}
      >
        <IconButton
          onClick={handleDrawer}
          className="close-icon"
        >
          <AiOutlineClose />
        </IconButton>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.name}
              button
              onClick={handleClick(item)}
            >
              <ListItemIcon onClick={handleDrawer}>{item.icon}</ListItemIcon>
              <ListItemText onClick={handleDrawer} primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
