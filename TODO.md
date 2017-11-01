# TODO

## Current Task
Create voting functionality
- [x] Disabled voting when user is not logged in
- [] Can only vote once (+1 or -1)
  - [x] Add basic click handlers for the buttons (Dynamic to users current vote)
  - [] Figure out best way to update graphcool data, possibilities:
    - Create 4 different GraphQL mutations
    1) upVotePost - Used to up-vote when user has not voted yet
    1) downVotePost - Used to down-vote when user has not voted yet
    1) upVotePostFromDownVote - Used when up-vote is pressed when user has already down-voted
    1) downVotePostFromUpVote - Used when down-vote is pressed when user has already up-voted
  - [] Implement best method into page
  - [] Load data in on how the user has voted on the post (If logged in) (AKA Persist vote data)

## Next to Implement
- Create automation system of removing down voted posts
- Create favorites system
  - Place - and + to the right of subforums
  - Stored in an array of favorites
  - Create add and remove mutations
- Move to graphcool framework
  - **NOTE**: Frontend code will need to change for migration
    - username field has been removed (Not really required, only used in greeting message in header)
    - mutation names have changed
- Provide error pages if a GraphQL query fails
- Change post and post list loading state (display header, sort etc.)
- Fix issue with font-awesome importing ALL assets (Resulting in a 444kb uncompressed file)
- Update ESLint config (Make it not error on style linting, like create-react-app)
- Unit Tests (Possibly integration + e2e as well)

## Needs Attention
- Separate favorites and all subforums scroll
- Use CSS Grid on post list page to align things properly
- Make max lengths for info (characters [client-side only first]):
  - usernames (50)
  - passwords (50)
  - titles (100 / 150)
  - content (500ish)
  - comments (250ish)
- Show error page when user goes to:
  - `/subforum/:NOT_FOUND`
  - `/subforum/:subforum/post/:NOT_FOUND`

## Possible Ideas
- Creation of subforums
- Comments
  - Voting on comments
  - Nesting of comments
