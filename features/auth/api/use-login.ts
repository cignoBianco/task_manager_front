"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  ok: boolean;
  message: string;
}

export const useLogin = () => {
  const setAuthenticated = useAuthStore(
    (state) => state.setAuthenticated
  );

  return useMutation({
    mutationFn: async (
      payload: LoginRequest
    ): Promise<LoginResponse> => {
      const { data } = await api.post<LoginResponse>(
        "/auth/login/",
        payload
      );

      return data;
    },

    onSuccess: () => {
      setAuthenticated(true);
    },
  });
};