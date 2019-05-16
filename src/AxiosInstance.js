import axios from "axios";

let instance = null;
let callback = null;

export class AxiosInstance {

    static setCallback(func){
        callback = func;
    }

    static getInstance(){
        if(localStorage.getItem("accessToken")){
            instance = axios.create({
                timeout: 1000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                    'Access-Control-Allow-Origin': '*',
                },
                baseURL: "https://gentle-wave-71675.herokuapp.com/"
            });
        }else{
            localStorage.setItem("page","login");
            callback();
            instance = axios.create();
        }
        return instance;



    }

}
