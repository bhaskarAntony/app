import axios from "axios";

export const Register = async (formData) => {
    
    try {
        const response = await axios.post('https://api.be-practical.com/course/register', formData);
        // console.log(response);
        return {status: true, data:response}
      } catch (error) {
        return {status: false, data:error.message}
      }
    
}