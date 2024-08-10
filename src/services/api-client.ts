import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '95dbcc49dd6d4e5581303163bfedd4f7'
  }
})