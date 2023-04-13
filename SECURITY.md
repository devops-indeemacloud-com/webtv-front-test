# Guidelines for secure software development

**Introduction**

In the development department, we work with both internal and customer assignments. The development department produces everything from simple websites based on our standard CMS to large, tailored business critical systems which digitalizes and automates the everyday life of our customers. We mainly produce web solutions, but also desktop application. We use publishing solutions when it is appropriate, but we also create proprietary tailored solutions.

We work with development of internal and external tools, with dedicated groups for each kind of development. When developing external tools, internal employees work with developing and tailoring of software as a service (SAAS) trough adaptation and development of SharePoint for customers. When developing internal tools, we work on Verity, a tool for customer management. This tool is developed by external developers, who create components which are tested and put together to create Verity. Our Programming language is Python and C#.

To ensure that development does not affect live systems and tools, there are dedicated environments for different parts of development projects.

External development occurs in its own development environment, which is cloud based. Each developer is assigned its own task and has their own VM. Access to development environments is tasked based, where a developer has access to the part of the source code which they need to perform their task, and access is revoked when a task is finalized. For testing of tools and components, there is an assigned test environment, which is cloud based, and synthetic data is used for testing. The production environment is placed in house and hosts the tools and components which have been deployed.

GitHub is used for management and versioning of source code developed by external developers on behalf of Braathe Gruppen.

## Principles for secure development

To ensure that security is evaluated during development, the OWASP Security by Design Principles
[1]
are to be followed:

- Minimize attack surface area
- Establish secure defaults
- Principle of Least Privilege
- Principle of Defense in Depth
- Fail securely
- Don’t trust services
- Separation of duties
- Avoid security by obscurity
- Keep security simple
- Fix security issues correctly

## Rules for secure development

- All development shall be done in the development environment, not in the production environment
- The need for security functionality shall be specified in the beginning of the development project and documented. The needs shall be communicated to the developer as part of their assigned task.
- All developer working for Braathe Gruppen, both internal and external¸ shall have knowledge of best practice for secure development, for example OWASP secure development practices, and be aware of the guidelines set up by Braathe Gruppen for secure development (this document).
- When using external developers, the developer shall only have access to the source code necessary to complete the assigned task.
- Code developed external developers shall be tested by assigned responsible in the development department.
- During development and testing, synthetic or anonymized data shall be used.
- Source code shall be uploaded to GitHub regularly, and version of the code shall be clearly marked here.

## Phases for development projects

1. **Initiation** – projects needs to be anchored and approved internally and, in case of external projects, with the customer through a contract. In this phase, the scope of the project shall be documented, including what the project should solve and what the intended outcomes are.
2. **Planning** – based on the assigned scope, a detailed plan for the project, with milestones to be achieved, and a timeframe for the project.
3. **Execution** – when the initiation and plan has been approved, the can start to be implemented. Throughout the execution, the detailed plan and milestones shall be taken into consideration.
4. **Completion** – once the plan has been conducted, the project can be completed. All deliverables of the project shall be delivered and approved, in the case of external projects. The project shall be evaluated by the members of the project team, to ensure that positive and negative outcomes of the project are documented and learned from.
5. **Changes** – all changes to projects or products shall follow the routine for change management documented below.

## Change management

A change can be identified by a customer or a developer. For internal projects, Scrum is used, where an identified change should be discussed in a sprint, and, if approved, be part of the deliverables for the next sprint. The change should be documented as part of meeting notes and carried through to next sprint. The developers should not make changes without the approval of the customer. Moreover, the developers should not make changes that are against best practice. If a customer asks for a change which is in violation of best practice, the developers should advice the customer against the change to ensure the security of the solution.

There shall be a plan for reversal if the change is not successful.

When it is necessary to make a larger change to a tool or system, the following process shall be followed:

1. **Planning** – identify what should be changed, including need for change, who is responsible for the change, what resources and time is needed to perform the change, how the change should be communicated and performed, what results the change should be verified, what the change will contribute to, and deadline for change to be implemented.
2. **Analyze** – risks should be assessed. What could go wrong and consequences of this should be identified, and how the change will affect other systems. Based on the results of the risk assessment, a decision should be made on the need for the change and whether to implement the change.
3. **Approval** – the project manager should approve the plan for implementing the change. As grounds for approval is the planning and analyzing phase. The project manager should also prioritize the changes, assign who should implement the changes and communicate the change to relevant parties, for example the customer.
4. **Execution** – the resources assigned the task of implementing the change should do so in the development environment.
5. **Testing** – when the change is finished in the development environment, it should be tested in the test environment. The scope of the testing is based on the kind of change, the size of the change and the assessed risk related to the change. The test should be performed on security functionality and as penetration, based on the established need. System acceptance test should also be performed, to ensure that security requirements and principles for secure development have been met.
6. **Implementation** – the change should be implemented into the production environment. The implementation should be made by personnel responsible for the production environment, to avoid system failure.
7. **Completion** – after the implementation, it should be evaluated if the project plan was conducted as plan, document evidence of the change, and potential nonconformities from the plan and how they were handled. If the change was cancelled, the reason should be documented.

NOTE: for changes in third party solutions (such as libraries), a risk assessment shall be conducted. As a part of the risk assessment, potential impact on integrity and continuity should be evaluated. Changes shall have formal approval from the development responsible. After the change, testing should be done to ensure that integrity is intact.

## Environments

Customer projects mainly consists of SharePoint customization. Any change, development or customization shall be conducted in a dedicated environment, which is hosted in SharePoint Online. All solutions shall be tested before being integrated into the production environment.

Internal projects have three dedicated environments. The development environment is cloud based, hosted by Azure, with access available through dedicated VMs. The test environment is also cloud based, and synthetic or anonymized data is used. All code developed by external developers shall be tested in this environment before integration into production environment. The production environment is hosted on-prem.

## Use of external developers

All external developers developing on behalf of Braathe Gruppen shall follow these guidelines and have relevant knowledge of best practice related to secure development, for example OWASP secure development. Moreover, code review shall be performed of the source code produced by the external developers to ensure the quality and accuracy of the code based on the assigned task.

1. [OWASP Security by Design Principles](https://www.owasp.org/index.php/Security_by_Design_Principles)
