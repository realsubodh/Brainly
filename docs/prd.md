## Project Requirement Document

Version V1  
Status : Draft  
Author : Subodh Singh  
Audience : Engineers(you), future collaborators, my interviewers  

### Problem Statement
Being a modern developer and probably a good researcher I consume a large volume of valuable content across platforms such as YouTube, GitHub, Twitter, blogs, and documentation sites. While tools like Notion, Google Keep, or bookmarks technically solve the problem of saving links, they introduce secondary problems:  
- Over-cluttered workspaces  
- Mixing high-signal content with low-signal notes  
- Accidental doomscrolling  
- No clear intent when opening the tool  

As a result, users often save content but never revisit it, defeating the purpose of a “second brain”.  
🔑 Insight:  
The problem is not “saving links”.  
The problem is **retrieving focus and intent**.  

### Product Vision  
Brainly is a personal, intentional “second brain” that allows users to:  
Save only meaningful content.    
Avoid distraction-heavy environments.  
Share their curated knowledge publicly in a controlled, read-only manner.  

Brainly is not a notes app.  
Brainly is not a productivity suite.  
Brainly is a focused storage & sharing system.  
  
### Product Goals
Allow users to securely store curated links.  
Ensure fast access to all saved content.  
Enable public, read-only sharing of a user’s “second brain”.  
Keep the system minimal and distraction-free.  

### Functional Requirements

#### Authentication
FR-1: Users must be able to sign up using email and password.  
FR-2: Users must be able to sign in securely.  
FR-3: Authentication must persist across sessions.  
#### Content Management
FR-4: Authenticated users can add new content.  
FR-5: Content must include at minimum:  
      URL  
      Title (manual or derived)  
      Creation timestamp  
FR-6: Users can fetch all their saved content in one request.  
FR-7: Users can delete content they own.  
#### Sharing
FR-8: Users can generate a public shareable link.  
FR-9: Share links must provide **read-only access**.  
FR-10: Public viewers must not require authentication.  
FR-11: Share links must not expose user identity or private metadata.  

### UX Principles
Minimal screens.  
No feeds.  
No recommendations.  
No notifications.   
Clear intent on every page.   

If a user opens Brainly, they already know why they are there.

### Technical Constraints
MERN stack with TypeScript everywhere.  
REST-based API.  
Stateless backend.  
MongoDB as primary data store.  
JWT-based authentication.  

### Final Notes
I am making this Brainly v1 just only for growth in the domain.  
I am building this to just:  
- learn basics System Design.  
- enforce backend discipline.  
- develop strong Typescript intution.  
- try to create a portfolio project (cum Product) that scales conceptually.



