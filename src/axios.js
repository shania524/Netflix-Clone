import axios from "axios";

 const instance =axios.create({
    baseURL: "https://api.themoviedb.org/3",
 });
//working:->
//  instance.getUri('/foo-bar');
//  result =https://api.themoviedb.org/3/foo-bar;

 export default instance;