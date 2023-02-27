// Import necessary modules and files
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");

// Use the API routes
router.use("/api", apiRoutes);

// Use the home routes
router.use("/", homeRoutes);

// Use the dashboard routes
router.use("/dashboard", dashboardRoutes);

// Send a 404 error message for any requests that don't match existing routes
router.use((req, res) => {
  res.status(404).end();
});

// Export the router
module.exports = router;
