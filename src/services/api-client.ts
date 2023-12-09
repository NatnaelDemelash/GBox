import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params:{
    key: '5a8e9858093e4a838a7563d5f68b2913'
  }
})
