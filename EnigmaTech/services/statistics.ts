import { StatisticsT } from "@/type";



  export async function getStatistics(): Promise<StatisticsT> {
    const res = await fetch('http://localhost:3000/statistics')
    return res.json()
  }
