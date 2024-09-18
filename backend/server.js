const app = require('./app.js');
require('dotenv').config(); // Load environment variables from .env

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
