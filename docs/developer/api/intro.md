---
title: 'Introduction'
sidebar_position: 1
---

# API Integration

## API Endpoints Overview
The Evoke Hub architecture relies heavily on a suite of robust and well-defined API endpoints, designed to enable seamless integration, communication, and interaction among various components and external applications. These API endpoints provide a unified interface for accessing the vast array of services and data stores that the system offers, while also ensuring secure and efficient data exchange.

- **User Authentication Endpoint**: Managed by Keycloak, this endpoint facilitates user sign-in, sign-out, registration, password resets, and other authentication-related functionalities. Its primary objective is to verify the identity of users, assign appropriate tokens, and ensure secure sessions.
Content API Endpoint: Serving as the primary channel for retrieving and posting game-related content, this endpoint offers access to text, media, and other game assets. It's designed to be flexible to adapt to evolving content requirements.
- **User Profile Endpoint**: Dedicated to managing user-specific data, this endpoint provides functionalities to read, update, and delete player profiles, skills, competencies, and superpowers.
Marketplace API Endpoint: Responsible for facilitating transactions, in-game purchases, and listing of virtual or real goods. It handles in-game currency, manages inventory, and maintains transaction history.
- **Game Mechanics Endpoint**: At the heart of the gaming experience, this endpoint manages game flow, events, challenges, and environmental factors. It has mechanisms to introduce dynamic changes based on real-world events or artificial disruptions.
- **Database Interaction Endpoint**: While not directly accessible by most external systems, this endpoint handles all database-related interactions. It ensures data integrity, manages queries, and performs data CRUD (Create, Read, Update, Delete) operations.
- **AI Feedback Endpoint**: This provides experimental access to artificial intelligence-powered feedback mechanisms developed by the World Bank Group to measure the hard-to-measure skills, competencies, and superpowers developed in the Evoke game world. It has capabilities to provide individualized feedback to agent work based on portfolio inputs, matched to mission assignments and desired skills for development.

These endpoints are designed with RESTful principles in mind, ensuring standardized practices, easy integration, and scalability. They support the JSON format, and utilize the HTTPS protocol for data transfer, based on the sensitivity and nature of the data. Rate limits and throttling mechanisms may be implemented across these endpoints to safeguard the system against potential abuse, while also ensuring fair resource distribution.

## API Authentication & Authorization
The distinction between recognizing an entity (authentication) and granting that entity the appropriate permissions (authorization) is underscored by implementing a structured protocol. Keycloak, a prominent identity and access management solution, is at the helm of both these operations.

### Authentication:
- **JWT-Based Authentication**: With the utilization of Keycloak, the system produces and validates JSON Web Tokens (JWTs) for session representation. Post successful user validation, a signed JWT is provisioned, encapsulating the user's session metadata. This token is requisite for subsequent API invocations, serving as a verifiable credential in the request header.
- **OAuth 2.0 Integration**: Recognizing potential integrations and third-party interactions, The Evoke Hub encompasses OAuth 2.0 authorization, managed through Keycloak. This protocol delineates scopes of access, permitting third-party applications to operate within stipulated bounds on a user's behalf.
- **Session Lifecycle Management**: Keycloak provides efficient session management capabilities. It caters to token refreshment, monitors active sessions, and implements termination protocols under session expiry or potential security anomalies.

### Authorization:
Role-Based Access Control (RBAC): Post-authentication, the granularity of access is determined by RBAC, managed through Keycloak's comprehensive role definitions. Hierarchies such as system administrator, campaign manager, campaign mentor, and agent (player) possess delineated privileges. This ensures endpoint access is congruent with the authenticated entity's role.

- **Endpoint-Specific Authorization Protocols: Authorization in the context of individual API endpoints is manifested through permission matrices. Keycloak correlates the authenticated role with the API endpoint's predefined permission structure, thereby granting or rejecting access.
- **Attribute-Based Access Control (ABAC)**: The architecture further leverages ABAC, incorporating variables like user transaction history, campaign assignments, geographical location, and access timestamps. This facilitates dynamic permission assignments, allowing flexibility in granting privileges based on evolving contextual variables.
- **API Key Governance**: Keycloak extends its capabilities to manage API keys for third-party or specific microservices integrations. These keys serve as distinct identifiers for the accessing service, and their lifecycle, encompassing generation, rotation, and invalidation, is governed rigorously to preempt potential security breaches.

## Rate Limiting and Throttling
Within The Evoke Hub infrastructure, API rate limits and throttling mechanisms are imperative to ensuring fair usage, system stability, and protection against potential abuse or Denial-of-Service (DoS) attacks. The rate limits are set based on a combination of factors, including user roles, endpoint sensitivity, and expected usage patterns. Regular users might experience a more conservative rate limit compared to system administrators or trusted partners. Throttling mechanisms are dynamic, adapting in real-time to system load and available resources. When a user or system exceeds the predefined threshold, they receive a clear and concise error message indicating the limit violation. These measures not only maintain the integrity and performance of The Evoke Hub but also ensure an equitable API usage environment for all connected clients and applications. By implementing such controls, we aim to strike a balance between accessibility and sustainability, facilitating optimal user experience while safeguarding the system's resilience.
