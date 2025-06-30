# Internal API Tooling

## 📋 Description

Set of **5 backend services** developed through **personal initiative** over 1 year, complementing my main responsibilities as a frontend developer. These services (**7 endpoints** total) were created to optimize internal processes and reduce backend team workload during high-demand periods.

The backend team often experiences workload spikes that they cannot fully cover. In some cases, this would result in delays for features needed on the frontend or force the use of mock data in production until backend support became available. These services helped avoid such bottlenecks by enabling critical frontend functionality without compromising delivery timelines.

> **Note:** Code has been obfuscated for confidentiality. Database names, tables, and sensitive information have been replaced with generic values.

## 💡 Project Purpose

This project demonstrates three key competencies:

### 🎯 **Initiative**
- Proactive identification of operational bottlenecks (backend workload)
- Autonomous development without formal task assignment
- Anticipatory solutions for recurring team problems

### 🔄 **Versatility**
- Successful transition from Frontend to Backend
- Mastery of technologies outside my main stack
- Adaptability to different technical contexts

### 📊 **Results-Oriented**
- Measurable reduction in backend team workload
- Direct impact on operational efficiency

## 🚀 Features

- **5 independent services** with specific functionalities
- **7 RESTful endpoints** well-documented
- **Scalable and maintainable** architecture
- **Multi-database integration**
- **Authorization** implemented

## 🛠️ Technologies Used

- **Backend:** Node.js / Nest.js
- **Database:** MySQL(MariaDB)
- **Authentication:** JWT
- **Validation:** Custom middleware
- **Logging:** Nest.js logging system
- **Deployment:** Azure Cloud Services

## 📊 Implemented Services

### 1. Alliances with Web APIs
- **Endpoints:** 2
- **Functionality:** Filters and retrieves only alliance data relevant to Web API integrations, excluding non-integrated partners
- **Value:** Reduces data payload and improves frontend LCP (Largest Contentful Paint) performance.
 
### 2. Users connections by date
- **Endpoints:** 2  
- **Functionality:** Display user connections by date
- **Value:** Supports administrative analysis and decision-making

### 3. Destination
- **Endpoints:** 1
- **Functionality:** Identifies and displays users' most frequent destinations based on activity data
- **Value:** Informs sales and marketing strategies

### 4. Rating Service
- **Endpoints:** 1
- **Functionality:** Enables user evaluations and feedback submissions
- **Value:** Quality and satisfaction insights

### 5. Shipments Service
- **Endpoints:** 1
- **Functionality:** Retrieves shipment data for users, filtered to include only those originating from API-integrated sources
- **Value:** Reduces payload and improves frontend LCP performance.

## 🏗️ Architecture
The project is primarily written in TypeScript to leverage its development advantages. While I initially considered using Express.js for its simplicity and alignment with the project’s scope, I ultimately chose NestJS as the backend framework. The decision was driven by its architectural similarity to our company’s main backend stack (C# and .NET), which made code reviews with the team faster and more efficient.

The database used is MariaDB, as it's the standard within the company.

Authentication is handled via JWT. I didn’t request secret keys for login, knowing they would likely be denied. Instead, I took the initiative to use an existing internal service—/checksession—which validates the token. It returns true if the token is valid and active, or false otherwise. This check is performed in middleware before each request. If the token is invalid or inactive, a 401 Unauthorized error is returned.
  
## 🎯For Recruiters and Tech Leads
This project represents more than code: it's evidence of technical leadership and ownership mindset.
What does this project demonstrate?
- ✅ Opportunity identification - Detected bottlenecks without being assigned
- ✅ Autonomous execution - Developed complete solutions end-to-end
- ✅ Measurable impact - Generated direct value to team and organization
- ✅ Technical versatility - Successfully worked outside comfort zone

### Evidenced competencies:
- Proactive problem-solving
- Systems architecture
- Complex database management
- Full-stack development
- Product mindset

If you're looking for someone who doesn't just execute tasks, but identifies opportunities and converts them into value, this project demonstrates it.
## 📞 Contact
If you have questions about the technical implementation or context of this project, feel free to contact me.
