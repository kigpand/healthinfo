import {create} from 'zustand';
import {IRoutine} from '../interface/IRoutine';

interface IUserStore {
  routine: IRoutine | null;
  timer: number;
  setRoutine: (list: IRoutine) => void;
  setTimer: (time: number) => void;
}

const useExercise = create<IUserStore>(set => ({
  routine: null,
  timer: 0,
  setRoutine: (list: IRoutine) => set({routine: list}),
  setTimer: (time: number) => set({timer: time}),
}));

export default useExercise;
