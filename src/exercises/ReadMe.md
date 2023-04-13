# List of Exercises

## March 21, 2023
  1. Create a website with following routes,
    - Home page
    - About page
    - contact page
    - Details
      - Nested routes under details page
      - content 1
      - content 2
      - content 3

## March 22, 2023
  1. Create a article entry form with the following fields,
      - title - text - mandatory
      - short description - text - Optional
      - content (long text) - mandatory
      - publish date - date - mandatory
      - category - dropdown (Technology, Food, Travel) - mandatory
      - author - text - optional
  2. Add validation to the form and log the form details on successful submission

## March 23, 2023
  1. Create a post method using json-server for creating new posts
      - Use the data from previous exercises
      - use Axios to create the post method
  2. Create a post method to handle sign up
      - use Axios to handle the post data

## March 30, 2023
  1. Improve the cart page and handle below scenarios
      - Add to cart (existing item and increase the quantity)
      - Option to Clear complete cart
      - Option to update the quantity of an item using +, - & input field (should accept only numbers)
      - maximum quantity of 100
      - disable "-" if the quantity is 1
      - Create an json-server API for CART
      - Add Checkout Button and Save cart data using API
      - Clear cart once the data is sent to db.json
  2. Add a wishlist section
      - Add to wishlist (mark item as favourite and add it to wishlist)
      - Wishlist button text has to be updated to "Remove from whishlist" if already added
      - Remove from wishlist (from wishlist page/section)

## April 6, 2023
  1. Create a node js server using http module and handle the below routes
      - create a json file with array of objects (article details)
      - /articles - GET API - to return an array of objects with the following fields
        - id - number - unique identifier (keep 1,2,3,4,.etc)
        - title - text - mandatory
        - short description - text - Optional
        - content (long text) - mandatory
        - publish date - date - mandatory
        - category - dropdown (Technology, Food, Travel) - mandatory
        - author - text - optional
  2. Add filter APIs
      - /articles - POST API - to create a new object with the above fields
        - this should write the data into the json file
      - /articles/:id - GET API - to return the object with the above fields
        eg: /articles/1 - GET API - to return the object with the above fields for article.id=1
      - /articles/:id - DELETE API - to delete the object with the above fields

## April 13, 2023
  1. Create REST API for comment system
      - GET - /messages/:id - should return a specific message object
        - id
        - title
        - content
        - author
        - datetime
      - GET - /messages/:id/comments - should return an array of comment objects
        - id
        - content
        - author
        - datetime
      - POST - /messages/:id/comments - should create a new comment object for the message
        - id
        - content
        - author
        - datetime
        - return a proper message object
        eg., { "message": "comment added" }
      - DELETE - /messages/:id/comments/:comment_id - should delete a comment object
        - return a proper message object
        eg., { "message": "comment deleted" }
  
  2. Create a Page to display message and its comments
      - use Handlebar template engine (or template of your choice)
      - render a single page with data from express