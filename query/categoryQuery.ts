import {useQuery} from 'react-query';
import {getCategory} from '../service/categoryService';

type CategoryQueryType = {
  category: string;
};

export function useCategoryQuery() {
  const {data: category, isLoading, isError} = useQuery<CategoryQueryType[]>(['category'], getCategory);

  return {category, isLoading, isError};
}
