import express from 'express';
import path from 'path';

import application from './application';

let app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));

application(app);

export default app;
