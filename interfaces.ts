export interface IPosition {
  top: string;
  left: string;
}
export interface ISlots {
  value: string;
  position: IPosition;
  next?: string;
  specialSlot?: {
    type: 'snake' | 'ladder';
    path: IPosition[];
  };
}
