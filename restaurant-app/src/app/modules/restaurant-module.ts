export class Restaurant 
{
    id: number = 0; 
    title : string = "";
    type : MenuType = "";
    openHours : Date = new Date('1900-01-01 01:00:00');
    closeHours : Date = new Date('1900-01-01 01:00:00');
    address : string = "";
    town : string = "";
    comments : Comment[] = [];
    grade : number = 0;

    constructor(init?: Partial<Restaurant>) 
    {
      Object.assign(this, init);
    }

    GetAvarage(): number {
      if (this.comments.length===0)
      {
        return 0
      }
      let sum : number = 0
      for(let i=0; i<this.comments.length; i++)
      {
          sum += this.comments[i].grade
      }
      return parseFloat((sum/this.comments.length).toFixed(2));
    } 
}

export interface Comment 
{
  author: string;
  message: string;
  date: Date;
  grade: number;
}

export type MenuType = 
  | ''
  | 'restauracja z obsługą' 
  | 'menu degustacyjne'
  | 'menu dnia'
  | 'bufet'
  | 'fast food'
  | 'bar'
  | 'wegańskie'
  | 'wegetariańskie'
  | 'menu sezonowe';