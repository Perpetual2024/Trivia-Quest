import axios from "axios";

const BASE_URL = 'http://127.0.0.1:5555/project'

export const fetchProject = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:5555/project`);
        return response.data;
        } catch (error) {
            console.error(error);
            return[];
            }
            };



