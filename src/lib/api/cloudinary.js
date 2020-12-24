import axios from 'axios';

class Cloudinary {
  async uploadImg(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'iu4bccqs');

    const result = await axios.post(
      process.env.REACT_APP_CLOUDINARY_UPLOAD_URL,
      formData
    );

    return result.data;
  }
}

export default Cloudinary;
