import {create} from 'zustand';
import {IRoutine} from '../interface/IRoutine';

interface IUserStore {
  currentRoutine: IRoutine | null;
  timer: number;
  updateRoutine: IRoutine | null;
  setCurrentRoutine: (list: IRoutine) => void;
  setTimer: (time: number) => void;
  setUpdateRoutine: (routine: IRoutine) => void;
}

const useExercise = create<IUserStore>(set => ({
  currentRoutine: null,
  timer: 0,
  updateRoutine: null,
  setCurrentRoutine: (list: IRoutine) => set({currentRoutine: list}),
  setTimer: (time: number) => set({timer: time}),
  setUpdateRoutine: (routine: IRoutine) => set({updateRoutine: routine}),
}));

export default useExercise;
