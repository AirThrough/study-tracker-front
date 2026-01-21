import { useForm, type SubmitHandler } from "react-hook-form";
import {
  loginFormSchema,
  type LoginFormSchema,
} from "../config/LoginForm.config";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => console.log(data);

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
  };
};
