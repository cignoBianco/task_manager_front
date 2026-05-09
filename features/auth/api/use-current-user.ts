"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";

export interface CurrentUser {
  id: number;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
  is_admin?: boolean;
}

export const useCurrentUser = () => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  return useQuery({
    queryKey: ["current-user"],

    queryFn: async (): Promise<CurrentUser> => {
      const { data } = await api.get<CurrentUser>(
        "/auth/me/"
      );

      return data;
    },

    enabled: isAuthenticated,

    retry: false,
  });
};