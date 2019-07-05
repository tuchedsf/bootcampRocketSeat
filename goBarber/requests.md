##### Users.index

> Request: http://localhost:3000/users Method: GET

##### Users.store

> Request: http://localhost:3000/users Method: POST

```
{
"name" : "abcd",
"email" : "teste@abcd.com",
"password": "teste",
"avatar" : "avatar.jpg"
}
```

##### Users.signin

> Request: http://localhost:3000/signin Method: POST

```
{
"email" : "teste@abcd.com",
"password": "teste"
}
```

> http://127.0.0.1:3000/users Method: PUT

Atualizaar informações_ex atualizar password

```
{
"oldPassword": "teste"
"password": "12345"
}
```
