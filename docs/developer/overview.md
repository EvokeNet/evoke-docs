---
sidebar_position: 2
sidebar_class_name: green
---

# 2. System Overview

## 2.1. System Description
The Evoke Hub is the central integration layer designed to seamlessly connect and orchestrate the diverse platforms that make up the Evoke ecosystem. Its primary purpose is to ensure a unified and smooth experience for users, educators, and administrators across the various components of Evoke.The Evoke Hub serves as the backbone of the Evoke system, enabling:

- Unified Access: Through the Single Sign-On (SSO) system, users can effortlessly access all platforms without the need for multiple logins.
- Data Synchronization: Ensures that user progress, rewards, and other data are consistently updated and reflected across platforms.
- Centralized Management: Administrators and educators can manage campaigns, users, and courses from a single interface, simplifying the overall management process.
- Core APIs: TO-DO

The Evoke Hub is architecturally envisioned as the nucleus of the Evoke ecosystem. Its primary objective is to unify the otherwise federated space of Evoke apps and campaigns by providing a centralized, consistent, and reliable access point. Operating at the heart of this system are sophisticated databases powered by both MySQL and Postgres, chosen for their reliability, flexibility, and proven scalability. These databases, in essence, function as the backbone, storing and organizing a myriad of content relevant to the Evoke landscape.

Real-time data processing is at the forefront of The Evoke Hub design. Initially conceptualized as a ledger and content provider, it ensures instantaneous access, updation, and delivery of data to various components within the Evoke ecosystem. The immediacy of this processing is paramount, especially when considering the dynamic and interactive nature of the Evoke game world.

Architecturally, the system currently leverages a microservices-based approach. This segmented design allows for easy isolation, maintenance, and individual scaling of components. However, given the evolving nature of systems and to potentially enhance cohesion and manageability, there is contemplation towards a more monolithic architectural style in the future.

### Key features of The Evoke Hub
- **User Authentication**: Managed via Keycloak, an open-source identity and access management solution, ensuring robust and secure user authentication processes.
- **Content API**: Provides structured and consistent access to a vast array of Evoke content.
- **User Profile API**: Manages and furnishes user-specific data, facilitating personalized experiences.
- **Marketplace API**: Anchors the dynamic Evoke marketplace, managing transactions, listings, and user interactions.
- **Game Mechanics API**: Centralizes game rules, interactions, and mechanics, ensuring consistent gameplay across platforms.

While scale has not presented challenges as of yet, the nature of digital ecosystems necessitates forward-thinking. With the integration of various platforms and the potential influx of users and campaigns, a scaling strategy is imperative. This would encompass both horizontal and vertical scaling measures, ensuring that as the Evoke world grows, The Evoke Hub remains resilient, efficient, and agile in its service delivery.

The Evoke Hub is not just a system; it's the technical embodiment of the Evoke vision, carefully crafted to ensure that every interaction, every game move, and every campaign runs seamlessly, securely, and in harmony with the larger Evoke narrative.

## 2.2. Key Components
### User Authentication (Powered by Keycloak)
The Evoke Hub integrates Keycloak for robust user authentication. It offers flexibility to system administrators with the ability to optionally enable two-factor authentication or single-sign-on integrations. Moreover, a comprehensive user role and permission system is in place. This system categorizes users into four primary roles:

- System Administrator: Responsible for overarching system management.
- Campaign Manager: Manages individual campaigns, their content, and flow.
- Campaign Mentor: Oversees player interactions and provides guidance.
- Agent (Player): The end user, experiencing the game world.

##### Content API
This API is the heart of content delivery. Although it primarily serves text content, an intriguing feature in its potential evolutionary path includes the possibility of AI-generated content, responsive to user actions, creating dynamic narrative branches.

#### User Profile API
Focusing on the RPG-like essence of the Evoke world, the user profile is more than just personal details. It accumulates a player's skills, competencies, and other unique 'superpowers' developed through gameplay. This architecture ensures character permanence, continuity, and progression, reminiscent of classic role-playing games.

#### Marketplace API
More than just a transactional space, the Evoke marketplace is a dynamic hub where in-game currency, Evocoins, may be exchanged for tangible and virtual goods. The items available for purchase or trade are curated by campaign managers and backed by campaign sponsors, adding a layer of real-world interaction.

#### Game Mechanics API:
Crucial to maintaining the game's dynamism, this API regulates the flow and introduces game-changing events. Whether it's a real-world event, like an earthquake, or a narrative twist, such as a hacker's interference, the Game Mechanics API ensures the Evoke world remains immersive and reactive.
The Game Mechanics API may also be used to trigger actions outside of the Evoke game universe. For example, upon achieving a milestone superpower in the game, the Game Mechanics API could be used to trigger issuance of a reward in Minecraft or in any other game.

#### Infrastructure and Platform:
To achieve seamless scalability and performance, The Evoke Hub is architecturally designed for Amazon AWS, leveraging the power of Lightsail for reliable server hosting. Additionally, Amazon S3 is utilized for media storage, ensuring quick content delivery and redundancy.

#### Future Prospects and Innovations:
Given the dynamic nature of the gaming world and the technological landscape, there's always room for enhancement and addition. One can envision advancements in areas like AI-assisted content creation, integration with World Bank indicators that impact global grand challenges, augmented reality integrations for an immersive experience, and potential collaborations with other gaming ecosystems to expand the Evoke narrative.
