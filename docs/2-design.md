# Design

## Table of Contents
- [GUI Design](#gui-design)
- [Component Design](#component-design)
- [Route Design](#route-design)

### GUI Design
#### Sub-forum not selected (Logged in)
![Sub-forum not selected](https://raw.githubusercontent.com/joealden/corum/master/docs/images/sub-forum-not-selected.jpg) 

#### Sub-forum selected (Not logged in)
![Sub-forum selected](https://raw.githubusercontent.com/joealden/corum/master/docs/images/sub-forum-selected.jpg)


#### Post view (Logged In)
![Post view](https://raw.githubusercontent.com/joealden/corum/master/docs/images/post-view.jpg)

#### New post
![New post](https://raw.githubusercontent.com/joealden/corum/master/docs/images/new-post.jpg)

#### Login Page
![Login Page](https://raw.githubusercontent.com/joealden/corum/master/docs/images/login.jpg)

#### Sign-up Page
![Sign-up Page](https://raw.githubusercontent.com/joealden/corum/master/docs/images/sign-up.jpg)

### Component Design
As I am using [Vue](http://vuejs.org) to build my UI, I can think of the site being composed of individual components with isolated responsibilities. 
Here I will define what each of these main component's roles are, and what they will render when.

![Component Design](https://raw.githubusercontent.com/joealden/corum/master/docs/images/component-design.jpg)

#### Logo
This component will have the sole responsibility to render Corum's logo in the top left of the page along side the header component. 
The logo will be a link to `'/'` using [vue-router's Link component (nuxt-link)](https://nuxtjs.org/api/components-nuxt-link).

#### Header
This component will have 2 different states. 
1 for when the user is logged in, and 1 for when they are not. 

When the user is logged in, the component will render a greeting message, as well as a `Logout` button. (As shown [here](#new-post)) 
When pressed, the `Logout` button will execute a function that logs the user out of the site.

When the user is not logged in, the component will render 2 buttons. The 1st button will be a `Sign Up` Link component that links to `'/signup'`. The 2nd button will be a `Login` Link component that links to `'/login'`.

#### Navigation
This component will also have 2 different states like the Header component.

When the user is not logged in, only the `All sub-forums` section will render. (As shown [here](#login-page)) 
This `All sub-forums` component will show all of the sub-forums that Corum has with a search bar at the top. 
If the sub-forum list is longer than the components height, it will scroll independently of the page, with the search bar staying at the top of the navigation.

When the user is logged in, a `favorites` section will also be rendered above the `All sub-forums` section.
(As shown [here](#new-post)) The `favorites` section will list the sub-forums that the user has added to their `favorites`.
A user can add a sub-forum to their favorites by clicking on the `+` icon next to the sub-forum in the 'All sub-forums' section.
The `+` icon is only rendered if the user is logged in. 
A user can remove a sub-forum from their favorites by clicking the `-` sign next to the sub-forum they wish to remove.
The `favorites` section will be very similar to the `All sub-forums` section, however it will not have a search bar.

Each sub-forum in either section will be a Link component.
They will link to a sub-forum in the pattern `'/subforum/:subforum'`. (For example, `'/subforum/programming'`) 

#### Main Content
This component will handle nearly all of the client side routing (See [Route Design](#route-design)).
Whatever action a user takes, such as clicking on a sub-forum, pressing the `Sign Up` or `Login` buttons, clicking on a post within a sub-forum etc. (Shown in the [GUI Design section](#gui-design))

#### Social Links + Footer
_These two components have since been removed from the sites design, as I thought it didn't have much of a benefit to the user._

### API Summary (The Server [GraphQL/Graphcool])
As I have discussed in the analysis section of this report, I will be using something called GraphQL to develop the API of Corum.
If you haven't heard of GraphQL before, it very simple terms, it is a more flexible alternative to REST style APIs.

Some of the reasons I am using GraphQL to develop my API over REST are:
- It allows the server to define what data the client can access, and then the client can choose the information it wants
  - This is unlike REST APIs, as they usually define API endpoints that are for 1 client (For example, the mobile site only)
- The way GraphQL is designed allows for a large tooling eco-system to be built around it
  - For example, I will be using a GraphQL Client library called Apollo that does things like caching and fetching automatically
- It is easier for the server to add and remove data that clients can access without breaking existing client that depend on it 

If you would like to find out more about GraphQL, I recommend the following site as a good resource to get started. ([howtographql.com](https://www.howtographql.com/))

To more quickly develop a production standard GraphQL API, I will be using a framework called Graphcool.
The framework abstracts away some of the complexity that comes with developing an API, such as database management, data access permissions etc.
The real magic of graphcool is that is automatically generated a CRUD (Create, Read, Update and Delete) interface to Corum's data.
This is very much like how an SQL database works, however instead of using SQL, we use GraphQL to define what data we want.
This allows me to declaratively design my API, without worrying that much about how everything works under the hood.

As well as abstracting away complexity, graphcool allows you to easily extend its capabilities.
For example, I will extend graphcool to do things such as create and authorize users, and initialize data so that the client doesn't have to.
(E.G. Set vote count of a new post to 0 automatically)

For more information about graphcool, visit there website here. ([graph.cool](https://www.graph.cool/))

### Route Design
As Corum is a website, accessing different parts of the application is done by routing (For example, clicking on links or altering the contents of the URL bar)
As mentioned before, I am using Vue as my view layer library.
This means that I can easily do client side routing.
Client side routing is where the routing is done on the users machine. (More information on this web development technique can be found by searching for SPAs. ([Single Page Applications](https://en.wikipedia.org/wiki/Single-page_application)) 
This is the opposite to server side routing that is common for sites developed with PHP and no view library.
Server side routing means loading entire new pages from a server, instead of dynamically rewriting the current page.

As quoted from Wikipedia's article on SPAs:
> This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application.

If you would like to find out more information about Vue, visit the documentation at the following link. ([vuejs.org](https://vuejs.org/))

#### Route Summary (The Client)

Here is a brief summary of what all of the different routes will do.
- [`'/'`](#sub-forum-not-selected-logged-in) - Displays a message to the user to select a sub-forum from the navigation.
- [`'/login'`](#login-page) - Displays a login screen (Username + password)
- [`'/signup'`](#sign-up-page) - Displays a sign up screen (Username + password + password)
- [`'/subforum/:subforum'`](#sub-forum-selected-not-logged-in) - Displays the posts from the selected sub-forum. (Using the `:subforum` variable)
- [`'/subforum/:subforum/post/:post'`](#post-view-logged-in) - Displays the post selected. (Using the `:post` variable)
- [`'/subforum/:subforum/new'`](#new-post) - Displays the new post entry fields.

The following sections will describe each of these routes in more detail.
Most of the following sections will contains subsections about the design of the client and the design of the server/backend. (API)
If they do not have these subsections, it will because all of the information is about the client, as no server side processing is required.

#### Home Page ([`'/'`](#sub-forum-not-selected-logged-in))
This is the page that the user sees when they first visit the site. (At the path `'/'`)
To start with, this page will only display a message to the user telling them to take some kind of action (Choose a subforum, login, signup etc.)

If I have enough time, I will overhaul this page.
The home page will have 2 different states depending on if the user is logged in or not.
If the user _is not_ logged in, then this page will contain helpful information about how to use the site.
If the user _is_ logged in, then this page will be like any other sub-forum page, but it will instead the users favorite subforums combined into one page.
One consideration would be to make sure that if the user does not have an subforums in their favorites, it tells the user just that.

#### Login Page ([`'/login'`](#login-page))

##### Client Side
This is the page that the user will see when they visit the path `'/login'`.
This page could be accessed in 2 different ways.
The first way would be type physically type the path into the web browser's url bar.
The second way would be to click on the `login` button located in the header.
This page will display a form to the user to login.
For the user to login, they must have first created an account. (Which is done through the `signup` page)

The login form will contain the following:
- The Corum logo
- An email address field
- A password field
- A login button
- A message and link directing the user to the `signup` page if they do not already have an account.

The login button will only be enabled (clickable) if both an email address and a password are supplied.

If the user successfully logs in, they will be redirected back to the page they were previously on before visiting the login page.
If the user have an unsuccessful login attempt, then the error returned by the GraphQL API will be displayed to the user.
After the error has been displayed, the user will be free to try and login again.

After the user logs in, the rest of the site will update in response to the state change. (From being logged out to being logged in)
These state changes are described in more detail in the [Component Design](#component-design) section.

This means the following:
- The header will render a greeting and logout button instead of the signup and login buttons
- The navigation will render the user's 'favorites' section and the 'all subforums' section instead of just the 'all subforums' section
- The user will now be allowed to create new posts and comments
- The user will now be allowed to upvote and downvote posts

After the site has updated to be in the 'logged in' state, the user will no longer be able to click on a login button.
However, this does not mean they could not access the login page from the other way described above, via the url bar in the browser.
If the user could access the login page when already logged in, this would not only be confusing to the user, it could cause bugs.
To prevent this issue, if a user visits `'/login'` when already logged in, then a message will display telling them that they are already logged in.

##### Server Side
The graphcool framework doesn't provide a user authentication system out of the box.
Instead, I will have to create my own using Graphcool resolvers.
As talked about already, graphcool provides ways to extend its functionality.
Resolvers are one of many extension points that graphcool provides.
Resolvers essentially allow you to create custom GraphQL queries and mutations on top of the auto-generated CRUD ones such as `allPosts`, `createPost` etc.
To find out more about Graphcool resolvers, visit the graphcool docs here. ([graph.cool/docs](https://www.graph.cool/docs/reference/functions/resolvers-su6wu3yoo2))

To create a user authentication system, the resolver must do the following:
- Expose a GraphQL mutation called `authenticateUser`
- This mutation will have the following inputs and outputs:
  - Inputs:
    - `email` -> type String (The email of the user)
    - `password` -> type String (The password of the user)
  - Outputs:
    - `ID` -> type ID (ids are generated by graphcool and are unique, this ID is used in Corum to determine the state of the UI)
    - `username` -> type String (The username that is associated with the email address entered. This is what other users see on posts and comments)
    - `token` -> type String (A JWT (JSON Web Token) that will be stored to be later used to authenticate the user when making requests such as to create a new post)
- Check if a user with the email provided exists
  - If one does not, then return a generic error to the user saying something such as 'Invalid credentials'. (Intentionally vague error message for security reasons)
- Now that we have confirmed that the user exists, we can check if the user entered the correct password for the user
- Using a password hashing library (probably something like bcryptjs), hash the password the user entered and compare the hash with the one stored in the database
  - If they do not match, then return the same generic error of 'Invalid credentials'
- If the hashes match, then we know that the user has entered both the correct email and correct password
- Now we can return the user the data that they requested.

As mentioned briefly above, the `token` output is a JWT (JSON Web Token).
JWTs are extremely useful when dealing with stateless protocols such as HTTP.
JWTs can be used to verify that the client is who they say they are.
In an application such as Corum, users that are not logged in should not be allowed to create new posts or new comments.
By sending the JWT in the header of every HTTP request to the GraphQL API, I can ensure that only logged in users can perform actions such as creating new posts and comments.
To find out more about JWTs, visit the following link. ([jwt.io](https://jwt.io/))

Some of this will only make complete sense after reading through how Corum will create the users in the first place. This is described in the section below.

#### Sign Up Page ([`'/signup'`](#sign-up-page))

##### Client Side
While the 'Login Page' section describes how the system will log the user into the site, it doesn't say how users can create accounts.
This will be done through the signup page.
Just like the login page, this page will be accessible either by clicking on the `signup` button in the header, or from the url bar. (At the path `'/signup'`)
Also like the login page, the user will not be able to visit the signup page if they are already logged in.

The signup form will contain the following:
- The Corum logo
- An email address field
- A username field
- A password field
- Another password field to verify that the user has type in their password correctly (Verification will be needed to check that they are the same)
- A signup button
- A message and link directing the user to the `login` page if they already have an account.

The signup button will only be enabled (clickable) if an email address has been entered, both password fields have data in and they match.

If the user successfully creates an account,
(If there are no errors with the data they entered, for example, an error would be an incorrect email or a user with the same email already exists)
then not only will the account have been created, they will also be logged into the site with the data that they entered in the signup form.
This means that the same state changes occur as mentioned in the 'Login Page' section. (Ability to create posts, comments etc.)

##### Server Side
As mentioned in the 'Login Page' section, the graphcool framework doesn't provide a user authentication system.
Please read the 'Login Page' section for more context of this subsection. (For information about resolvers etc.)

As well as the `authenticateUser` mutation that is created for the `login` page, there will need to be a `signupUser` mutation to create an account.

Here is the algorithm for the `signupUser` resolver:
- Expose a GraphQL mutation called `signupUser`
- This mutation will have the following inputs and outputs:
  - Inputs:
    - `email` -> type String (The email address associated with the account that will be used to login in the future)
    - `username` -> type String (The username of the user that will be displayed to other users in things such as posts and comments)
    - `password` -> type String (The password that will be hashed and stored, then checked against when the user logs in in the future)
  - Outputs:
    - `id` -> type ID (ids are generated by graphcool and are unique, this ID is used in Corum to determine the state of the UI)
    - `token` -> type String (A JWT (JSON Web Token) that will be stored to be later used to authenticate the user when making requests such as to create a new post. For more information about JWTs, look at the 'Login Page' section)
- It will first verify for that the email address is valid (using the library `validator`)
  - If it is not a valid email, return an error to the user that the email is invalid
- Now that the email address is valid, we must check if a user has already registered with the same email address
  - If an account already uses this email address, return an error to the user that the email address is already in use.
- Now that the email address is valid, we must also check if a user has already registered with the same username
  - If an account already uses this username, return an error to the user that the username is already in use.
- Now that we know a user with either the same email address or username doesn't exist, we can start creating the account.
  - First, we need to hash and salt the password before storing it, as storing password in plain text isn't a good idea.
  - Next, the user details actually need to be stored on the server, so a new User type is created.
    - This User type contains the email address, username and hashed password, as well things like the users generated ID.
- Now we can return the user the data that they requested.

#### Subforum Page ([`'/subforum/:subforum'`](#sub-forum-selected-not-logged-in))

##### Client Side
Like any other page, there are two ways to access this page.
The first way is to navigate to it via the navigation on the left of the site.
The second way is for the user to enter the url of a subforum the already know exists (For example, `'/subforum/test'`)

The way the client knows what subforum to fetch data for is by the path variable `:subforum` that is in the url.
This value can be accessed from within the JavaScript of the page.

This page will show the posts that have been posted in the subforum.
A visual representation of the following information can also be found in the 'UI Design' section.

This is what a subforum page will contain:
- The title of the subforum
- A way to sort the posts (Two radio buttons):
  - Sort by most popular posts
  - Sort by newest posts
- A `New Post` button that will link to `'/subforum/:subforum/new'`
- Headers for each piece of data of a post:
  - The posts title
  - The time and date it was created at
  - The current vote count of the post
- A list containing the posts associated with the current subforum with the data specified by the headers above
- Each post will be a linked to `'/subforum/:subforum/post/:post'`

The `New Post` button will only be enabled (clickable) if the user is logged in, otherwise, it will be greyed out.
This is because a user should only be allowed to create a post if they are logged in.

##### Server Side
As mentioned before, the GraphQL API exposes automatically generated queries and mutations to perform CRUD operations.
One of these exposed queries is called `allPosts`.
If I provide no parameters to the query, it will return every post that exists on the whole site.

Two parameters that will be used to fetch the posts for a specific subforums will be the following:
- `filter`
  - This expects an data type of 'Subforum'
  - The way I will be filtering the data is by the 'url' field on the 'Subforum' type.
  - This means that only the data that was posted on the subforum will be returned
- `orderBy`
  - This an enum called 'PostOrderBy'
  - This enum has values to sort by both descending ('DESC') and ascending ('ASC') of each field of 'Post'
  - The enum values that we are interested in are 'voteCount_DESC' and 'createdAt_DESC'

The client will pass the path variable mentioned above (`:subforum`) as the value for `filter`.

By default, the sort will be by vote count ('voteCount_DESC').
When the user switches between the two sort types, the query will be resent to the server with the different enum value.
This means that graphcool abstracts away the sorting functionality, meaning that I don't have to implement it myself.

#### Post Page ([`'/subforum/:subforum/post/:post'`](#post-view-logged-in))

##### Client Side
placeholder

##### Server Side
placeholder

#### New Post Page ([`'/subforum/:subforum/new'`](#new-post))

##### Client Side
placeholder

##### Server Side
placeholder

### Test Plan
TODO:
- Describe the steps taken to test that the site is in working condition
- Talk about how ESLint helps to catch bugs before runtime
- Talk about how unit + integration + e2e (end to end) testing will automate the test plan described above when implemented
