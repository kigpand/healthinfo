export interface IRoutineData {
  category: string;
  kg: string;
  set: number;
  title: string;
}

export interface IRoutine {
  title: string;
  routine: IRoutineData[];
}

export interface IRoutineStore {
  routine: IRoutine;
  timer: string;
}
