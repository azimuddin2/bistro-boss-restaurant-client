import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const { data: menu, isLoading, error, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-restaurant-server-pied.vercel.app/menu');
            const data = await res.json();
            return data;
        }
    });

    return [menu, isLoading, error, refetch];
}

export default useMenu;