<p align="center">
  <a href="#">Corum</a> <br><b>TODO</b>: Get logo<!-- Update title with Logo that Joe Sutton will be doing -->
</p>

<p align="center">
  <i><b>An open, democratic, self governing forum.</b></i>
</p>

---

For my Computer Science coursework project, I intend to create an **open, democratic, self governing** alternative to the forum site [Reddit](https://www.reddit.com/) called **Corum**. 

## Table of Contents
- [The Idea](#the-idea)
  - [A Self Governing Democracy](#a-self-governing-democracy)
  - [Being Open](#being-open)
- [The Investigation](#the-investigation)
  - [Interviews](#interviews)
  - [Focus Groups (The End User)](#focus-groups-the-end-user)
  - [Research into Existing Systems](#research-into-existing-systems)
  - [Computational Methods Required](#computational-methods-required)
- [The Analysis](#the-analysis)
  - [Essential Features](#essential-features)
  - [GUI Design](#gui-design)
  - [Software Requirements and technologies](#software-requirements-and-technologies)
  - [Success Criteria](#success-criteria)
  - [Limitations of the Project](#limitations-of-the-project)

## The Idea

### A Self Governing Democracy
Being self governed means that those that are being governed, govern themselves and each other. There is no higher authority that makes decisions. In the case of a forum site, it is solely up to the users of the forum as a collective to decide what kind of content belongs on it. **Corum** will be designed and developed from the ground up following this principle.

Just like in a real democracy, the users will be given one vote each on every post, and each vote will be treated equally. Up until now, this sounds very similar to [Reddit](https://www.reddit.com/). The way that **Corum** differentiates itself is that the vote that users are given actually means something. If users generally vote positively on a post, then the post will remain. However, if a post gets a mostly negative response, it will be automatically removed from the sub forum that it was posted in. This means that if someone posts something that isn't nice or doesn't belong on the forum, it will be removed by the users themselves, _fairly_, instead of having a moderator remove it based on their own view of the post. 

The idea of having self governing forum software means that the role of forum moderators does not need to exist.

This is a good thing because:
* It means that the forum require less maintenance. (Less man power required)
* The users of the forum are responsible for maintaining it. (More **neutral** and **fair**)
* The removal of the moderator role keeps code complexity down. (Only one type of user account needs to exist)

### Being Open
While it is one thing to keep the platform itself democratic, it is also important that the management and development is kept democratic as well. As of 1st September 2017, after many years of being open source, [Reddit has decided to stop developing in the open](https://www.reddit.com/r/programming/comments/6xh3xp/reddits_main_code_is_no_longer_opensource). As an advocate for open source , I believe that Reddit has made the wrong decision. 

Being open source means that anyone who wants to contribute can. They can easily propose new features, report and/or fix bugs, and freely read the source code knowing that anyone else can too. Developers cannot go hiding things in the source code like unwarranted tracking etc. Every decision made by the project is made _with_ the users, not _for_ the users.

This means that ultimately, the users of the forum decide the direction that **Corum** takes in all aspects.

## The Investigation

### Interviews
I will be interviewing people that I know are users of forum sites such as Reddit to get an idea of what they like and don't like about a certain forum. This will help me understand what features I should borrow from others, what features I should leave out that are present on other sites, and what features that could be added that don't currently exist.

#### Questions
1. What Forum are we talking about?
1. What features do you like?
1. What features do you not like?
1. What features do you use regularly?
1. What features do you not use?
1. What features would like to see in the future? 

#### Answers

> test

**----------------------------------------TODO----------------------------------------**

### Focus Groups (The End User)
In the case of a forum like Reddit, as evident from the [above interviews](#interviews), the end user / audience of a project like this can be wide. For example, on Reddit, there are sub forums ranging from politics to comedy to gaming to programming. Also, there are two different types of users within each sub forum; the users that regularly visit and actively engage in discussion, and there are the users that will only ever visit the forum when directed from a Google search. In the following sub sections, I will try and outline what **Corum** should do to try and cater to the needs of average users.
 
#### Users That Have Different Interests
Users of the site will have different interests, which means that **Corum** needs to work well for all, and the site should not be designed for one type of content. Good computer literacy should not be a given, so the interface should be layed out in a simple manner. Colour should also be kept to a minimal to keep the site looking neutral.

#### Users That Use the Forum Differently
For users that have never visited or rarely visit the site, the UI and UX shouldn't be too surprising so the this type of user can get whatever information they are looking for quickly and efficiently. Also, the site should work equally as well for returning, regular users. This means that the site should keep a similar structure and look throughout, and should not get in the way.  

### Research into Existing Systems

#### [Reddit](https://reddit.com) (Proprietary [as of September 2017](#being-open))
Placeholder.

#### [phpBB](https://www.phpbb.com/) (Open source)
Placeholder.

#### [MyBB](https://mybb.com/) (Open Source)
Placeholder.

#### [IPBoard](https://invisioncommunity.com/) (Proprietary) 
Placeholder.

#### [vBulletin](https://www.vbulletin.com/) (Proprietary)
Placeholder.

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
- Header (Top of the page)
  - Top left - Logo linking to homepage
  - Top Right - Login/logout/sign-up button/link
- Navigation (Left side under Header on desktop)
  - Sub-forum subscriptions at the top (Called Favorites)
  - All other sub-forums below (Decide on order / if it is a user option or not)
    - Search bar of all sub-forums??
  - Highlight the currently selected sub-forum in the nav
- Current sub-forum (Render selection message with an arrow to nav upon first load/after login when no sub-forum is selected)
  - Give user sort selection (newest / most popular)
  - Load first _10/15?_ links/threads from selected sub-forum
  - Each post
    - Current amount of up votes
    - Title -> links to link/post
    - Time posted??
    - User that posted it??
    - Whether it is a link or a thread (in brackets)
- Selected post (Fills the space where the sub-forum was)
  - Title
  - Time Posted
  - User that posted it
  - Content (None if it is a link)
  - Comments

#### General Features
- Login System
  - Account Creation / Sign-up (username, password)
  - Require login to post/comment
- Self governing voting system
  - Each user gets a single vote (up or down) for each post (like Reddit)
  - Posts with positive votes rise to the top (popularity sort)
  - Posts with negative votes go to the bottom (popularity sort)
  - Posts that get -25 (due to change) 'votes' are removed from the sub-forum
    - This point is the key to the self governing system, as the features before it are borrowed from Reddit.
    - Theoretically, no matter how popular the sub-forum is, if more people like the post that don't, the post will remain. 
    - If more people dislike a post than like it (within the vote threshold) then it will be removed automatically.
    - This means, that instead of a moderator moderating the sub-forum, the users do it themselves. This comes back to the point for neutrality and fairness, as the sub-forum community as a whole gets to decide what is allowed on the sub-forum.

**TODO**: Clean up and add justifications for decisions

### GUI Design

#### Sub-forum not selected
![Sub-forum not selected](/docs/images/sub-forum-not-selected.jpg)

#### Sub-forum selected
![Sub-forum selected](/docs/images/sub-forum-selected.jpg)

#### Post view
![Post view](/docs/images/post-view.jpg)

#### New post
![New post](/docs/images/new-post.jpg)

#### Login Page
![Login Page](/docs/images/login.jpg)

#### Sign-up Page
![Sign-up Page](/docs/images/sign-up.jpg)

### Software Requirements and technologies
**ALL** of the code and technologies that are used for this project will be open source.

- **Language** - [ES6](http://es6-features.org) + some [ES2017](http://node.green/#ES2017)
- **Runtime for development** - [Node.js 8.x.x](https://nodejs.org) and [Chrome](https://www.google.com/chrome/browser/desktop/index.html)
- **Package Manager** - [Yarn](https://yarnpkg.com)
- **Task Runner** - [NPM Scripts](https://docs.npmjs.com/misc/scripts)
- **Starting point** - [create-react-app](https://github.com/facebookincubator/create-react-app)
- **View** - [react](https://facebook.github.io/react)
- **CSS-in-JS** - [styled-components](https://www.styled-components.com)
- **Data Fetching (GraphQL)** - [Apollo Client with React bindings](http://dev.apollodata.com/react/)
- **Client-side Routing** - [react-router](https://reacttraining.com/react-router/)
- **Module Bundler** - [webpack](https://webpack.js.org/)
- **JS Compiler** - [babel](https://babeljs.io/)
- **JS Linter** - [ESLint](https://eslint.org/)
- **Unit Testing** - [Jest](https://facebook.github.io/jest/)
- **(Type Checker)** - [Flow](https://flow.org/)

The project is based on a full JavaScript stack, so it should be able to be developed and test on any OS that Node.js supports. However, development will be happening on [Solus](https://solus-project.com/). (A GNU/Linux distribution)

As the build process produces static files, the production version of the project can be hosted and served from any HTTP server.

Also, with the help of [babel](https://babeljs.io/), I can develop using new JavaScript features that are not in older versions of browsers, but will work perfectly fine in these older browsers after compilation.

### Success Criteria
What determines success for the project?

### Limitations of the Project
- Account Recovery
- Creation of new sub-forums?