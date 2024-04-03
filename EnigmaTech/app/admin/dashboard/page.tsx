
'use client';
import React, { useEffect, useState } from 'react'
import api from "@/app/axios";
import { StatisticsT } from '@/type';
import BookIcon from '@mui/icons-material/Book';
import LanIcon from '@mui/icons-material/Lan';
export default function page() {
    const [statistics, setStatistics] = useState<StatisticsT | undefined>();

  useEffect(() => {
    const fetchStatistics = async () => {
      const res = await api.get<StatisticsT>("/admin/statistics");
      setStatistics(res.data);
    };
  
    fetchStatistics();
  }, []);

  return (
    <div className="container mx-auto px-5 pb-16 min-h-screen  ">
    <div className="grid grid-cols-1 sm:grid-cols-2  justify-items-center gap-8">
                    <div className="p-5 w-full  rounded-xl shadow-lg">
            <div className="flex gap-x-5 items-center py-3 ">
              <div className="bg-purple-500 h-14 w-14 rounded-lg flex justify-center items-center">
                <span className="text-white">
                  <BookIcon fontSize="large" />
                </span>
              </div>
              <div className=" grid gap-y-2">
                <h1 className="text-gray-500 font-medium font-sans">
                  Total Number of Blog
                </h1>
                <h3 className="text-3xl font-semibold text-gray-900">
                  {statistics?.blogCount}
                </h3>
              </div>
            </div>
          </div>
          <div className="p-5 w-full  rounded-xl shadow-lg">
            <div className="flex gap-x-5 items-center py-3 ">
              <div className="bg-teal-500 h-14 w-14 rounded-lg flex justify-center items-center">
                <span className="text-white">
                  <LanIcon fontSize="large" />
                </span>
              </div>
              <div className=" grid gap-y-2">
                <h1 className="text-gray-500 font-medium font-sans">
                  Total Number of Services
                </h1>
                <h3 className="text-3xl font-semibold text-gray-900">
                  {statistics?.serviceCount}
                </h3>
              </div>
            </div>
          </div>
        </div></div>
  )
}
