import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { image } = req.body;

      const uploadedResponse = await cloudinary.uploader.upload(image, {
        folder: 'nutriai_uploads',
      });

      res.status(200).json({ url: uploadedResponse.secure_url });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Upload failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
