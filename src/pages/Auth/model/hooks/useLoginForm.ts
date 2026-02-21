import { useForm, type SubmitHandler } from "react-hook-form";
import {
  loginFormSchema,
  type LoginFormSchema,
} from "../config/LoginForm.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { authApiService } from "~/shared/api/auth.service";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "~/app/model/store/auth/auth.store";

export const useLoginForm = () => {
  const authStore = useAuthStore();
  const { setIsAuthenticated } = authStore;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: async (data: LoginFormSchema) => {
      return await authApiService.login({ data });
    },
    onSuccess: (token) => {
      localStorage.setItem("accessToken", token);
      setIsAuthenticated(true);
      toast.success("Login successful");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => login(data);

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    isPending,
  };
};
