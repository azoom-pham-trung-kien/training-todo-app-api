import createNewsRoutes from './news/index.js';
import createHomeRoutes from './home/index.js';
import createUploadRoutes from './upload/index.js';
const createRoutes = router => {
    createNewsRoutes(router);
    createHomeRoutes(router);
    createUploadRoutes(router);
};
export default createRoutes;
