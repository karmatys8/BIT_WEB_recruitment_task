# Getting Started with Create React App // POSZUKAJ JAK U NNYCH TO JEST NAPISANE

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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


## Furhter improvements

1. I assumed that I should not add any columns besides those listed in task description, hence I could not add Id and in result had to use Table instead of Data Grid. Data Grid has built in sorting and filtering that obviously are more optimized than my code.
2. LocaleContext probably should be on App level.
3. Enable language change on Error page.
4. There is an Warning: Cannot update a component (`MyAppBar`) while rendering a different component (`SharedLayout`). To locate the bad setState() call inside `SharedLayout`. To be frank I don't have time to fix it. My best assumption is that when isDarkMode state updates MUI Switch updates and then SharedLayout cannot update because MyAppBar component hasn't re-rendered yet. *Website still works but it is a bad practice*
5. user prefered color scheme is not taken into account. It could be done with useMediaQuery('(prefers-color-scheme: dark)').
6. There is a theme flickering while dark-mode is activated. It happens because dark mode logic happens after the html element is already loaded.