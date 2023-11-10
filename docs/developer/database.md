---
sidebar_position: 3
sidebar_class_name: green
---

# 3. Centralized Database

## 3.1. Database Schema [TBD after APIs are defined]
### 3.1.1. Tables and Relationships
### 3.1.2. Indexing Strategy
### 3.1.3. Data Security & Encryption

## 3.2. Scalability

### Vertical Scaling of the Centralized Database
Vertical scaling, colloquially referred to as "scaling up," pertains to the enhancement of a single node's computational resources. In a database context within AWS Lightsail, this manifests as migrating the database to an instance with superior CPU, RAM, or I/O capabilities. This approach retains a monolithic architecture, obviating the need for significant topological or schema changes. While this method boasts immediate performance benefits and maintains the coherence of a singular operational node, it's constrained by the hardware specifications of the highest-tier instance. It's also worth noting that scaling operations might necessitate temporary downtimes, contingent on the database system's ability to adapt to new resources without service interruptions.

### Horizontal Scaling of the Centralized Database
Horizontal scaling, often denoted as "scaling out," is the process of distributing the database load across multiple nodes or instances. In The Evoke Hub context on AWS Lightsail, this would mean creating multiple database instances, potentially employing techniques such as replication for read-heavy workloads or sharding for distributing datasets to handle write operations more efficiently. This strategy offers a linear and theoretically limitless expansion pathway, with each added node contributing to the overall system capacity. However, it introduces complexities: CAP theorem considerations, eventual consistency challenges, and potentially intricate transaction handling across nodes. The network latency between nodes also becomes a pivotal factor affecting performance. Architecturally, applications interfacing with the database might need refinements to ensure efficient data access patterns and fault tolerance.

For The Evoke Hub, the determination between vertical and horizontal scaling will be predicated on anticipated transactional volumes, data growth rates, and fault tolerance requirements as the Evoke ecosystem grows. If the system experiences high loads on the database, a judicious blend of both strategies, informed by regular performance metrics and monitoring, will be pivotal in ensuring system robustness and responsiveness.

## 3.3. Backup & Recovery

### Backup Strategy
- Scheduled Backups: On a daily basis, automatic backups of the entire database are initiated, capturing the database's state at that moment. These backups are stored redundantly across multiple geographic zones to ensure data durability.
- Snapshot Management: Periodic snapshots of the database are taken and stored within Amazon S3, providing a reliable and quickly accessible backup solution. These snapshots are incremental in nature, meaning only the changes since the last snapshot are stored, ensuring efficient storage utilization.
- Retention Policy: Backup files are retained for a duration of 30 days by default, allowing system administrators to roll back to any previous state within this timeframe. Older backups may be systematically archived in AWS Glacier for long-term storage, which can be retrieved if necessary.
- Data Encryption: Both in-transit and at-rest backups are encrypted using industry-standard encryption protocols, safeguarding against unauthorized access.

### Recovery Strategy:
- Rapid Restoration: In the event of a minor issue or system glitch, the system is designed to quickly restore from the most recent backup, ensuring minimal downtime.
- Snapshot Recovery: For larger issues or data discrepancies, the database can be rolled back to a previous state using the saved snapshots. This allows for flexibility in choosing a recovery point, ensuring the restoration of the most accurate and untampered data.
- Disaster Recovery: In the unlikely event of a catastrophic failure or a compromise, a comprehensive disaster recovery plan is in place. The system can be rebuilt using the backups stored in Amazon S3 and Glacier, ensuring data integrity and continuity.

## 3.4. Access Controls
Access controls within The Evoke Hub are designed to ensure both system integrity and user data protection. Utilizing Keycloak for authentication, the system mandates granular role-based permissions, ensuring that users can only access and manipulate data within their designated purview. This delineation is evident in the distinct roles of system administrators, campaign managers, campaign mentors, and agents. Each role is accorded specific permissions, ensuring that sensitive operations, especially those related to system configurations or user data modifications, remain restricted to qualified personnel. Additionally, potential extensions such as two-factor authentication and single-sign-on mechanisms further fortify the access protocols. By maintaining stringent access controls, The Evoke Hub not only upholds its commitment to security but also ensures a streamlined and role-appropriate user experience for every stakeholder within the Evoke ecosystem.
