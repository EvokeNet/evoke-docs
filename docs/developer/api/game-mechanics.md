---
title: "Game/Mechanics"
sidebar_position: 10
---

# Game Mechanics
The Game Mechanics endpoint is designed to provide a diverse range of game mechanics tailored to different gaming platforms, such as browser-based, console-based, and LMS traditional platforms. It offers detailed information on various types of game mechanics, including Threats, Global Challenges, and Timed Challenges. Each mechanic is described with its name, type, rewards (like skills and evocoins), disruptions, and other specific configurations. This endpoint is essential for creating a dynamic and engaging gaming experience, allowing for the customization of game content based on the user's platform and preferences.

## Endpoint
```https://evokenet.org/api/v1/game/mechanics```

## Method
```GET```

## Request
```
{
  "platform": "<type of platform>",
  "missionId": "<id of the campaign's mission>"
}
```
#### Supported types
- browser_lms
- browser_blog
- browser_game
- console_game
- mobile_game
- animatic_panel

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
  "data": [
    {
      "type": "Threat",
      "name": "Invasion of Aliens",
      "configurations": {
        "rewards": {
          "skills": ["Strategic Thinking", "Teamwork"],
          "evocoins": 500
        },
        "disruptions": ["Resource Depletion", "Base Lockdown"],
        "duration": "2 hours"
      }
    },
    {
      "type": "Global Challenge",
      "name": "Save the Oceans",
      "configurations": {
        "rewards": {
          "skills": ["Environmental Awareness", "Problem Solving"],
          "evocoins": 1000
        },
        "disruptions": ["Weather Anomalies", "Pollution Spread"],
        "duration": "1 week"
      }
    },
    {
      "type": "Timed Challenge",
      "name": "Code Breaker",
      "configurations": {
        "rewards": {
          "skills": ["Coding", "Analytical Thinking"],
          "evocoins": 300,
        },
        "disruptions": ["System Hacks", "Time Limit"],
        "duration": "30 minutes"
      }
    }
  ]
}
```

### Error
```
{
  "status": "error",
  "message": "Invalid token or unsupported platform"
}
```

## Use Case
This API call is used to retrieve a list of game mechanics tailored to different types of game platforms (browser-based, console-based, LMS traditional platforms). Each game mechanic object includes details such as the type of mechanic (e.g., Threat, Global Challenge, Timed Challenge), its name, rewards (like skills, evocoins), disruptions, and other configurations. This endpoint is ideal for dynamically generating game content based on the platform and enhancing the gaming experience with varied challenges and rewards.

## Notes/Additional Info
Ensure that the token is valid and included in the Authorization header as a Bearer token. The 'platform' parameter should correctly reflect the intended game platform to receive the appropriate game mechanics data. The response will vary based on the specified platform, providing a customized experience for each type of user.