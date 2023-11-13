---
title: "User/Profile"
sidebar_position: 3
---

# User Profile
The User Profile endpoint is used to retrieve the personal profile information of an authenticated user. By providing a valid authentication token in the request header, users can access details such as their username, email, name, date of birth, and profile picture URL. This endpoint is essential for applications where personalization and user-specific data retrieval are necessary. It ensures that users can securely and conveniently access their own profile data.

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