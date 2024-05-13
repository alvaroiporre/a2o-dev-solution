import axios from 'axios';

export const fetchProblemData = async (input: string, id: number) => {
  try {
    console.log("data", process.env.API_URL)
    const response = await axios.post(`${process.env.API_URL}/solve/${id}`, { input });
    return response.data;
  } catch (error) {
    console.error(`Error fetching problem-${id} data:`, error);
    throw error;
  }
};