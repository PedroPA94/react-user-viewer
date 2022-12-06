/* eslint-disable semi */
interface Address {
    "street": string,
    "suite": string,
    "city":  string,
    "zipcode":  string,
    "geo": {
      "lat": string,
      "lng": string
    }
}

interface Company {
  "name": string,
  "catchPhrase": string,
  "bs": string
}

export default interface IUser {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": Address,
  "phone": string,
  "website": string,
  "company": Company,
  "img"?: string
}