# User Profile
Describe user authentication endpoint here.

## Endpoint
```https://evokenet.org/api/v1/user/profile```

## Method
```POST```

## Request
```
{
  "user_id": "<your provided username>"
}
```

### Headers
```
{
  "Authorization": Bearer <token>
}
```

## Response

### Success
```
{
  "status": "success",
  "data": {
    "username": "user123",
    "email": "user123@email.com",
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-01-01",
    "profilePicture": "https://evokenet.org/profiles/user123.jpg"
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