import axios from "axios"


export function createApiClient(domain: string) {
  return axios.create({
    baseURL: `https://${domain}`,
    withCredentials: true
  })
}


export function createAuthApiClient(domain: string) {
  return axios.create({
    baseURL: `https://${domain}`,
    withCredentials: true
  })
}
