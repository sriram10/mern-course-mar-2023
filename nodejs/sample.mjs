// Check the different between ES Modules and Common JS
// https://nodejs.org/api/esm.html

import path from 'path';

console.log('ES Modules ', path.dirname(import.meta.url))