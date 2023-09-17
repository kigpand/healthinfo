import {create} from 'zustand';
import {IRoutine, IRoutineStore} from '../interface/IRoutine';

interface IUserStore {
  routine: IRoutineStore | null;
  setRoutine: (list: IRoutine[], timer: string) => void;
}

const useExercise = create<IUserStore>(set => ({
  routine: null,
  setRoutine: (list: IRoutine[], timer: string) =>
    set({routine: {routine: list, timer: timer}}),
}));

export default useExercise;
