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

* Tests (Unit, Possibly integration + e2e as well with cypress, + pre commit
  hook)

## Next to Implement

* Merge `corum` and `corum-api` into a single repo using the following:
  * lerna or just yarn workspaces
  * extract docs section from `corum` into top level
  * extract `.vscode`, `.gitignore`, `LICENSE` and `.pretterrc` out
  * have `packages` folder with `corum` and `corum-api` under it
* Fix issue with font-awesome importing ALL assets (Resulting in a 444kb
  uncompressed file)
* Separate favorites and all subforums scroll
* Use CSS Grid on subforum page to align things properly
* Make max lengths for info (characters [client-side only first]):
  * usernames (50)
  * passwords (50)
  * titles (100 / 150)
  * content (500ish)
  * comments (250ish)
