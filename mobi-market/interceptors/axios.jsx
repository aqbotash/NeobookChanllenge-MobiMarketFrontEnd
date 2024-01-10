import axios from "axios"

axios.defaults.baseURL = "https://neobook.online/mobi-market/"

axios.interceptors.response.use(resp=>resp, async error=>{
    if(error.response.status===401){
        const response = await axios.post("refresh", {}, {withCredentials:true})
    }
    if(response.status===200){
        axios.defaults.headers.common['Authorization']=`bearer${data['token']}`
        return axios(error.config);
    }
    return error;
})