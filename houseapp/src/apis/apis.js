import axios from 'axios';
import qs from 'qs';

const IP =  'http://192.168.43.227:80/'

//登录  acc：用户名，pwd：密码
export function login(acc,pwd){
    return axios.post(IP + 'login.php',qs.stringify({acc,pwd}))
}

//注册   acc：用户名，pwd：密码
export function reg(acc,pwd){
    return axios.post(IP + 'reg.php',qs.stringify({acc,pwd}))
}

//推荐数据  
export function getInfo(){
    return axios.get(IP + 'gethouselist.php')
}


