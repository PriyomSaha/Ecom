export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  total: number;
  items: CartItem[];
  shippingAddress: Address;
}

export interface Address {
  fullName: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// Add to existing types
export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  dateOfBirth?: string;
  profileImage?: string;
  addresses: Address[];
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    language: string;
  };
}

export interface ProfileTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}
