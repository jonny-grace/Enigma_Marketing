export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export type NewsT= {
title:string;
image:string;
detail:string;
date:string;
}

export interface BlogT {
  _id: string
  title: string
  description: string
  imageUrl:String
 date:String
 
  
}

export interface ServiceT {
  title: string
  description: string
  imageUrl:String
  _id: string
  
}

export interface StatisticsT{
  blogCount:String,
  serviceCount:String
}



