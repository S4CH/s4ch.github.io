# Routes

The base URL for the api is `api.motunui.thm:3000/v2/`.

### `POST /login`
Returns the hash for the specified user to be used for authorisation.
#### Parameters
- `username`
- `password`
#### Response (200)
```js
{
	"hash": String()
}
```
#### Response (401)
```js
{
	"error": "invalid credentials"
}
```

### 🔐 `GET /jobs`
Returns all the cron jobs running as the current user.
#### Parameters
- `hash`
#### Response (200)
```js
{
	"jobs": Array()
}
```
#### Response (403)
```js
{
	"error": "you are unauthorised to view this resource"
}
```

### 🔐 `POST /jobs`
Creates a new cron job running as the current user.
#### Parameters
- `hash`
#### Response (201)
```js
{
	"job": String()
}
```
#### Response (401)
```js
{
	"error": "you are unauthorised to view this resource"
}
```
