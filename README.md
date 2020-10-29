# TV Shows and Movies Application

Used scalable and modular CSS inside components (having some global styles that apply to page and additional component based styles). Used rems instead of pixels. Including some minimal animations, application being both mobile friendly and responsive.

Having two services -> for API calls and a simple state keeping service using Subjects.
Reducing duplication of code by reusing components/using services as much as possible.

Created mocks file for stubs and mocks, wrote a couple of unit tests 
(inside media-list-page-component and individual-media.component, tabs.component.spec, back-navigation.component.spec and other...), 
to check whether they work.
Unit tests are run with the commang ng test.

## To run the app:

Run ng build, and then npm start (due to the node server) and it will run on port :8080 OR check it online on Heroku at -> [Here](https://angular-movie-tvshow-api.herokuapp.com/shows)

NOTE: I filtered out the movies/shows without an image (to be more visually appealing).
