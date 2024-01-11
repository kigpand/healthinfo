export interface IRoutineData {
  kg: number;
  set: number;
  title: string;
}

export interface IRoutine {
  id: number;
  title: string;
  category: Category;
  routine: IRoutineData[];
}

export interface IRoutineStore {
  routine: IRoutine;
  timer: string;
}

export type Category = '등' | '하체' | '어깨' | '팔' | '가슴';
