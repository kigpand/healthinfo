import {create} from 'zustand';
import {IRoutine} from '../interface/IRoutine';

interface IUserStore {
  list: IRoutine[];
  routine: IRoutine | null;
  timer: number;
  updateRoutine: IRoutine | null;
  setList: (routine: IRoutine[]) => void;
  setRoutine: (list: IRoutine) => void;
  setTimer: (time: number) => void;
  setUpdateRoutine: (routine: IRoutine) => void;
}

const useExercise = create<IUserStore>(set => ({
  list: [],
  routine: null,
  timer: 0,
  updateRoutine: null,
  setList: (routine: IRoutine[]) => set({list: routine}),
  setRoutine: (list: IRoutine) => set({routine: list}),
  setTimer: (time: number) => set({timer: time}),
  setUpdateRoutine: (routine: IRoutine) => set({updateRoutine: routine}),
}));

export default useExercise;
