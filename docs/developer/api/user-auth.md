# User Authentication
Describe user authentication endpoint here.

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