interface University {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Vendor {
  id: string;
  email: string;
  chatId: number;
  phoneNumber: string;
  available: boolean;
  businessName: string;
  bankCode: string;
  accountNumber: string;
  subaccount: string;
  isActive: boolean;
  role: Role;
  locations: [];
  lodges: [];
  orders: [];
}

interface VendorLocation {
  vendor: Vendor;
  vendorId: string;
  location: Location;
  locationId: string;
}

interface Location {
  id: string;
  name: string;
  vendors: VendorLocation[];
  lodges: Lodge[];
  price: number;
  university: University;
}

interface Lodge {
  id: string;
  name: string;
  location: Location;
  vendors: LodgePrice[];
}

interface LodgePrice {
  id: string;
  vendor: Vendor;
  vendorId: string;
  lodge: Lodge;
  lodgeId: string;
  createdAt: Date;
  updatedAt: Date;
}

export { LodgePrice, Lodge, Vendor, Location, University, VendorLocation };
