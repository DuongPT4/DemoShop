export class Product{
    id: number;
    name: string;
    description: string;
    img: string;
    comments? : string[];
}

export const PRODUCTS = [
    {id:0, name:'coke',description:'This is coke', img:'assets/images/coke.jpg',
        comments:["coke comment 1", "coke comment 2", "coke comment 3"]},
    {id:1, name:'shrimp',description:'This is shrimp', img:'assets/images/shrimp.jpg', 
        comments:["shrimpo comment 1", "shrimp comment 2"]},
    {id:2, name:'tuna',description:'This is tuna', img:'assets/images/tuna.jpg',
        comments:["tuna comment 1"]},
    {id:3, name:'wine',description:'This is wine', img:'assets/images/wine.jpg'},
]