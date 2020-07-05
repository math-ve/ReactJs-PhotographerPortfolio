import express from 'express';
import serverless from 'serverless-http';
import fileUpload from 'express-fileupload';

const app = express();

app.use(fileUpload());

const router = express.Router();

router.post('/', (req, res) => {
    if(req.file === null) {
        return res.status(400).json({msg: 'no file uploaded'});
    }
    console.log(req.files);
    const file = req.files.file;



    file.mv(`./public/assets/`+ file.name)

    // file.mv(`./public/assets/`+ file.name, err => {
    //     if(err) {
    //         console.error(err);
    //         return res.status(500).send(err)
    //     }

    //     res.json({fileName: file.name, filePath: `/assets/${file.name}`})
    // })
})


app.use('/.netlify/functions/server', router);


exports.handler = serverless(app);