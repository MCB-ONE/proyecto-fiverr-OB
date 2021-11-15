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
  Box,
  InputBase,
} from '@material-ui/core';
import { Nav } from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { AiFillHome, AiFillUnlock, AiOutlineClose } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import Logo from '../../../public/images/logo.svg';
import '../../styles/css/appbar.scss';

/** Mui make styles theme */
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  '& .MuiToolbar-root': {
    [theme.breakpoints.up('md')]: {
    flexWrap: 'wrap',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginRight: '2rem',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  StyledInputBase: {
    color: 'inherit',
    border: '1px solid grey',
    '& .MuiInputBase-input': {
      padding: '8px 8px 8px 40px',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      height: '0.8rem',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  },
  SearchIconWrapper: {
    padding: '0px 8px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    flexGrow: 1,
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

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  const menuItems = [
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

  /** Function to generate diferent menuItems list for desktop view */
  const deskMenuItems = menuItems.filter((item) => item.name !== 'Home');

    return (
      <div className={classes.root}>
        <AppBar elevation={0}>
          <Toolbar className={classes.toolbar}>
            <div className="navBrand">
              <Nav.Link as={Link} to="/" className="p-0">
                <img src={Logo} alt="Logo Fiverr" />
              </Nav.Link>
            </div>
            <Box className={classes.search}>
              <Box className={classes.SearchIconWrapper}>
                <SearchIcon />
              </Box>
              <InputBase
                className={classes.StyledInputBase}
                placeholder="Buscar servicio…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
            <div className={classes.menuItems}>
              {deskMenuItems.map((item) => (
                <Button
                  variant={item.name === 'Iniciar sesión' ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => history.push(item.path)}
                  key={item.name}
                >
                  {item.name}
                </Button>
            ))}
            </div>
            <IconButton
              color="inherit"
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
                onClick={() => history.push(item.path)}
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
