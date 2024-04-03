import {  ServiceT } from "@/type";



  export async function getAllServices(): Promise<ServiceT[]> {
    const res = await fetch('http://localhost:3000/services')
    return res.json()
  }

  export async function getServiceById(serviceId:string): Promise<ServiceT> {


    const res = await fetch(`http://localhost:3000/services/${serviceId}`)
    return res.json()
  }

 