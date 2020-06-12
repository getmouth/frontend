# Description
_A live service of the project is available herer[https://boiling-oasis-50981.herokuapp.com/](https://boiling-oasis-50981.herokuapp.com/)_

The following  project is a Recipes display app, which makes requests
to a RESTful API based on user interactions. The project includes an intial login page where users can login and start interating with the recipes. It offers users the ability to favorite and unfavorite a recipe as well give recipes rating. The RESTful API is
an Express server with endpoints which recieves and responds to user requests eg. `/api/login`, The includes a MongoDB database and upon initial connection inserts the recipes data. The purpose of the database is to persist user details and interacts thus, favorites and rating.

Stack
______

- React
- Express
- MongoDB


Gettig Started
_______________

To get started, make a copy or clone this project.

- From the project root `Dir` run `NPM install` to install dependencies.
- Create a .env file which should include the following variables (values should be your own ) `MONGODB_URI`, `MONGODB_TEST_URI`, `SECRET`
- Run `NPM run dev` to start the client server
- Open another terminal and execute `NPM run server` to start the express server.

- Nagivate to `http://localhost:3000`  or `http:localhost:3001`(served by express not isomophic).

There are a few test files included on the express side of things
- To run the tests run `NPM test --t Testname`

Challenges
__________

I realized the `imageLink` values of the recipes data failed to get a successful response
when I tried using including it to displace the images. 
I have to improvise temporay solution based on observing the
images on the HelloFresh website.
`https://img.hellofresh.com/ar_2:3,c_fill,f_auto,fl_lossy,q_auto,w_230/hellofresh_s3/image/` and appended the
ids of the recipes to return a successful response.

_imageLink examplary value `https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143aaff604d567f8b4571.jpg`_
