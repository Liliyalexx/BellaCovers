This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Plan ECommerce Website

1) 
what you will build
what you will learn
who are audiences
2)
Install Tools
Code Editor
Web Browser
VS Code Extension
3)
Website Template
Create amazona folder
create template folder
create index.html
add default HTML code
link to style.css
create header, main and footer
style elements

4)
Display Products
create products div
add product attributes
add link, image, name and price

5)
Create React App
npx create-react-app frontend
npm start
Remove unused files
copy index.html content to App.js
copy style.css content to index.css
replace class with className

6)

Share Code On Github
Initialize git repository
Commit changes
Create github account
Create repo on github
connect local repo to github repo
push changes to github

7)

Create Rating and Product Component
create components/Rating.js
create div.rating
style div.rating, span and last span
Create Product component
Use Rating component

8)

Build Product Screen
Install react-router-dom
Use BrowserRouter and Route for Home Screen
Create HomeScreen.js
Add product list code there
Create ProductScreen.js
Add new Route from product details to App.js
Create 3 columns for product image, info and action

9)

Create Node.JS Server
run npm init in root folder
Update package.json set type: module
Add .js to imports
npm install express
create server.js
add start command as node backend/server.js
require express
create route for / return backend is ready.
move products.js from frontend to backend
create route for /api/products
return products
run npm start

10)

Load Products From Backend
edit HomeScreen.js
define products, loading and error.
create useEffect
define async fetchData and call it
install axios
get data from /api/products
show them in the list
create Loading Component
create Message Box Component
use them in HomeScreen

11)

Install ESlint For Code Linting
install VSCode eslint extension
npm install -D eslint
run ./node_modules/.bin/eslint --init
Create ./frontend/.env
Add SKIP_PREFLIGHT_CHECK=true

12)

Add Redux to Home Screen
npm install redux react-redux
Create store.js
initState= {products:[]}
reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
export default createStore(reducer, initState)
Edit HomeScreen.js
shopName = useSelector(state=>state.products)
const dispatch = useDispatch()
useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
Add store to index.js

13)

Add Redux to Product Screen
create product details constants, actions and reducers
add reducer to store.js
use action in ProductScreen.js
add /api/product/:id to backend api

14)

Handle Add To Cart Button
Handle Add To Cart in ProductScreen.js
create CartScreen.js

15)

Implement Add to Cart Action
create addToCart constants, actions and reducers
add reducer to store.js
use action in CartScreen.js
render cartItems.length

16)

Build Cart Screen
create 2 columns for cart items and cart action
cartItems.length === 0 ? cart is empty
show item image, name, qty and price
Proceed to Checkout button

17)Implement remove from cart action
Implement Remove From Cart Action
create removeFromCart constants, actions and reducers
add reducer to store.js
use action in CartScreen.js

18)Create Sample Users In MongoDB
npm install mongoose
connect to mongodb
create config.js
npm install dotenv
export MONGODB_URL
create models/userModel.js
create userSchema and userModel
create models/productModel.js
create productSchema and productModel
create userRoute
Seed sample data

19)Create Sample Products In MongoDB
create models/productModel.js
create productSchema and productModel
create productRoute
Seed sample data

20)Create Sign-in Backend
create /signin api
check email and password
generate token
install json web token
install dotenv
return token and data
test it using postman

