# TODO

## Docs

* Add section in computational methods about hashing and salting the passwords
  before storage on the server
* Redo UI design mockups to more accurately reflect the current state of the
  site
* Go into more details about why I have used Vue and what problems it solves
  (modularity)
* Simplify algorithms into diagrams / pseudocode

## Working On Now

* Create favorites system
  * Place - and + to the right of subforums
  * Stored in an array of favorites
  * Create add and remove mutations

## Next to Implement

* Provide error pages if a GraphQL query fails
* Change post and post list loading state (display header, sort etc.)
* Fix issue with font-awesome importing ALL assets (Resulting in a 444kb
  uncompressed file)
* Unit Tests (Possibly integration + e2e as well)

## Needs Attention

* Separate favorites and all subforums scroll
* Use CSS Grid on post list page to align things properly
* Make max lengths for info (characters [client-side only first]):
  * usernames (50)
  * passwords (50)
  * titles (100 / 150)
  * content (500ish)
  * comments (250ish)
* Show error page when user goes to:
  * `/subforum/:NOT_FOUND`
  * `/subforum/:subforum/post/:NOT_FOUND`
* Add pre-commit hooks (For example, eslint, prettier, testing etc.)

## Possible Ideas

* Creation of subforums
* Comments
  * Voting on comments
  * Nesting of comments
