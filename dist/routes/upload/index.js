import upload from '../../upload';
const createUploadRoutes = (router) => {
    router.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
        const file = req.file;
        if (!file) {
            const error = new Error('Please upload a file');
            return next(error);
        }
        res.send(file);
    });
};
export default createUploadRoutes;
