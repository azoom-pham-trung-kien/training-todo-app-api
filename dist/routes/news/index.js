const createNewsRoutes = (router) => {
    router.get('/news', (request, response) => {
        console.log('get news');
        return response.send('List news');
    });
    router.post('/news', (request, response) => {
        return response.send('Post list news');
    });
};
export default createNewsRoutes;
