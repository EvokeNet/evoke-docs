---
title: "Game/Campaign/:Id"
sidebar_position: 5
---

# Game Campaign
The Single Game Campaign endpoint provides detailed information about a specific game campaign, including its missions, sidequests, rewards, and associated game mechanics. It is an essential tool for players seeking to explore a particular campaign in-depth, as well as for developers and content creators who need detailed information about specific game campaigns.

## Endpoint
```https://evokenet.org/api/v1/game/campaigns/{campaignId}```

## Method
```GET```

## Request
```
{
  "campaignId": "<ID for the campaign>"
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
    "campaignId": "camp123",
    "title": "Space Odyssey",
    "theme": "Space Exploration",
    "missions": [
      {
        "missionId": "mis101",
        "name": "Lunar Landing",
        "description": "Land on the moon and establish a base.",
        "rewards": {
          "evocoins": 200,
          "items": ["Space Suit", "Lunar Rover"]
        },
        "gameMechanics": "https://evokenet.org/api/v1/game/mechanics?missionId=camp123"
      },
      {
        "missionId": "mis102",
        "name": "Asteroid Mining",
        "description": "Mine resources from a nearby asteroid.",
        "rewards": {
          "evocoins": 300,
          "items": ["Mining Drone", "Asteroid Map"]
        },
        "gameMechanics": "https://evokenet.org/api/v1/game/mechanics?missionId=camp123"
      }
    ],
    "sideQuests": [
      {
        "questId": "quest201",
        "name": "Alien Encounter",
        "description": "Make first contact with an alien species.",
        "rewards": {
          "evocoins": 100,
          "items": ["Alien Artifact", "Translator Device"]
        },
        "gameMechanics": "https://evokenet.org/api/v1/game/mechanics?missionId=camp123"
      }
    ]
  }
}
```

### Error
```
{
  "status": "error",
  "message": "Invalid token or campaign not found"
}
```

## Use Case
This API call is used to retrieve detailed information about a specific game campaign, identified by its unique campaign ID. It provides comprehensive details about the campaign, including its title, theme, a list of missions and sidequests, along with their respective rewards and links to their associated game mechanics. This endpoint is particularly useful for players and game developers looking to access or showcase detailed information about a particular campaign within the game.

## Notes/Additional Info
The token must be included in the Authorization header as a Bearer token. The 'campaignId' parameter in the URL should be replaced with the actual ID of the campaign you wish to retrieve. The response includes detailed information about the campaign, making it a valuable resource for understanding the structure and content of the campaign.