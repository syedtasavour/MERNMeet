import axios from "axios";
import { createContext, useContext, useState } from "react";
import server from "../conf/server";
import { useNavigate } from "react-router-dom";
import httpStatus from "http-status";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: server,
});

export const AuthProvider = ({ children }) => {
  const authContext = useContext(AuthContext);
  const [userData, setUserData] = useState(authContext);
  
  const router = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      let request = await client.post("/api/v1/users/register", {
        name: name,
        username: username,
        password: password,
      });
      if (request.status === httpStatus.CREATED) {
        console.log(request);

        return request.data.message;
      }
    } catch (error) {
      throw error;
    }
  };

  const handleLogin  = async (username, password) => {
    try {
        let request = await client.post("/api/v1/users/login", {
            username: username,
            password: password
        });

        // console.log(username, password)
        // console.log(request.data)

        if (request.status === httpStatus.OK) {
            localStorage.setItem("token", request.data.token);
            router("/home")
        }
    } catch (err) {
        throw err;
    }
  };

  const getHistoryOfUser = async () => {
    try {
        let request = await client.get("/api/v1/get_all_activity", {
            params: {
                token: localStorage.getItem("token")
            }
        });
        return request.data
    } catch
     (err) {
        throw err;
    }
}

const addToUserHistory = async (meetingCode) => {
    try {
        let request = await client.post("/api/v1/add_to_activity", {
            token: localStorage.getItem("token"),
            meeting_code: meetingCode
        });
        return request
    } catch (e) {
        throw e;
    }
}


const data = {
    userData, setUserData, addToUserHistory, getHistoryOfUser, handleRegister, handleLogin
}


 
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
