# Shree Raga SWAAD GHAR

A React-based e-commerce web application built with Vite, TypeScript, and Tailwind CSS, with a Node.js backend for order processing and email notifications.

## Features

- Modern React with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- MongoDB for order storage
- EmailJS for order notifications
- Node.js Express backend API

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start backend server
npm run server

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Render

This project is configured for deployment on Render.com with separate services for the frontend and backend.

### Prerequisites

1. Create a Render account at [render.com](https://render.com)
2. Connect your GitHub repository to Render

### Deployment Steps

1. **Deploy the Backend API**

   - In Render dashboard, click "New" and select "Web Service"
   - Connect to your GitHub repository
   - Use the following settings:
     - Name: `shree-raga-swaad-ghar-api`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `node server.js`
   - Add the following environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_WAREHOUSE`: Your EmailJS warehouse template ID
     - `VITE_EMAILJS_TEMPLATE_CUSTOMER`: Your EmailJS customer template ID
     - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
     - `VITE_WAREHOUSE_EMAIL`: Your warehouse email address
   - Click "Create Web Service"

2. **Deploy the Frontend**

   - In Render dashboard, click "New" and select "Static Site"
   - Connect to your GitHub repository
   - Use the following settings:
     - Name: `shree-raga-swaad-ghar-frontend`
     - Build Command: `npm install && npm run build`
     - Publish Directory: `dist`
   - Add the following environment variable:
     - `VITE_API_URL`: URL of your backend API (e.g., `https://shree-raga-swaad-ghar-api.onrender.com`)
   - Click "Create Static Site"

3. **Alternative: Deploy using render.yaml**

   - Render supports Blueprint deployments using the `render.yaml` file
   - Push the repository with the updated `render.yaml` file
   - In Render dashboard, click "New" and select "Blueprint"
   - Connect to your GitHub repository
   - Render will automatically detect the `render.yaml` file and create the services
   - You'll still need to configure the environment variables

### Testing the Deployment

1. Once deployed, visit your frontend URL (e.g., `https://shree-raga-swaad-ghar-frontend.onrender.com`)
2. Test the order placement functionality
3. Verify that emails are being sent correctly

## Additional Commands

```bash
# Lint code
npm run lint

# Run backend server
npm run server

# Run development server with nodemon
npm run dev:server

# Test email functionality
npm run test:email
```

## Service Configuration

### MongoDB Setup

The application uses MongoDB for order storage:

1. Sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and database
3. Create a collection named `orders`
4. Get your MongoDB connection string and add it to your environment variables:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   ```

### EmailJS Setup

The application uses EmailJS for sending order notifications:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create a service and connect it to your email provider (Gmail, Outlook, etc.)
3. Create two email templates:
   - Warehouse notification template
   - Customer confirmation template
4. Add the following environment variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_WAREHOUSE=your_warehouse_template_id
   VITE_EMAILJS_TEMPLATE_CUSTOMER=your_customer_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_WAREHOUSE_EMAIL=your_warehouse_email
   ```

For more details on EmailJS setup, refer to the `EMAIL_SETUP.md` file.

## Project Structure

```
├── src/                  # Frontend source code
│   ├── components/       # React components
│   ├── services/         # Service modules
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
│
├── server.js            # Express backend server
├── models/              # MongoDB models
├── services/            # Backend services
│   └── email.ts         # Email service
│
├── public/              # Static assets
├── dist/                # Production build output
├── render.yaml          # Render deployment configuration
└── EMAIL_SETUP.md       # Email integration documentation
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Node.js with Express
- MongoDB
- EmailJS
- Render for deployment
