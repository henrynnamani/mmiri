const mockLocationData = {
  locations: ['hilltop', 'odenigwe'],
  universityId: 'hfdh03-dfhhfd-0183sd',
};

const mockCreatedLocations = {
  data: [
    {
      id: 'loc1',
      name: 'A',
      vendors: expect.any(Object),
      university: expect.any(Object),
      lodges: [],
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    },
    {
      id: 'loc2',
      name: 'B',
      vendors: expect.any(Object),
      university: expect.any(Object),
      lodges: [],
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    },
  ],
  message: 'Locations created successfully',
};

export { mockLocationData, mockCreatedLocations };
