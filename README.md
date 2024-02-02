# To-Do List Web App

A simple web application for managing to-do tasks using Node.js, Express, EJS, and MongoDB.

## Features

- View existing tasks
- Add new tasks
- Delete tasks by checking a checkbox

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/to-do-list-app.git
    ```

2. Install dependencies:

    ```bash
    cd to-do-list-app
    npm install
    ```

3. Set up MongoDB:

   - Make sure MongoDB is installed and running on your machine.

4. Run the application:

    ```bash
    node app.js
    ```

   The application will be accessible at [http://localhost:3000/](http://localhost:3000/).

## Usage

1. Visit [http://localhost:3000/](http://localhost:3000/) in your web browser.

2. View existing tasks.

3. Add a new task:
   - Enter the task in the "New Task" input field.
   - Click the "+" button.

4. Delete a task:
   - Check the checkbox next to the task you want to delete.

## Project Structure

- `app.js`: Main server file.
- `public/`: Static assets (CSS, JavaScript).
- `views/`: EJS templates for rendering HTML pages.

## Dependencies

- Express: Web framework for Node.js.
- Mongoose: MongoDB object modeling tool.
- EJS: Embedded JavaScript templates.

## License

This project is licensed under the [MIT License](LICENSE).

