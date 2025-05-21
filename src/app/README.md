# Sibasi Ltd Angular Application

This is a simple Angular application that implements:
- A login form with validation
- A dashboard with responsive menu
- A Todo list component for task management
- A responsive cards component

## Installation and Setup

1. Make sure you have Node.js and npm installed on your system.
2. Navigate to the project directory:
   ```
   cd angular-sample
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200`

## Application Structure

The application consists of the following components:

1. **Login Component:**
   - Validates email and password
   - Redirects to dashboard upon successful login

2. **Dashboard Component:**
   - Contains a responsive menu with two links
   - Serves as the main layout for the authenticated part of the application

3. **Todo Component:**
   - Allows adding, editing, and deleting tasks
   - Supports marking tasks as completed

4. **Cards Component:**
   - Displays responsive text cards
   - Adapts to different screen sizes (desktop, tablet, mobile)

## Responsive Design

The application implements responsive design for different screen sizes:

- **Desktop:** 3 cards in a row
- **Tablet:** 2 cards in a row
- **Mobile:** Cards stacked vertically

## Technologies Used

- Angular 17
- TypeScript
- CSS for styling
- Angular Router for navigation
