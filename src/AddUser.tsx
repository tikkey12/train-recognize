import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, IconButton, Snackbar, TextField} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close'
import loginStyle from './loginStyle.module.css'

function AddUser() {
    const baseUrl = 'http://localhost:8080/api/users'
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isUser, setIsUser] = useState(false);

    function isOk() {
        if (login && password) {
            // fetch(`${baseUrl}?name=${login}`)
            //     .then(res => {
            //         if (res) {
            //             setIsUser(true);
            //             console.log(isUser + '1');
            //         } else {
                        fetch(baseUrl, {
                            method: 'POST',
                            body: JSON.stringify({
                                name: login,
                                pass: password
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        })
                         setIsUser(true);
                        // console.log(isUser + '2');
                   // }
                //})
        }

        setLogin('');
        setPassword('');
    }

    return (
        <div>
            <Card className={loginStyle.myCard}>
                <CardContent>
                    <div className={loginStyle.cardContent}>
                        <TextField required
                                   label="Login"
                                   value={login}
                                   onChange={e => setLogin(e.target.value)}/>
                    </div>
                    <div className={loginStyle.cardContent}>
                        <TextField required
                                   label="Password"
                                   value={password}
                                   type="password"
                                   onChange={e => setPassword(e.target.value)}/>
                    </div>
                </CardContent>
                <CardActions className={loginStyle.cardActions}>
                    <Button onClick={() => isOk()}>Add new user</Button>
                </CardActions>
            </Card>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={isUser}
                autoHideDuration={1000}
                onClose={() => setIsUser(false)}
                message="User added"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={() => setIsUser(false)}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    );
}

export default AddUser;
