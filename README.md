# React Shopping Cart App

## Project Overview

This project is a web application for managing a shopping cart. It allows users to view a list of products, add them to their cart, and view detailed information about each product. Additionally, users can remove items from the cart and see the total price in Indonesian Rupiah (IDR) currency format.

## Design Decisions

### Technology Stack

- **React**: We chose React as the frontend library for building the user interface due to its component-based architecture and popularity in the web development community.

- **TypeScript**: TypeScript was selected for its strong static typing, which helps catch errors during development and improves code maintainability.

- **JSON Server**: We used JSON Server as a mock API to provide data for the shopping cart. This allows us to simulate real-world data interactions without relying on a backend server.

- **Axios**: Axios is used for making HTTP requests to the JSON Server endpoints.

- **CSS (with BEM naming convention)**: We used plain CSS for styling components, following the Block Element Modifier (BEM) naming convention for better maintainability.

### Project Structure

The project's codebase is organized as follows:

src/
|-- api/
| |-- carts/
| | |-- index.ts
|-- components/
| |-- CartItem/
| | |-- index.tsx
| | |-- style.scss
| |-- Header/
| | |-- index.tsx
| | |-- style.scss
| |-- Footer.tsx
|-- pages/
| |-- cart/
| | |-- index.tsx
| | |-- style.scss
| |-- product/
| | |-- index.tsx
| | |-- style.scss
| |-- utils/
| | |-- helper.ts
|-- App.tsx
|-- index.tsx

- **api/**: The services directory contains utility functions for making HTTP requests to the JSON Server, this directory contains `carts`, which are resonsible for managing carts api which encapsulated in the `index.ts` file.

- **components/**: This directory contains React components, such as `CartItem`, `Header`, and `Footer`, which are responsible for rendering different parts of the user interface.

- **App.tsx**: The main application component that serves as the entry point for rendering other components.

## Environment Variables

This project relies on environment variables to manage sensitive or configuration data. Environment variables are essential for keeping sensitive information, such as API keys or database credentials, secure.

### List of Environment Variables

| Variable Name        | Description                                 |
|----------------------|---------------------------------------------|
| REACT_APP_API_URL    | URL of the backend API or in my case I use json-server |

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

### `npm run server`

Run db.json with `json-server` with local PORT=9000
