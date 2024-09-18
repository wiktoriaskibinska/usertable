import axios from "axios";
import { User } from "../models/User";

const fetchUsers = async (): Promise<User[] | undefined> => {
  try {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export default fetchUsers;
