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