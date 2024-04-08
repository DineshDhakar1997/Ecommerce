import multer from "multer";
import { v4 as uuid } from 'uuid';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //console.log(file);
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueId = uuid();
        const ext = file.originalname.split('.').pop();
        cb(null, uniqueId + "." + ext);
    }
});
export const singleUpload = multer({ storage }).single('photo');
