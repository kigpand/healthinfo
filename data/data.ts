import {IRoutine} from '../interface/IRoutine';

export const category = ['등', '하체', '어깨', '팔', '가슴'];

export const prevData: IRoutine[] = [
  {
    id: 1,
    title: '등루틴이에요',
    category: '등',
    routine: [
      {
        title: '등운동1',
        kg: 10,
        set: 5,
      },
      {
        title: '등운동2',
        kg: 8,
        set: 10,
      },
      {
        title: '등운동3',
        kg: 5,
        set: 7,
      },
      {
        title: '등운동4',
        kg: 15,
        set: 8,
      },
    ],
  },
  {
    id: 2,
    title: '어깨 루틴이에요',
    category: '어깨',
    routine: [
      {
        title: '어깨운동1',
        kg: 12,
        set: 3,
      },
      {
        title: '어깨운동2',
        kg: 15,
        set: 4,
      },
      {
        title: '어깨운동3',
        kg: 20,
        set: 5,
      },
    ],
  },
];

export const record = [
  {
    date: '20230811',
    title: '첫번째 루틴',
  },
  {
    date: '20230812',
    title: '어깨 루틴',
  },
  {
    date: '20230813',
    title: '어깨 루틴',
  },
  {
    date: '20230814',
    title: '첫번째 루틴',
  },
  {
    date: '20230815',
    title: '어깨 루틴',
  },
  {
    date: '20230816',
    title: '어깨 루틴',
  },
];
