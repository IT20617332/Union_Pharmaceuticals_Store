import axios from "axios";

const HOST = "http://localhost:8070/drug"

export const getAllDrugs= async() => {
    try{
        const response = await axios.get(`${HOST}/view`)
        return response

    }catch(error){
        console.log("Error while retrieving data",error)
        return false;

    }
}