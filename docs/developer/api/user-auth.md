---
title: "User/Authentication"
sidebar_position: 2
---

# User Authentication
The Authentication endpoint is a crucial component for user security and access control in the API. It allows users to authenticate themselves by submitting their username and password. Upon successful authentication, the endpoint returns a unique token. This token is then used as a Bearer token in the Authorization header for subsequent API requests, ensuring that each request is authenticated and authorized. This endpoint is fundamental for maintaining secure user sessions and personalized interactions within the API.

## Endpoint
```https://evokenet.org/api/v1/auth```

## Method
```POST```

## Request
```
{
  "username": "<your provided username>",
  "password": "<your provided password>"
}
```

## Response

### Success
```
{
  "status": "success",
  "data": {
    Token: <Token data goes here>
  }
}
```

### Error
```
{
    "status": "error",
    "message": "Description of the error"
}
```

## Use Case
Brief description of when and why to use this API call.

## Notes/Additional Info
Any extra information that could be helpful.