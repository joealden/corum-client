# TODO

## Next to Implement
- Create voting functionality
  - Can only vote once (+1 or -1)
  - Persist vote across post visits
    - add array of up voted and down voted posts for each user??
- Create automation system of removing down voted posts
- Create favorites system
  - Place - and + to the right of subforums
  - Stored in an array of favorites
  - Create add and remove mutations
- Change post and post list loading state (display header, sort etc.)
- Update ESLint config (Make it not error on style linting, like create-react-app)
- Unit Tests (Possibly integration + e2e as well)

## Needs Attention
- Separate favorites and all subforums scroll
- Use CSS Grid on post list page to align things properly
- Make max lengths for info (characters):
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
