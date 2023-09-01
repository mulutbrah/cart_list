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