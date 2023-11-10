---
sidebar_position: 4
sidebar_class_name: green
---

# 4. Core Services

## 4.1. Service Interactions & Dependencies

### Technologies Driving the Evoke Hub
The Evoke Hub is built using cutting-edge technologies to ensure scalability, reliability, and performance:
Backend: NodeJS, a runtime that offers efficient and event-driven architecture, perfect for handling numerous simultaneous connections.

- **Frontend**: React, a JavaScript library known for its flexibility and performance in building interactive user interfaces.
- **Databases**: PostgreSQL and MariaDB, open-source relational database systems known for extensibility and SQL compliance.
- **Hosting**: AWS (Amazon Web Services), a leading cloud service provider, ensuring high availability, scalability, and security for the Evoke Hub.

With these technologies, the Evoke Hub is not only robust but also future-ready, ready to support the growing needs of the Evoke community and its mission to empower youth in partner countries.

## 4.2. Service Scalability & Load Balancing
The Evoke Hub, architectured as a composite of interdependent microservices and systems, necessitates meticulous scalability planning and proficient load distribution strategies. Drawing parallels with the methodologies adopted for our centralized database, the overarching service scalability approach employs a dual-pronged strategy: vertical and horizontal scaling, each with distinct technical implications.

- **Vertical Scaling**: Analogous to our database strategy, individual service components within the Evoke ecosystem can undergo vertical scaling by amplifying their inherent computational resources. This could encompass augmenting the CPU cycles, amplifying RAM throughput, or provisioning additional IOPS for storage. The salient advantage lies in its straightforwardness – eschewing the need for topological reconfigurations or service rebalancing. However, the encapsulated nature of vertical scaling is bound by the hardware thresholds of the hosting platform, and transient service downtimes might be necessitated during resource augmentation phases.
- **Horizontal Scaling**: To cater to escalating traffic influxes and ensure system redundancy, a horizontal scaling strategy is paramount. This entails orchestrating a distributed mesh of service instances, with each instance alleviating a fragment of the systemic load. Forefronted by adept load balancers—optimized for latency, health checks, and session persistence—traffic is judiciously dispersed across this mesh. While this mode of operation guarantees enhanced traffic management and intrinsic fault tolerance, it also introduces complexities in stateful service continuity, real-time data synchronization, and inter-service communication latency.

The Evoke Hub scalability blueprint extends beyond mere database considerations, ingraining itself into the fabric of the service architecture. A congruent amalgamation of both scaling paradigms, underpinned by continuous performance telemetry and adaptive orchestration, will be pivotal in fortifying both system throughput and resilience.

## 4.3. Security Measures
At the network level, all traffic is routed through VPCs (Virtual Private Clouds) that are structured with defined security groups. These groups, configured with precise inbound and outbound rules, act as a firewall, safeguarding the APIs from unsolicited traffic and potential DDoS attacks.

All API endpoints within The Evoke Hub are secured using industry-standard TLS/SSL encryption, ensuring that data packets exchanged are both confidential and immune to middle-man attacks. Beyond this, API gateways are employed to manage, monitor, and secure these endpoints. These gateways serve multiple functions: rate limiting to prevent abuse, logging for audit purposes, and a layer of authentication and authorization.
For the latter, APIs within Evoke utilize OAuth 2.0 protocols, often coupled with JWT (JSON Web Tokens) to provide robust authentication and session management. This ensures that each request to the API comes from verified clients and users, and based on their roles, have tailored access to resources, ensuring adherence to the principle of least privilege.

Internally, the services follow a Service Mesh architecture. This provides enhanced security by ensuring encrypted communication between microservices, and also enables fine-grained control over traffic, ensuring that even internal communications are verified and secured.

To further enhance data security, especially for sensitive user profiles and transactional data, AES-256 encryption is employed for data at rest. This means that irrespective of the storage medium—be it databases, logs, or configuration files—data remains encrypted and inaccessible to unwarranted access.

Proactive measures, such as regular penetration testing, automated vulnerability scanning, and continuous monitoring, are ingrained in The Evoke Hub architecture. These measures not only ensure compliance with security standards such as GDPR but also provide an early warning system against potential security threats, ensuring that the service remains resilient and trustworthy.
