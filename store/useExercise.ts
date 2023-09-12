import {create} from 'zustand';

interface IUserStore {
  routine: any | null;
  setRoutine: (list: any) => void;
}

const useExercise = create<IUserStore>(set => ({
  routine: null,
  setRoutine: (list: any) => set({routine: list}),
}));

export default useExercise;
