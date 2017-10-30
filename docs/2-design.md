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

When the user is logged in, the component will render a `Logout` button. (As shown [here](#new-post)) 
The logout button will be a Link component that links to '/logout'. 
This route will log the user out of the site, then it will redirect them to `'/'`.

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

### Route Design
As Corum is a website, accessing different parts of the application is done by routing (For example, clicking on links or altering the contents of the URL bar)
As mentioned before, I am using Vue as my view layer library.
This means that I can easily do client side routing.
Client side routing is where the routing is done on the users machine. (More information on this web development technique can be found by searching for SPAs. ([Single Page Applications](https://en.wikipedia.org/wiki/Single-page_application)) 
This is the opposite to server side routing that is common for sites developed with PHP and no view library.
Server side routing means loading entire new pages from a server, instead of dynamically rewriting the current page.

As quoted from Wikipedia's article on SPAs:
> This approach avoids interruption of the user experience between successive pages, making the application behave more like a desktop application.

#### Route Summary
- [`'/'`](#sub-forum-not-selected-logged-in) - Displays a message to the user to select a sub-forum from the navigation.
- [`'/login'`](#login-page) - Displays a login screen (Username + password)
- [`'/signup'`](#sign-up-page) - Displays a sign up screen (Username + password + password)
- [`'/subforum/:subforum'`](#sub-forum-selected-not-logged-in) - Displays the posts from the selected sub-forum. (Using the `:subforum` variable)
- [`'/subforum/:subforum/post/:post'`](#post-view-logged-in) - Displays the post selected. (Using the `:post` variable)
- [`'/subforum/:subforum/new'`](#new-post) - Displays the new post entry fields.

#### Home Page ([`'/'`](#sub-forum-not-selected-logged-in))
placeholder

#### Login Page ([`'/login'`](#login-page))
placeholder

#### Sign Up Page ([`'/signup'`](#sign-up-page))
placeholder

#### Subforum Page ([`'/subforum/:subforum'`](#sub-forum-selected-not-logged-in))
placeholder

#### Post Page ([`'/subforum/:subforum/post/:post'`](#post-view-logged-in))
placeholder

#### New Post Page ([`'/subforum/:subforum/new'`](#new-post))
placeholder

### Test Plan
- Describe the steps taken to test that the site is in working condition
- Talk about how ESLint helps to catch bugs before runtime
- Talk about how unit + integration + e2e testing will automate the test plan described above when implemented
