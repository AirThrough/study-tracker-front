import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~shared/ui";
import { useLoginForm } from "~pages/Auth/model/hooks";

export const LoginForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            email:
            <input type="email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            password:
            <input type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
