# ELzoboon CRM - Front-End

![image](https://github.com/Ahmed-Abou-Emran/ELzoboon-CRM/assets/64327685/0366e407-ca32-42e5-9fbf-95fc5a8fe560)

## Project Overview

**ELzoboon CRM** is an AI-based Customer Relationship Management (CRM) system that harnesses the power of machine learning to enhance traditional CRMs. This repository showcases the specific components and features that I personally worked on as part of the graduation project. For a complete view of the project, please refer to the full repository.

[Full Documentation](https://drive.google.com/file/d/1U1iUBRIwN0l3Q3gQoBQ6UMpk1FCC8LCd/view?usp=drive_link)
 

## My Role

In this project, I held a pivotal role in developing the front-end of the ELzoboon CRM application. I focused on creating captivating user interfaces while ensuring optimal performance and functionality. My responsibilities encompassed:

- Designing and implementing user interfaces for various application modules.
- Integrating state management solutions to enhance scalability and maintainability.
- Collaborating with the team to ensure seamless integration between front-end and back-end components.
- Developing reusable components to improve code efficiency and maintain consistency.

## Technologies and Tools Used

- React: A JavaScript library for building user interfaces.
- Redux: Initially used for state management, I transitioned to remote state management.
- React Query: Utilized for efficient remote data fetching and management.
- Other relevant front-end technologies.

## Packages Used

1. **emailjs**: Used for sending emails, enhancing communication features within the CRM.
2. **supabase**: Leveraged for database interactions, facilitating data storage and retrieval.
3. **redux**: Initially implemented for state management, later transitioned for remote state management.
4. **react-query**: Employed for optimized remote data fetching, improving application performance.
5. **React Router**: Implemented for navigation and routing within the application.
6. **react-beautiful-dnd**: Integrated to enable smooth and intuitive drag-and-drop interactions.
7. **react-hook-form**: Utilized for simplifying form management and validation.
8. **react-hot-toast**: Implemented for displaying non-intrusive, toast-style notifications.
9. **styled-components**: Used for styling components with scoped CSS for enhanced modularity.

## Pages that I Worked On

### Contacts Page

![image](https://github.com/Ahmed-Abou-Emran/ELzoboon-CRM/assets/64327685/d913bb6a-2841-41d4-82a1-dd72edcda6a0)

The contacts page lets you manage and track contact information effectively:

- **Left Section - Contacts Cards**: Lists contact cards on the left, providing brief summaries. Clicking a card displays detailed information on the right.

- **Adding a New Contact**: Click "Add Contact" to input new contact details and save them to the CRM.

- **Filter Contacts**: Apply filters based on attributes like name and industry to quickly find specific contacts.

- **Right Section - Contact Details**: Displays detailed contact information. Edit contact data and preview customer details.

- **Contact Transaction History - Timeline**: Access a chronological interaction history to track engagement with contacts.
  
![image](https://github.com/Ahmed-Abou-Emran/ELzoboon-CRM/assets/64327685/5f1483a1-bc28-479c-adc7-e5714d23f0e9)
![image](https://github.com/Ahmed-Abou-Emran/ELzoboon-CRM/assets/64327685/00b2dc3a-7ee7-45f5-a794-fbec3c3fa85e)
![image](https://github.com/Ahmed-Abou-Emran/ELzoboon-CRM/assets/64327685/bc404a63-56d3-4424-b44e-bef69c7b6908)



### Deals Page

![image](https://github.com/Ahmed-Abou-Emran/ELzoboon-CRM/assets/64327685/e842923d-f7a2-4f26-8016-97ce91d6c332)
![image](https://github.com/Ahmed-Abou-Emran/ELzoboon-CRM/assets/64327685/bd6a9663-f82b-4829-8b89-1ed97f235652)


The Deals page uses a Kanban board format with four columns:

1. **Prospecting**: Early sales stages for potential leads.

2. **Negotiation**: Deals being actively pursued and negotiated.

3. **Closed-Won**: Successfully closed deals.

4. **Closed-Lost**: Deals that were not successfully closed.

- **Adding a New Deal**: Click "Add Deal," input deal details, and save. New deals appear in the "Prospecting" column.

- **Moving Deals**: Drag and drop deal cards to update their progress and stage.

- **Dashboard Integration**: Changes on the Deals page reflect automatically on the Dashboard page for real-time updates.

### Dashboard

![image](https://github.com/Ahmed-Abou-Emran/ELzoboon-CRM/assets/64327685/64c2793c-1a69-458d-8f75-08ae99369fac)

The dashboard provides an overview of CRM activities with three main sections:

1. **Recent Actions**: Summarizes recent deals, making it easy to stay updated on sales activities.

2. **Recent Orders**: Displays recent customer orders and their status, aiding in sales tracking.

3. **Summary Reports**: Offers summarized business performance reports, including income, sales, expenses, and a conversion funnel report.


## Lessons Learned
I learnt a lot from working in this project, but those are the most important lessons that I learned:
- **Remote vs Client date**: At the beginning, I wasn't aware of the difference between remote data (data from a server) and client data (data already in the app). So, like the norm for many medium to large projects, I started with Redux. However, as I grasped the distinction between these data types, I realized something important. For our project, Redux wasn't necessary at all because most of our data came from the server. This realization led me to use a more fitting approach for managing remote data, making the whole process simpler and more effective.
- **Package Management**: It's very crucial to decide which packages you'll use before diving into a medium or big React project. This helps everyone work better together and avoids chaos. If each person picks their favorite packages, the project could become messy, and the final app might be slow and hard to handle. So, choosing packages smartly is like building a strong foundation for a smooth project that's easy to manage and work on.
  
