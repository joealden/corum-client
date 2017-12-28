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

* Unit Tests (Possibly integration + e2e as well)

## Next to Implement

* Change post and post list loading state (display header, sort etc.)
* Fix issue with font-awesome importing ALL assets (Resulting in a 444kb
  uncompressed file)

## Needs Attention

* Separate favorites and all subforums scroll
* Use CSS Grid on subforum page to align things properly
* Make max lengths for info (characters [client-side only first]):
  * usernames (50)
  * passwords (50)
  * titles (100 / 150)
  * content (500ish)
  * comments (250ish)
* Add pre-commit hooks (For example, eslint, prettier, testing etc.)

## Possible Ideas

* Creation of subforums
* Comments
  * Voting on comments
  * Nesting of comments
