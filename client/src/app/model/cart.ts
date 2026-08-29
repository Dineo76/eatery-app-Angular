export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }
  
  export interface CartItem {
    item: MenuItem;
    quantity: number;
  }