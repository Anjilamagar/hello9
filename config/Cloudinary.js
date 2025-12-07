import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
cloudinary.config({
    cloud_name: 'dvhyaj2bc',
    api_key: '647891563176244',
    api_secret: 'BGthsUZaf7vpAf-ptif62CcYU-k' // Click 'View API Keys' above to copy your API secret
});

// Upload an image
const uploadResult = await cloudinary.uploader
    .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
        public_id: 'shoes',
    }
    )
    .catch((error) => {
        console.log(error);
    });


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'some-folder-name',
        // format: async (req, file) => 'png', // supports promises as well
        // public_id: (req, file) => 'computed-filename-using-request',
    },
});

export const upload = multer({ storage: storage });


