import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"


const options = {
    params: {
      hl: 'en',
      gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '3bd9917d88mshb2824eed040f8d9p144c99jsn204660992dd6',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };


 export const fetchDataFromApi = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
  }
