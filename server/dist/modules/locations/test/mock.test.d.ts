declare const mockLocationData: {
    locations: {
        name: string;
        price: number;
    }[];
    universityId: string;
};
declare const mockCreatedLocations: {
    data: {
        id: string;
        name: string;
        vendors: any;
        university: any;
        lodges: never[];
        createdAt: any;
        updatedAt: any;
    }[];
    message: string;
};
export { mockLocationData, mockCreatedLocations };
