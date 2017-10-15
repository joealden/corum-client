# TODO

## Next
- Create voting functionality
  - Can only vote once (+1 or -1)
  - Persist vote across post visits
    - add array of up voted and down voted posts for each user??
- Create automation system of removing down voted posts
- Create favorites system
  - Place - and + to the right of subforums
  - Stored in an array of favorites
  - Create add and remove mutations

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
