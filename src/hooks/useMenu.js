import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const { data: menu, isLoading, isError } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu');
            const data = await res.json();
            return data;
        }
    });

    return [menu, isLoading, isError];
}

export default useMenu;