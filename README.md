<div align="center">
  <img src="docs/images/logo.png" alt="corum" width="215">
</div>
<br>
<p align="center">
  <i><b>An open, democratic &amp; self governing forum.</b></i>
</p>

---

For my Computer Science coursework project, I intend to create an **open, democratic & self governing** alternative to the forum site [Reddit](https://www.reddit.com/) called **Corum**. 

## Table of Contents
- [Setup (Software Requirements)](#setup-software-requirements)
  - [Development](#development)
  - [Deployment](#deployment)
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
  - [Component Design](#component-design)
  - [Libraries / Tools To Be used](#libraries-tools-to-be-used)
  - [Success Criteria](#success-criteria)
  - [Limitations of the Project](#limitations-of-the-project)

## Setup (Software Requirements)
The project is based on a full JavaScript stack, so it should be able to be developed and deployed on any OS that Node.js supports.

To get a copy of this project on your local machine, clone this repo using the following command ([Git](https://git-scm.com/) must be installed):

```bash
git clone https://github.com/joealden/corum.git
```
If you haven't already, download Node Version 8+ [here](https://nodejs.org/en/download/current/) and Yarn [here](https://yarnpkg.com/en/docs/install) then install them both. Now your system is ready to develop or deploy Corum.

#### Browser Compatibility
It is Important to note, because I am using quite new features such as [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), it is recommended to browse on the latest version of Chrome or Firefox to experience how Corum is supposed to look and function.

### Development
[create-react-app](https://github.com/facebookincubator/create-react-app) provides a pre-configured hot reloading dev server, which means I can save a file and see the resulting change instantly on my browser. This dev server also provides an in-browser error overlay, which allows for easier debugging. To start the dev server, run the following commands from the `corum` directory:

```bash
cd client
yarn
yarn start
```
This will start the dev server. If your browser does not automatically open up a new browser window at the servers address, it can be located at `http://localhost:3000`.

### Deployment
Production ready files can be produced by running the following commands inside the `corum` directory:

```bash
cd client 
yarn 
yarn build
``` 
This will produce a `build` directory inside `client`. This folder contains all the files required to deploy the site in production mode. This items can now be hosted on any HTTP server.

## The Idea

### A Self Governing Democracy
Being self governed means that those that are being governed, govern themselves and each other. There is no higher authority that makes decisions. In the case of a forum site, this means that it is solely up to the users of the forum as a collective to decide what content belongs on it. Corum will be designed and developed from the ground up following this principle.

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
**phpBB** has different goals than Corum or Reddit. Instead of being a designed to run from one website, it is designed to be used by anyone who wants to setup their own forum. An example of where phpBB is deployed is at [Solus' Forum](https://solus-project.com/forums/). This can be seen when looking at the pages footer. 

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
Unlike languages such as Java or C++ that have class based OO, JavaScript uses [prototypical inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain). Although JavaScript's prototype chain is more powerful and flexible, it used to be hard for beginners to use that came from a classical OO background. With the introduction of the [class syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) in ES2015, which is just syntactic sugar, JavaScript OO is much easier to approach. If and when classes are used in the source code, it will be using the newer ES2015 syntax.

In React, Components that have [state or use life cycle hooks](https://facebook.github.io/react/docs/state-and-lifecycle.html) must use the ES2015 class syntax and extend the base [Component](https://facebook.github.io/react/docs/react-component.html) class that is provided by the library. This takes advantage of the OO paradigm's easy state encapsulation. Also, some libraries that I intend to use such as Apollo Client ([As described here](#software-requirements-and-technologies)) use the OO [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) keyword to create new instances of objects.
 
##### Declarative
On Reacts front page, it shows that one of its main selling points is that it allows developers to write declarative UI code. This means that when I am developing, I do not have to worry about _how_ my components will get rendered to the [DOM (Document Object Model)](https://en.wikipedia.org/wiki/Document_Object_Model). I just tell React _what_ I want to render.

##### Functional
Programming in a functional style helps improve code maintainability, readability, and [more](https://en.wikipedia.org/wiki/Functional_programming). JavaScript provides great tools to build software in a functional paradigm, this includes features such as:

- [First-class Functions](https://en.wikipedia.org/wiki/First-class_function) - This means that JavaScript treats functions the same as any other variable. Functions can be passed as arguments to functions, returned from functions, assigned to variables and stored in objects and arrays.
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) - Allows for concise function declarations and clean [function currying](https://en.wikipedia.org/wiki/Currying). For example:

```javascript
// Regular function expression - not curried
const concatRegular = function(string1, string2) {
  return `${string1} ${string2}`;
}
const joinedTextRegular = concatRegular("Hello," "world!"); // "Hello, world!"

// Arrow function expression - curried
const concatArrow = string1 => string2 => `${string1} ${string2}`;
const joinedTextArrow = concatArrow("Hello")("world!"); // "Hello, world!"
```

- Functional Array Methods - [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 
and 
[`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
- Immutability - [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) 
(Not perfect, reference only so objects + arrays can be mutated, use 
[`Object.freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 
(for both objects and arrays) or something like [Immutable.js](http://facebook.github.io/immutable-js/))

As well as the built in functionality modern JavaScript gives us, I am planning to make use of the functional library [Ramda](http://ramdajs.com/). This library adds many useful helper functions that I would have to otherwise write myself, such as [R.compose](http://ramdajs.com/docs/#compose), [R.merge](http://ramdajs.com/docs/#merge), [R.memoize](http://ramdajs.com/docs/#memoize) etc. Unlike other utility libraries like [Lodash](https://lodash.com/), Ramda conforms to functional programming ideas (For example, some Lodash functions mutate instead of returning such as [_.remove](https://lodash.com/docs/4.17.4#remove)), and provides nice extras like auto-currying etc.

#### Real Time Data Processing
Eventually, I will attempt to implement real time search functionality for the navigation, as well as real time sub-forum updates like updating the current amount of votes updates without a page refresh. This will be achieved through the use of [GraphQL Subscriptions](http://dev.apollodata.com/react/subscriptions.html).

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

### Component Design
As I am using [React](http://reactjs.com) to build my UI, I can think of the site being composed of individual components with isolated responsibilities. Here I will define what each of these main component's roles are, and what they will render when.

![Component Design](/docs/images/component-design.jpg)

#### Logo
This component will have the sole responsibility to render Corum's logo in the top left of the page along side the header component. The logo will be a link to `'/'` using [react-router's Link component](https://reacttraining.com/react-router/web/api/Link).

#### Header
This component will have 2 different states. 1 for when the user is logged in, and 1 for when they are not. 

When the user is logged in, the component will render a greeting message and a `Logout` button (As shown [here](#new-post)) The logout button will be a Link component that links to '/logout'. This route will log the user out of the site, then it will redirect them to `'/'`.

When the user is not logged in, the component will render 2 buttons. The 1st button will be a `Sign Up` Link component that links to `'/signup'`. The 2nd button will be a `Login` Link component that links to `'/login'`.

Both the `Sign up` and `Login` buttons will be a [NavLink component](https://reacttraining.com/react-router/web/api/NavLink). This means that when a user clicks 1 of these buttons and is directed to the corresponding route, the link will give visual feedback to the user, for example changing the color of it.

#### Navigation
This component will also have 2 different states like the Header component.

When the user is not logged in, only the `All sub-forums` section will render. (As shown [here](#login-page)) This `All sub-forums` component will show all of the sub-forums that Corum has with a search bar at the top. If the sub-forum list is longer than the components height, it will scroll independently of the page, with the search bar staying at the top of the navigation.

When the user is logged in, a `favorites` section will also be rendered above the `All sub-forums` section. (As shown [here](#new-post)) The `favorites` section will list the sub-forums that the user has added to their `favorites`. A user can add a sub-forum to their favorites by clicking on the `+` icon next to the sub-forum in the 'All sub-forums' section. The `+` icon is only rendered if the user is logged in. A user can remove a sub-forum from their favorites by clicking the `-` sign next to the sub-forum they wish to remove. The `favorites` section will be very similar to the `All sub-forums` section, however it will not have a search bar.

Each sub-forum in either section will be a Link component (In particular a [NavLink component](https://reacttraining.com/react-router/web/api/NavLink) so that the user knows what sub-forum they are in when looking at the navigation) that will link to a sub-forum in the pattern `'/subforum/:subforum'`. (For example, `'/subforum/programming'`) 

#### Main Content
This component will handle nearly all of the client side routing. Whatever action a user takes, such as clicking on a sub-forum, pressing the `Sign Up` or `Login` buttons, clicking on a post within a sub-forum etc. (Shown in the [GUI Design section](#gui-design))

This will be achieved by using the library [react-router](https://reacttraining.com/react-router/web) and their [Route component](https://reacttraining.com/react-router/web/api/Route). Along with their [Switch component](https://reacttraining.com/react-router/web/api/Switch) so that routes render exclusively, this means that I can conditionally render components based on the users current path. 

The planned routes are as follows:
- [`'/'`](#sub-forum-not-selected-logged-in) - Displays a message to the user to select a sub-forum from the navigation.
- [`'/subforum/:subforum'`](#sub-forum-selected-not-logged-in) - Displays the posts from the selected sub-forum. (Using the `:subforum` variable)
  - [`'/subforum/:subforum/:post'`](#post-view-logged-in) - Displays the post selected. (Using the `:post` variable)
  - [`'/subforum/:subforum/new'`](#new-post) - Displays the new post entry fields. (The post will be submitted to `:subforum`)
- [`'/login'`](#login-page) - Displays a login screen (Username + password)
- [`'/signup'`](#sign-up-page) - Displays a sign up screen (Username + password + password)

#### Social Links
This component will display social links for corum, such as twitter, github, email etc.

#### Footer
This component will display the credits for corum with a link to my github profile.

### Libraries / Tools To Be used
**ALL** of the code and technologies that will be used for this project are open source.

- **Language** - [ES2015](http://es6-features.org) + [ES2017](http://node.green/#ES2017) (JavaScript) with [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
- **Runtime for development** - [Node.js 8.x.x](https://nodejs.org) and [Chrome](https://www.google.com/chrome/browser/desktop/index.html)
- **VCS ([Version Control System](https://en.wikipedia.org/wiki/Version_control))** - [Git](https://git-scm.com/) with [Github](https://github.com/joealden/corum)
- **Package Manager** - [Yarn](https://yarnpkg.com)
- **Task Runner** - [NPM Scripts](https://docs.npmjs.com/misc/scripts)
- **Starting point** - [create-react-app](https://github.com/facebookincubator/create-react-app)
- **View** - [React](https://facebook.github.io/react)
- **CSS-in-JS** - [styled-components](https://www.styled-components.com) (Using [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) for page layout) 
- **Data Fetching (GraphQL)** - [Apollo Client with React bindings](http://dev.apollodata.com/react/)
- **Client-side Routing** - [react-router](https://reacttraining.com/react-router/)
- **Module Bundler** - [webpack](https://webpack.js.org/)
- **JS Compiler** - [babel](https://babeljs.io/)
- **JS Linter** - [ESLint](https://eslint.org/)
- **Testing** - [Jest](https://facebook.github.io/jest/)

#### My Development Environment
- **Operating System** - [Solus](https://solus-project.com/) - A GNU/Linux distribution
- **Code Editor** - [Visual Studio Code](https://code.visualstudio.com/) - The `.vscode` directory at the root of the project is present so that if someone else opens the project in vscode, the editor will be automatically configured with project specific settings, such as tab spacing etc. Also, they will be able to install the extensions used by me for this project under the `extensions > recommended` panel.

### Success Criteria
- Functioning login and sign-up system
- Ability to create posts
- Ability to comment on posts
- Ability to vote on each post and have the self-governing system work
- Have a fluid UX
- Have a simple, usable UI.
- Make the application real time

### Limitations of the Project
- Account Recovery
- Creation of new sub-forums?
- Responsive CSS (Would require quite a bit more work to have it looking nice on mobile devices)