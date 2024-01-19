import {useMutation, useQuery, useQueryClient} from 'react-query';
import {addRecord, getRecord} from '../service/recordService';

type RecordType = {
  title: string;
  category: string;
  date: string;
};

export function useRecordQuery() {
  const queryClient = useQueryClient();
  const {data: record, isLoading, isError} = useQuery<RecordType[]>(['record'], getRecord);
  const {mutate: addRecordMutation} = useMutation(addRecord, {
    onSuccess: () => {
      queryClient.invalidateQueries(['record']);
    },
  });

  return {record, isLoading, isError, addRecordMutation};
}
