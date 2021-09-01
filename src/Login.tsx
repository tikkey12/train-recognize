import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, TextField} from "@material-ui/core";
import loginStyle from './loginStyle.module.css'
import { useHistory } from 'react-router-dom';

function Login() {
    const baseUrl = 'http://localhost:8080/api/users'
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function isOk() {
        if (login && password) {
            fetch(`${baseUrl}?name=${login}`)
                .then(res => res.json())
                .then((res: any) => {
                    console.log(res)
                    if (res[0].name === login && res[0].pass === password)
                       history.push('/work');
                }
            )
        }
    }

  return (
      <Card className={loginStyle.myCard}>
          <CardContent>
              <div className={loginStyle.cardContent}>
                  <TextField required label="Login" onBlur={e => setLogin(e.target.value)}/>
              </div>
              <div className={loginStyle.cardContent}>
                  <TextField required label="Password" type="password" onBlur={e => setPassword(e.target.value)}/>
              </div>
          </CardContent>
          <CardActions className={loginStyle.cardActions}>
              <Button onClick={() => isOk()}>Enter</Button>
          </CardActions>
      </Card>
  );
}

export default Login;
