"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";

interface LogoutResponse {
  message: string;
}

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logoutStore = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: async (): Promise<LogoutResponse> => {
      const { data } = await api.post<LogoutResponse>(
        "/auth/logout"
      );

      return data;
    },

    onSuccess: () => {
      logoutStore();

      queryClient.removeQueries({
        queryKey: ["current-user"],
      });
    },
  });
};