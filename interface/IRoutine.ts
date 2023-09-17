export interface IRoutine {
  category: string;
  kg: string;
  set: string;
  title: string;
}

export interface IRoutineStore {
  routine: IRoutine[];
  timer: string;
}
