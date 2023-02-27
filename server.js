const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

// Import routes and database connection
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Set up the express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up session configuration
const sess = {
  secret: 'Super secret secret', // This should be kept secret in production
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Configure express app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up session middleware
app.use(session(sess));

// Set up template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use the routes
app.use(routes);

// Sync database connection and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
