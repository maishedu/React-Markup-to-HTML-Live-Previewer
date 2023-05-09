# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`

Install dependencies


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
### `Challenge Details`

Skills tested: ReactJS

Difficulty: Medium

Challenge Tasks:

Set up a new React project using Create React App or another boilerplate you choose.
Install a Markdown parsing library, like marked or remark, to convert Markdown text into HTML.
We just need to display 1 page/route to display the Blog Editor
Create a BlogEditor component that includes the following:
A textarea element for users to write and edit their blog posts in Markdown format.
A div element to display the real-time preview of the formatted content as the user types.
Implement a state management solution (local component state or a library like Redux) to store the user's input and update the preview as they type.
Apply basic styling to the BlogEditor component to make it visually appealing and user-friendly.
Implement a toolbar with buttons for common formatting options, like bold, italic, and headings, that automatically insert the corresponding Markdown syntax into the text area.
Save the user's work in the browser's local storage so that it persists even if they close and reopen the application.
Add the ability to upload and insert images into the post, with a preview of the formatted content.
Create a "Save as Draft" and "Publish" button that simulates saving or publishing the post by displaying a success message and clearing the editor.
Allow users to switch between the editor's "light" and "dark" modes by toggling the background and text colors.
To complete this challenge, you should have a functional blog post editor that allows users to write and edit their posts in Markdown format, with a real-time preview feature to display the formatted content as they type.

Components and their css can be found in src/components directory
## `Additional Packages Used`
1. Sweet Alert
2. Marked
3. Dom Purify

### `screenshots`
![screenshot-react-challenge.png](src%2Fassets%2Fscreenshots%2Fscreenshot-react-challenge.png)