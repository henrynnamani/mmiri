import { TestingModule } from '@nestjs/testing';
import { UniversitiesService } from '../universities.service';
import { UniversityModelAction } from '../model/universities.model-action';
import { BadRequestException } from '@nestjs/common';
import * as SYS_MSG from '@modules/common/system-message';
import { testingModule } from './base.test';
import { mockDto, mockUniversity } from './mock.test';

describe('UniversitiesService', () => {
  let service: UniversitiesService;
  let universityModelAction: UniversityModelAction;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<UniversitiesService>(UniversitiesService);
    universityModelAction = module.get<UniversityModelAction>(
      UniversityModelAction,
    );
  });

  describe('createUniversity', () => {
    it('should throw if university already exists', async () => {
      (universityModelAction.get as jest.Mock).mockResolvedValue(
        mockUniversity,
      );

      await expect(service.createUniversity(mockDto)).rejects.toThrow(
        new BadRequestException(SYS_MSG.UNIVERSITY_ALREADY_EXIST),
      );

      const spy = jest.spyOn(universityModelAction, 'get');

      expect(spy).toHaveBeenCalledWith({
        getRecordIdentifierOption: { name: mockDto.name },
      });
    });

    it('should throw if creation fails', async () => {
      (universityModelAction.get as jest.Mock).mockResolvedValue(null);
      (universityModelAction.create as jest.Mock).mockResolvedValue(null);

      await expect(service.createUniversity(mockDto)).rejects.toThrow(
        new BadRequestException(SYS_MSG.UNIVERSITY_CREATION_FAILED),
      );

      const spyOnGet = jest.spyOn(universityModelAction, 'get');
      const spyOnCreate = jest.spyOn(universityModelAction, 'create');

      expect(spyOnGet).toHaveBeenCalled();
      expect(spyOnCreate).toHaveBeenCalledWith({
        createPayload: mockDto,
        transactionOptions: {
          useTransaction: false,
        },
      });
    });

    it('should create and return the university if all checks pass', async () => {
      (universityModelAction.get as jest.Mock).mockResolvedValue(null);
      (universityModelAction.create as jest.Mock).mockResolvedValue(
        mockUniversity,
      );

      const result = await service.createUniversity(mockDto);

      expect(result).toEqual({
        data: mockUniversity,
        message: SYS_MSG.UNIVERSITY_CREATED,
      });
    });
  });

  describe('findUniversityByName', () => {
    it('should call modelAction.get with name filter', async () => {
      await service.findUniversityByName('Test Uni');

      const spy = jest.spyOn(universityModelAction, 'get');
      expect(spy).toHaveBeenCalledWith({
        getRecordIdentifierOption: { name: 'Test Uni' },
      });
    });
  });

  describe('findUniversityById', () => {
    it('should call modelAction.get with id filter', async () => {
      await service.findUniversityById('abc123');

      const spy = jest.spyOn(universityModelAction, 'get');
      expect(spy).toHaveBeenCalledWith({
        getRecordIdentifierOption: { id: 'abc123' },
      });
    });
  });
});
