import { useQuery } from '@tanstack/react-query';
import { getimages } from "../api";

export const useImages = () => {
    const {data, isLoading} = useQuery([], getimages);
    return {data, isLoading};
};