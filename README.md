# CS144-Project3
### Blogging Server on NodeJS and MongoDB

`/blog/:username/:postid`
- GET	
- Return an HTML-formatted page that shows the blog post with postid written by username.

`/blog/:username`
- GET	
- Return an HTML page that contains first 5 blog posts by username.

`/login`	
- GET, POST	
- Authenticate the user through username and password.

`/api/posts`
- GET, POST, DELETE	
- This is the REST API used to insert, retieve, update, and delete blog posts
