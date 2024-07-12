import { PointOfInterest } from '@prisma/client';

export interface IPointOfInterestService {
  create(data: PointOfInterest): Promise<PointOfInterest>;
  findAll(): Promise<PointOfInterest[]>;
  findById(id: string): Promise<PointOfInterest | null>;
  update(id: string, data: PointOfInterest): Promise<PointOfInterest>;
  delete(id: string): Promise<void>;
}
