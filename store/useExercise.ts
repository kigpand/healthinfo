import {create} from 'zustand';
import {IRoutine} from '../interface/IRoutine';

interface IUserStore {
  list: IRoutine[];
  routine: IRoutine | null;
  timer: number;
  setList: (routine: IRoutine[]) => void;
  addList: (routine: IRoutine) => void;
  setRoutine: (list: IRoutine) => void;
  setTimer: (time: number) => void;
}

const useExercise = create<IUserStore>(set => ({
  list: [],
  routine: null,
  timer: 0,
  setList: (routine: IRoutine[]) => set({list: routine}),
  addList: (routine: IRoutine) =>
    set(state => ({list: [...state.list, routine]})),
  setRoutine: (list: IRoutine) => set({routine: list}),
  setTimer: (time: number) => set({timer: time}),
}));

export default useExercise;
