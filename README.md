<p align="center">
  <a href="#">Corum</a> <br><b>TODO</b>: Get logo<!-- Update title with Logo that Joe Sutton will be doing -->
</p>

<p align="center">
  <i><b>An open, democratic, self governing forum.</b></i>
</p>

---

For my Computer Science coursework project, I intend to create an **open, democratic, self governing, minimalist** alternative to the forum site [Reddit](https://www.reddit.com/) called **Corum**. 

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
Being self governed means that those that are being governed, govern themselves and each other. There is no higher authority that makes decisions. In the case of a forum site, it is solely up to the users of the forum as a collective to decide what kind of content belongs on it. Corum will be designed and developed from the ground up following this principle.

Just like in a real democracy, the users will be given one vote each on every post, and each vote will be treated equally. Up until now, this sounds very similar to [Reddit](https://www.reddit.com/). The way that Corum differentiates itself is that the vote that users are given actually means something. If users generally vote positively on a post, then the post will remain. However, if a post gets a mostly negative response, it will be automatically removed from the sub forum that it was posted in. This means that if someone posts something that isn't nice or doesn't belong on the forum, it will be removed by the users themselves, _fairly_, instead of having a moderator remove it based on their own view of the post. 

The idea of having self governing forum software means that the role of forum moderators does not need to exist.

This is a good thing because:
* It means that the forum require less maintenance. (Less man power required)
* The users of the forum are responsible for maintaining it. (More **neutral** and **fair**)
* The removal of the moderator role keeps code complexity down. (Only one type of user account needs to exist)

### Being Open
While it is one thing to keep the platform itself democratic, it is also important that the management and development is kept democratic as well. As of 1st September 2017, after many years of being open source, [Reddit has decided to stop developing in the open](https://www.reddit.com/r/programming/comments/6xh3xp/reddits_main_code_is_no_longer_opensource). As an advocate for open source , I believe that Reddit has made the wrong decision. 

Being open source means that anyone who wants to contribute can. They can easily propose new features, report and/or fix bugs, and freely read the source code knowing that anyone else can too. Developers cannot go hiding things in the source code like unwarranted tracking etc. Every decision made by the project is made _with_ the users, not _for_ the users.

This means that ultimately, the users of the forum decide the direction that Corum takes in all aspects.


## The Investigation

### Interviews
I will be interviewing people that I know are users of Reddit to get an idea of what they like and don't like about a certain forum. This will help me understand what features I should borrow from others, what features I should leave out that are present on other sites, and what features that could be added that don't currently exist.

#### Questions
1. What do you like about it?
1. What don't you like about it?
1. What do you use regularly on it?
1. What do you not use on it?
1. What would like to see in the future on it? 

#### Answers

##### Interviewee 1
1. > I like the post voting system and how popular articles raise to the top of each sub-reddit
1. > I don't like the look of it. I don't think it looks very modern.
1. > When browsing a sub-reddit and see a post I like, I almost always look what site the link is from.
1. > I never look at the name of the author of the post on the main sub-reddit.
1. > I would like a more fluid experience using it. I want it to feel like im using an app.

##### Interviewee 2
1. > The fact that I can see instantly how popular a post is, which isn't a feature of many forum websites.
1. > I don't like that a sub-reddit can choose what it looks like, I find it very jarring to my experience when switching to a sub-reddit that looks totally different than the last.
1. > I use the navigation bar at the top a lot as I am always moving between sub-forums
1. > I never really look at the information that is on the right side of every sub-forum, I only go to a sub-forum to look at what new has been posted.
1. > I post quite a lot, so it would be nice if the interface of creating a new post was simpler.

##### Interviewee 3
1. > I like that I can subscribe to particular sub-forums and have them easily accessible. 
1. > I think that there is too much information about each post of sub-forums main pages. (time posted etc.)
1. > I use the sort functionality quite a lot to see whats new, but also what is popular.
1. > I don't really look at or care about the number of people that are current online on a sub-reddit. I would rather a cleaner interface.
1. > I would like to see a major redesign of the whole site, it doesn't feel modern at all anymore.

##### Interviewee 4
1. > I like that other people can comment on posts, with their own opinions.
1. > I don't like the fact that moderators can remove whatever they please.
1. > The comment section on each post, it often is of similar value to the actual post.
1. > I think the profile preference section is way too complicated, and it doesn't need to be.
1. > For Reddit to open source their code again, I don't like the fact that I cannot see the source code of software I use regularly.


### Focus Groups (The End User)
In the case of a forum like Reddit, as evident from the [above interviews](#interviews), the end user / audience of a project like this can be wide. For example, on Reddit, there are sub forums ranging from politics to comedy to gaming to programming. Also, there are two different types of users within each sub forum; the users that regularly visit and actively engage in discussion, and there are the users that will only ever visit the forum when directed from a Google search. In the following sub sections, I will try and outline what Corum should do to try and cater to the needs of average users.
 
#### Users That Have Different Interests
Users of the site will have different interests, which means that Corum needs to work well for all, and the site should not be designed for one type of content. Good computer literacy should not be a given, so the interface should be layed out in a simple manner. Colour should also be kept to a minimal to keep the site looking neutral.

#### Users That Use the Forum Differently
For users that have never visited or rarely visit the site, the UI and UX shouldn't be too surprising so the this type of user can get whatever information they are looking for quickly and efficiently. Also, the site should work equally as well for returning, regular users. This means that the site should keep a similar structure and look throughout, and should not get in the way.  

### Research into Existing Systems

#### [Reddit](https://reddit.com) (Proprietary [as of September 2017](#being-open))
**Reddit** is a very popular forum site that is home to a wide range of topics, where people can post links to other websites, or just have discussions actually on the site. Users can up-vote or down-vote posts if they like or dislike them. This is where the inspiration of Corum came from, however I thought that the vote that the user is given on each post could be given more value.

As a regular reddit user, I have had plenty of time to get a grasp of its features and what it feels like to use. As Reddit is a major inspiration for this project, a lot of its features will be borrowed. This is on purpose, as the target audience of Corum will be mainly those who have already experienced Reddit. This will mean that it will feel familiar and it will be easy to get started.

While the idea of Reddit is quite simple, in my opinion and many others (as shown by the [interviews](#interviews) with fellow Reddit users) the user interface is cluttered, with many features that are rarely used such as the amount of people online etc. From my use and further research into the site, Corum will strive to be a simpler version of Reddit.

#### [Hacker News](https://news.ycombinator.com/) (Proprietary)
**Hacker News** is a similar site to Reddit, however it is a lot simpler. There are no sub-forums, as it is a site dedicated only for computer science related topics such as programming. The user interface is very simple, which means that it doesn't get in the users way. However, I believe that it is too simple.

I believe that there is space in the forum 'business' for a site that is simpler than Reddit, but one with more features than Hacker News (As it is only for developers). This is where Corum could fit in.

#### [phpBB](https://www.phpbb.com/) (Open source)
**phpBB** has different goals than Corum or Reddit. Instead of being a designed to run from one website, it is designed to be used by anyone who wants to setup their own forum. An example of where phpBB is deployed is at [Solus](https://solus-project.com/forums/). This can be seen when looking at the pages footer. 

phpBB can be themed so that it can fit the style of any website it is being run on. This means that the look or layout of phpBB isn't really an issue as it can be easily altered. However, as Corum will be a more similar project to Reddit, Corum does not need this extra complexity of being able to change its looks. I like the simplicity of Solus' forum theme, and Corum will take some inspiration from its looks.

### Computational Methods Required
Here is a list of computational methods that could be used to create Corum, as well as how they will be useful.

#### Decomposition
By using [React](https://facebook.github.io/react), I will be able to break the UI down into small, reusable components. This allows developers to create large projects while keeping it manageable and maintainable.

#### Abstraction
Also with the aid of [React](https://facebook.github.io/react), I will be able to compose smaller components into larger components. (For example, creating button components, and then composing multiple button components into a header component) This means that the complexity of each component can be abstracted away when taking a high level view of composite components.

#### Pattern matching
As shown in the [GUI design section](#gui-design), I will attempt to implement search functionality into the navigation part of the application. This will require pattern matching. Furthermore, as this project will make use of client-side routing with [react-router](https://reacttraining.com/react-router/), pattern matching is required to direct the user to the correct page.

#### Sorting and searching
Related to the method above, searching will be used into the searchable navigation. Sorting will also be used, as the user will be able to select the order in which they see posts in the sub-forum.

#### Use of Multiple Programming Paradigms
##### Object Oriented (OO)
Unlike languages such as Java or C++ that have class based OO, JavaScript uses 
[prototypical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
Although JavaScript's prototype chain is more powerful and flexible, it used to be hard for beginners to use that came from a classical OO background. With the introduction of the 
[class syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 
in ES2015, which is just syntactic sugar, JavaScript OO is much easier to approach. If and when classes are used in the source code, it will be using the newer ES2015 syntax.

In React, Components that have 
[state or use life cycle hooks](https://facebook.github.io/react/docs/state-and-lifecycle.html) 
must use the ES2015 class syntax and extend the base 
[Component](https://facebook.github.io/react/docs/react-component.html) 
class that is provided by the library. This takes advantage of the OO paradigm's easy state encapsulation. Also, some libraries that I intend to use such as Apollo Client 
([As described here](#software-requirements-and-technologies)) 
use the OO 
[new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) 
keyword to create new instances of objects.
 
##### Declarative
On Reacts front page, it shows that one of its main selling points is that it allows developers to write declarative UI code. This means that when I am developing, I do not have to worry about _how_ my components will get rendered to the [DOM (Document Object Model)](https://en.wikipedia.org/wiki/Document_Object_Model). I just tell React _what_ I want to render.

##### Functional
Modern JavaScript provides great tools to build software in a functional paradigm, this includes features such as:

- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) - Allows for concise function declarations and clean [function currying](https://en.wikipedia.org/wiki/Currying). For example:

```javascript
// Regular function expression - no currying
const concatRegular = function(string1, string2) {
  return `${string1} ${string2}`;
}
const joinedTextRegular = concatRegular("Hello," "world!"); // "Hello, world!"

// Arrow function expression with currying
const concatArrow = string1 => string2 => `${string1} ${string2}`;
const joinedTextArrow = concatArrow("Hello")("world!"); // "Hello, world!"
```

- [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 
and 
[Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) 
(Not perfect, reference only so objects + arrays can be mutated, use 
[Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 
(for both objects and arrays) / something like [Immutable.js](http://facebook.github.io/immutable-js/))

#### Real Time Data Processing
Placeholder.

**TODO: ADD MORE COMPUTATIONAL METHODS THAT CAN BE USED**

## The Analysis

### Essential Features

#### Page Layout
- Header (Top of the page)
  - Top left - Logo linking to homepage
  - Top Right - Login/logout/sign-up button/link (Should be very obvious)
- Navigation (Left side under Header on desktop, think this is better placement than Reddit at the top)
  - Sub-forum subscriptions at the top (Called Favorites, users can access their favorites first)
  - All other sub-forums below (Search bar of all sub-forums for easy movement around the site)
  - Highlight the currently selected sub-forum in the nav (So the user can easily see where they are)
- Current sub-forum (Render selection message with an arrow to nav upon first load/after login when no sub-forum is selected - gives first time user some instructions on what to do)
  - Give user sort selection (newest / most popular)
  - Load first _10/15?_ links/threads from selected sub-forum
  - Each post
    - Current amount of up votes (Shows popularity of post)
    - Title -> links to link/post
    - Whether it is a link or a thread (in brackets, shows if it is an external link and where to)
- Selected post (Fills the space where the sub-forum was)
  - Title
  - Time Posted
  - User that posted it
  - Content (None if it is a link)
  - Comments (For discussion of the post)

#### General Features
- Login System
  - Account Creation / Sign-up (username, password)
  - Require login to post/comment (So that other users know who posted / said what)
- Self governing voting system
  - Each user gets a single vote (up or down) for each post (like Reddit)
  - Posts with positive votes rise to the top (popularity sort)
  - Posts with negative votes go to the bottom (popularity sort)
  - Posts that get -25 (due to change) 'votes' are removed from the sub-forum
    - This point is the key to the self governing system, as the features before it are borrowed from Reddit.
    - Theoretically, no matter how popular the sub-forum is, if more people like the post that don't, the post will remain. 
    - If more people dislike a post than like it (within the vote threshold) then it will be removed automatically.
    - This means, that instead of a moderator moderating the sub-forum, the users do it themselves. This comes back to the point for neutrality and fairness, as the sub-forum community as a whole gets to decide what is allowed on the sub-forum.

### GUI Design

#### Sub-forum not selected (Logged in)
![Sub-forum not selected](/docs/images/sub-forum-not-selected.jpg)

#### Sub-forum selected (Not logged in)
![Sub-forum selected](/docs/images/sub-forum-selected.jpg)

#### Post view (Logged In)
![Post view](/docs/images/post-view.jpg)

#### New post
![New post](/docs/images/new-post.jpg)

#### Login Page
![Login Page](/docs/images/login.jpg)

#### Sign-up Page
![Sign-up Page](/docs/images/sign-up.jpg)

### Software Requirements and technologies
**ALL** of the code and technologies that are used for this project will be open source.

- **Language** - [ES2015](http://es6-features.org) + some [ES2017](http://node.green/#ES2017) (JavaScript / ECMAScript)
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

The project is based on a full JavaScript stack, so it should be able to be developed and test on any OS that Node.js supports. However, development will be happening on [Solus](https://solus-project.com/). (A GNU/Linux distribution)

As the build process produces static files, the production version of the project can be hosted and served from any HTTP server.

Also, with the help of [babel](https://babeljs.io/), I can develop using new JavaScript features that are not in older versions of browsers, but will work perfectly fine in these older browsers after compilation.

### Success Criteria
- Functioning login and sign-up system
- Ability to create posts
- Ability to comment on posts
- Ability to vote on each post and have the self-governing system work
- Have a fluid UX
- Have a simple, usable UI.

### Limitations of the Project
- Account Recovery
- Creation of new sub-forums?
- Responsive CSS (Would require quite a bit more work to have it looking nice on mobile devices)