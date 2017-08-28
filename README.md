<p align="center">
  <a href="#">Corum</a> <br><b>TODO</b>: Get logo<!-- Update title with Logo that Joe Sutton will be doing -->
</p>

<p align="center">
  <i><b>Democratic, self governing forum software.</b></i>
</p>

---

For my Computer Science coursework project, I intend to create a **self governing, democratic** alternative to the forum site [Reddit](https://www.reddit.com/) called **Corum**. 
Also, instead of being developed for the purpose of hosting the site for a single company like Reddit is, it will be aimed at those who want to host their own forum under their own domain, similar to solutions such as [phpBB](https://www.phpbb.com/), [MyBB](https://mybb.com/) etc. 
However, unlike these solutions, Corum will be built upon modern technologies and ideas. The details of these technologies can be found in the [Software Requirements and technologies](#software-requirements-and-technologies) section.

## Table of Contents
- [The Idea](#the-idea)
  - [A Self Governing Democracy](#a-self-governing-democracy)
- [The Investigation](#the-investigation)
  - [Focus Groups (The End User)](#focus-groups-the-end-user)
  - [Interviews](#interviews)
  - [Research into Existing Systems](#research-into-existing-systems)
  - [Computational Methods Required](#computational-methods-required)
- [The Analysis](#the-analysis)
  - [Essential Features](#essential-features)
  - [Software Requirements and technologies](#software-requirements-and-technologies)
  - [Success Criteria](#success-criteria)
  - [Limitations of the Project](#limitations-of-the-project)

## The Idea

### A Self Governing Democracy
The idea of having self governing forum software means that the role of the forum moderator does not need to exist. 
This is a good thing because:
* It means that the forum require less maintenance. (Less man power required)
* The users of the forum are responsible for maintaining it. (More **neutral** and **fair**)
* The removal of the moderator role keeps code complexity down. (Only 1 type of user account needs to exist)

**TODO**: reason for creation - lower the burden of maintaining a forum + web app type of forum

## The Investigation

### Focus Groups (The End User)
Two possible types of end users:
- The possible forum admin looking for new forum software
- The end user of individual forums

### Interviews
- Reason for interviewing people (What kind of people as well)
- List of Questions that could have been asked
- List of answers (3/4 for each question)

### Research into Existing Systems
List of systems to research (5 most popular):
- [phpBB](https://www.phpbb.com/) - GPL
- [bbPress](https://bbpress.org/) - GPL
- [MyBB](https://mybb.com/) - LGPL
- [IPBoard](https://invisioncommunity.com/) - Proprietary
- [vBulletin](https://www.vbulletin.com/) - Proprietary

### Computational Methods Required
List given by Maria (Add more as seen fit)
- Decomposition
- Abstraction
- Complex calculations
- Pattern matching
- Sorting and searching
- Thinking procedurally
- Needs to analyse large amounts of data to find patterns in it (data mining)
- Needs large storage that needs to be accessed quickly
- Uses backtracking (going back in a program to find an alternative solution
- Uses Heuristics
- Uses visualization to solve problems.
- Needs to process data in real time.
- Use of divide and conquer.


## The Analysis

### Essential Features

#### Page Layout
- Header (Top of the page, 70-80% page width on desktop)
  - Top left - Logo linking to homepage
  - Top Right - Login/logout button/link
- Navigation (Left/right side under Header on desktop, hamburger menu on mobile)
  - Sub-forum subscriptions at the top (Called Favorites)
  - All other sub-forums below (Decide on order / if it is a user option or not)
  - Highlight the currently selected sub-forum in the nav
- Current sub-forum (Render selection message with an arrow to nav upon first load/after login)
  - Give user sort selection (**Default**: newest, then most popular)
  - Load first _10/15?_ links/threads from selected sub-forum
  - Each post
    - Current amount of up votes
    - Title -> links to link/post
    - Time posted?
    - User that posted it?
    - Whether it is a link or a thread (in brackets)
- Selected post (Fills the space where the sub-forum was)
  - Title
  - Time Posted
  - User that posted it
  - Content (None if it is a link)
  - Comments

#### General Features
- Login System
  - Account Creation (username, email, password)
  - Require login to post/comment
- Self governing voting system
  - Each user gets a single vote (up or down) for each post (like Reddit)
  - Posts with positive votes rise to the top (popularity sort)
  - Posts with negative votes go to the bottom (popularity sort)
  - Posts that get -25 or maybe -1 after 24 hours (due to change) 'votes' are removed from the sub-forum
    - This point is the key to the self governing system, as the features before it are borrowed from Reddit.
    - Theoretically, no matter how popular the sub-forum is, if more people like the post that don't, the post will remain. 
    - If more people dislike a post than like it (within the vote threshold) then it will be removed automatically.
    - This means, that instead of a sub-forum moderator moderating the sub-forum, the users do it themselves. This comes back to my point for neutrality and fairness, as the sub-forum community as a whole gets to decide what is allowed on the sub-forum.

**TODO**: Clean up and add justifications for decisions

### Software Requirements and technologies

#### Software Requirements to Run/Develop Corum
NodeJS version + npm/yarn (Possibly more if backend plan doesn't pan out)

#### Technologies to Use
Front End:
 - **Basis** - create-react-app
- **View** - React / Preact with compat (Decrease bundle size)
- **css in js** - Emotion / styled-components
- **Data Fetching (GraphQL)** - Apollo Client
- **Client-side Routing** - React-Router
- **Bundler** - Webpack

Back End??? (Possibility of using graphcool / auth0):
- **Runtime** - Node.js 8.x.x
- **Data Serving (GraphQL)** - Apollo Server on Express
- **Database (NoSQL / SQL?)** - MongoDB / PostreSQL
- **Logger** - Pino

Full Stack:
- **Language** - ES2017 - maybe ESNext features as well
- **Package Manager** - Yarn / NPM 5
- **Unit Testing** - Jest
- **Task Runner** - NPM Scripts
- **Transpiler** - Babel
- **Type Checker??** - Flow
- **Configuration Manager** - dotenv

**TODO**: 
- Clean up and make decisions on software used.
- specify hardware requirements (e.g. both for forum host and end user)

### Success Criteria
What determines success for the project?

### Limitations of the Project
- Account Recovery

