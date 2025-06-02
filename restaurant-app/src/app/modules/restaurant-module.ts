export interface Restaurant 
{
    title : string;
    type : 'fast food ' | 'bar' | 'restauracja z obsługą'
    openHours : Date;
    closeHours : Date;
    address : string,
    town : string,
    comments : Comment[]
    grade : number;
}

export interface Comment 
{
  author: string;
  message: string;
  date: Date;
}