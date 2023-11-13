---
title: "Game/Campaigns"
sidebar_position: 4
---

# Game Campaigns
The Game Campaigns endpoint offers a curated list of game campaigns based on a chosen theme. Each campaign is a collection of missions and sidequests, each with specific rewards and linked game mechanics. The endpoint enhances the gaming experience by providing thematic, structured gameplay opportunities, and direct access to relevant game mechanics, fostering an immersive and engaging environment for the player.

## Endpoint
```https://evokenet.org/api/v1/game/campaigns```

## Method
```GET```

## Request
```
{
  "theme": "<theme of campaign>"
}
```
#### Supported themes
- climate
- violence
- displacement
- hunger
- water


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
          "gameMechanics": "https://evokenet.org/api/v1/game/mechanics?missionId=miss123"
        },
        {
          "missionId": "mis102",
          "name": "Asteroid Mining",
          "description": "Mine resources from a nearby asteroid.",
          "rewards": {
            "evocoins": 300,
            "items": ["Mining Drone", "Asteroid Map"]
          },
          "gameMechanics": "https://evokenet.org/api/v1/game/mechanics?missionId=miss123"
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
          "gameMechanics": "https://evokenet.org/api/v1/game/mechanics?missionId=side123"
        }
      ]
    }
    // More campaigns...
  ]
}
```

### Error
```
{
  "status": "error",
  "message": "Invalid token or no campaigns found for the given theme"
}
```

## Use Case
This API call is used to retrieve a list of game campaigns based on a specified theme. Each campaign includes a sequence of missions and sidequests, complete with their own rewards and associated game mechanics. The game mechanics for each mission are accessible via a reference link to the Game Mechanics endpoint, using the campaign ID as a parameter. This endpoint is ideal for users looking to explore different thematic campaigns and engage in a variety of missions and challenges within the game.

## Notes/Additional Info
The token must be included in the Authorization header as a Bearer token. The 'theme' parameter should be specified to filter the campaigns. The game mechanics link provided in each mission redirects to the Game Mechanics endpoint, allowing for a detailed view of the mechanics associated with that specific campaign.