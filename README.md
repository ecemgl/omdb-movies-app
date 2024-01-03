# OMDB-Movies

## What I have done ?

- I created the desired design in the application. I used antd components when creating this design. I had to add inline-css at some points.
- I provided the desired data flow .
- I used the rtk-query , which I found effective, in the application for data fetching and state management.
- I used the filters in the table as desired. By default, table is rendered with pokemon title filter initially .
- I added sessionstorage so that the filters do not disappear when the page is refreshed or redirected to the movie detail page and returned.
- If there is a previously saved filter, it takes this filter first, otherwise it takes the initial filter value.
- I used session storage to save filters because when the user refresh the page, I don't want to lose filters.
- I made a responsive design with antd Row component.

## I am sad with

- Unfortunately , I had limited time to make this task because of busy at my work so I couldn't write the test. I would like to write tests in detail.
- I could write some custom styled components to visualize better my app if I had enough time .
- In some point , I use any type because my types and antd component types conflict. If I had enough time I could work on this type issue.

## Online Demo

- https://omdb-movies-app.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
