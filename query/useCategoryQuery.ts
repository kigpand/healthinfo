import {useMutation, useQuery, useQueryClient} from 'react-query';
import {addCategory, deleteCategory, getCategory} from '../service/categoryService';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type CategoryQueryType = {
  category: string;
};

export function useCategoryQuery() {
  const queryClient = useQueryClient();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {data: category, isLoading, isError} = useQuery<CategoryQueryType[]>(['category'], getCategory);
  const {mutate: addCategoryMutate} = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(['category']);
    },
    onError: () => {
      nav.navigate('Error');
    },
  });
  const {mutate: deleteCategoryMutate} = useMutation(deleteCategory, {
    onSuccess: () => {
      console.log('success');
      queryClient.invalidateQueries();
    },
  });

  return {category, isLoading, isError, addCategoryMutate, deleteCategoryMutate};
}
