import { app } from '../src/services/firebase.js';

import './html-equal.js';
import './profile.test.js';

QUnit.done(() => {
    app.delete();
});