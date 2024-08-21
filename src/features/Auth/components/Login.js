import React, {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useAuth} from "../hooks/useAuth";
import InputField from "../../../components/InputField";
import PasswordInput from "../../../components/PasswordInput";
import Button from "../../../components/Button";
import {DefaultContainer, ButtonsContainer} from "../../../components/Container";

const loginSchema = yup.object({
  email: yup.string().email("Nem megfelelő e-mail").required("E-mail kötelező"),
  password: yup.string().required("Jelszó kötelező"),
}).required();

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = ({onCancel}) => {
  const [isSubmitingForm, setIsSubmitingForm] = useState(false);
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: defaultValues,
  });

  const {login} = useAuth();

  const handleLogin = async (data) => {
    setIsSubmitingForm(true);
    const isSuccess = await login(data.email, data.password);

    if (isSuccess) {
      onCancel();
    }
    setIsSubmitingForm(false);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(handleLogin)}>
        <DefaultContainer>
          <Controller
            name="email"
            control={control}
            render={({field}) => (
              <InputField
                {...field}
                type="email"
                placeholder="E-mail cím"
                autoComplete="email"
                errorMessage={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({field}) => (
              <PasswordInput
                {...field}
                placeholder="Jelszó"
                autoComplete="current-password"
                errorMessage={errors.password ? errors.password.message : ""}
              />
            )}
          />
        </DefaultContainer>
        <ButtonsContainer>
          <Button
            type="submit"
            loading={isSubmitingForm}>Bejelentkezés</Button>
          <Button
            type="button"
            variant={"cancel"}
            onClick={onCancel}>Mégsem</Button>
        </ButtonsContainer>
      </form>
    </>
  );
};

export default LoginForm;
