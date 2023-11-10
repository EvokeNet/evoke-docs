---
sidebar_position: 5
sidebar_class_name: green
---

# Security

## Data Encryption at Rest & in Transit
Ensuring the security and integrity of data, both when it's stored and when it's in the process of being transmitted, is crucial to The Evoke Hub. We will employ sophisticated encryption mechanisms to secure our data both at rest and in transit, fortifying our commitment to user trust and regulatory compliance.

## Encryption at Rest:
- **Databases**: Every byte of data stored within our relational databases, be it MySQL or Postgres, benefits from AES-256 block-level encryption. This encryption applies to the entirety of the storage layer, covering data files, backups, snapshots, and logs. The encryption keys are managed by AWS Key Management Service (KMS), ensuring that they are rotated, backed up, and safeguarded with utmost diligence.
- **File Storage**: Assets stored within our Amazon S3 buckets are protected using Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3). Every put or post request for an S3 object triggers the encryption as it's written to disks, and decryption as it's read.
- **Backup Data**: All backup files, prior to being archived, undergo a rigorous encryption process. The encryption procedure ensures redundancy and security, even when the backup data is moved offsite or is in cold storage.

## Encryption in Transit:
- **Endpoint Security**: All data exchanges with The Evoke Hub' endpoints are shielded by Transport Layer Security (TLS) 1.2 or 1.3, negating risks associated with eavesdropping, tampering, or message forgery. This applies to both internal service-to-service communications as well as external API requests and responses.
- **Internal Service Mesh**: For internal microservices communication, a Service Mesh architecture, e.g., Istio or Linkerd, may be employed. This not only offers traffic control but also ensures mutual TLS-based encryption between microservices, reinforcing our defense-in-depth strategy.
- **Third-party Integrations**: Any data flow that interfaces with external systems, including third-party plugins or services, is mandatorily encrypted. A combination of robust API authentication, complemented by data packet encryption, ensures that no data leaves or enters the Evoke ecosystem without the requisite security measures in place.

The Evoke Hub is architectured with a philosophy that no piece of data, however trivial, remains unencrypted at any stage of its lifecycle. This stance on encryption not only reinforces data security but also instills confidence among our stakeholders regarding our commitment to data protection.

## Role-Based Access Control (RBAC)
Role-Based Access Control (RBAC) offers a granular access control mechanism where permissions are not directly assigned to individuals, but rather to roles. Each role embodies a specific set of permissions aligned with its function, ensuring that users only access the information necessary to fulfill their responsibilities.

System administrators configure roles within Keycloak, our authentication solution, delineating permissions that encapsulate the range of actions and data scopes each role can interact with. For instance, a 'system administrator' might have sweeping access, whereas a 'campaign manager' might have confined access specifically to campaign-related data and functionalities. The 'agent' or 'player' role will have restricted permissions, tailored to game interactions and personal profile management. This segregation ensures that inadvertent data breaches, stemming from excessive permissions, are thwarted. Furthermore, by continuously auditing and refining these roles in response to evolving system requirements and threat landscapes, The Evoke Hub fortifies its position in regard to data integrity and confidentiality.

## Compliance and Certifications
### GDPR Compliance:
- **Objective**: Ensure full adherence to the General Data Protection Regulation (GDPR) standards.
- **Data Transparency**: Implement transparent data processing mechanisms that detail the purpose, extent, and duration of data usage.
- **User Rights Management**: Include functionalities for user rights, encompassing data access, data correction, data portability, and the right to be forgotten.
- **Security Protocols**: Deploy security measures specifically geared towards GDPR requirements, such as data pseudonymization and encryption.
- **Audit Cycle**: Conduct bi-annual internal audits to assess GDPR adherence and adapt to evolving interpretations.

### Global Compliance Adherence:
- **Objective**: Ensure platform flexibility to integrate various international data protection and privacy regulations.
- **Monitoring Mechanism**: Deploy an automated system that tracks global data protection amendments, focusing on relevant regional and country-specific regulations.
- **Integration Protocol**: Establish a set procedure to integrate new compliance findings into operational practices within a 90-day window.

### Certification and External Audits:
- **Objective**: Validate compliance measures against standards established by the World Bank Group, if necessary.
- **External Audit Cycle**: Schedule annual audits, with results documented and action points integrated within subsequent sprints.
- **Certification Pursuit**: If necessary, in consultation with the World Bank Group, identify and attain relevant security and compliance certifications, with a focus on renewing certifications as required.

### Partner Compliance Collaboration:
- **Objective**: Align partners with The Evoke Hub compliance strategies.
- **Framework Details**: Design and disseminate a comprehensive compliance guideline for partners.
- **Training Protocol**: Conduct quarterly compliance training sessions for partners, focusing on updates, best practices, and feedback loops.
- **Communication Channels**: Establish dedicated communication channels (e.g., Slack channels or WhatsApp groups) for compliance-related queries and updates.