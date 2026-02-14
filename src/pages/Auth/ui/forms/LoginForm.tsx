import {
  AccentButton,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~shared/ui";
import { useLoginForm } from "~pages/Auth/model/hooks";
import { FieldSet } from "~/shared/ui/field";
import { FormField } from "~/shared/components";

export const LoginForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Who's tracking?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FieldSet>
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="your.favorite@email.com"
              inputProps={{
                ...register("email"),
              }}
              error={errors.email?.message}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="secretpassword123"
              inputProps={{
                ...register("password"),
              }}
              error={errors.password?.message}
            />
          </FieldSet>
        </CardContent>
        <CardFooter>
          <AccentButton
            className="w-full"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </AccentButton>
        </CardFooter>
      </Card>
    </div>
  );
};
