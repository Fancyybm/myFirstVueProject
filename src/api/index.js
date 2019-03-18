import axios from 'axios'
export const getNew = (params)=>{
        return  axios.get('/api/getnew/'+params.id)
}

export function getComment(params){
    return axios.get('/api/getcomments/'+params.id+'?'+'pageindex=' + params.page)
}