# TODO

## Needs Attention
- Make it so only logged in users can (Different UI's):
  - Create posts (Don't show 'new post' button + redirect '/new/post' -> '/login')
  - Post comments (Don't show new comment section at bottom of post)
- Make max lengths for info (characters):
  - usernames (50)
  - passwords (50)
  - titles (100 / 150)
  - content (500ish)
  - comments (250ish)
- Show error page when user goes to:
  - `/subforum/:NOT_FOUND`
  - `/subforum/:subforum/post/:NOT_FOUND`