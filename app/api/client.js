import { create } from "apisauce";
import authsStorage from "../auths/storage"
import cache from "../utility/cache";

const apiClient = create({

  baseURL: "http://192.168.43.229:19002/api"

})

apiClient.addAsyncRequestTransform(async(request)=> {
const authToken = await authsStorage.getToken()
if(!authToken) return
  request.headers["x-auth-token"]=authToken

  })
const get = apiClient.get;

apiClient.get = async (url, params, axiousConfig) => {

  const response = await get(url, params, axiousConfig)

  if (response.ok) {
    cache.store(url, response.data)

    return response
  }
  const data = await cache.get(url)

  return data ? { okay: true, data } : response


}

export default apiClient;
