const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(bodyParser.json());
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
