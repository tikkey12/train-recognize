import React, {useState} from 'react';
import {Button, Drawer, IconButton, List, ListItem, ListItemProps, ListItemText} from "@material-ui/core";
import navStyle from './NavStyle.module.css';
import {MenuOpen} from "@material-ui/icons";


function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <div className={navStyle.body}>
            <Button className={navStyle.loginButton} variant="contained" href='/'>
                LogOut
            </Button>
            <IconButton onClick={() => setIsOpen(true)}>
                <MenuOpen/>
            </IconButton>
            <Drawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
                <List>
                    <ListItemLink href='/work'>
                        <ListItemText primary="Work" />
                    </ListItemLink>
                    <ListItemLink href='/addUser'>
                        <ListItemText primary="AddUser" />
                    </ListItemLink>
                    <ListItemLink href='/sandbox'>
                        <ListItemText primary="Sandbox" />
                    </ListItemLink>
                </List>
            </Drawer>
        </div>
    );
}

export default Navigation;