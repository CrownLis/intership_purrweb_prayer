import React from 'react';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import backgroundImg from '@/assets/images/background-1.png';
import FormField from '@/components/FormField';
import AuthLayout from '@/layouts/AuthLayout';
import { GuestStackParamList } from '@/navigation/GuestNavigation/GuestNavigation';
import { UnAuthRoutes } from '@/navigation/routes';
import { rootRoutines, rootSelectors } from '@/store/ducks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import PasswordInput from '@/UI/PasswordInput';
import { validateEmail } from '@/utils/validation';

import styles from './SignIn.module.scss';

type FormValues = {
  email: string;
  password: string;
};

type SignInScreenProps = NativeStackScreenProps<GuestStackParamList, UnAuthRoutes.SignIn>;

const SignIn = () => {
  const dispatch = useAppDispatch();

  const { navigate } = useNavigation<SignInScreenProps['navigation']>();

  const isLoading = useAppSelector(rootSelectors.auth.getAuthLoading);

  const { control, handleSubmit, ...formProps } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(rootRoutines.auth.signIn(data));
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    return console.log(errors);
  };

  const goToSignUp = () => {
    navigate(UnAuthRoutes.SignUp);
  };

  return (
    <AuthLayout>
      <Text style={styles.title}>Log in</Text>
      <FormProvider control={control} handleSubmit={handleSubmit} {...formProps}>
        <FormField
          label="Email"
          name="email"
          rules={{
            required: 'Email is required',
            validate: validateEmail,
          }}
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState: { error, isDirty } }) => (
            <Input
              value={value}
              isDirty={isDirty}
              isError={!!error}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Enter your e-mail"
            />
          )}
        />
        <FormField
          label="Password"
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password field must be at leat 5 characters',
            },
          }}
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState: { error, isDirty } }) => (
            <PasswordInput
              value={value}
              isDirty={isDirty}
              isError={!!error}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Enter your password"
            />
          )}
        />
      </FormProvider>
      <Button variant="primary" onPress={handleSubmit(onSubmit, onError)} isLoading={isLoading}>
        Confirm
      </Button>
      <Text style={styles.signUp}>
        Don`t have an account?{' '}
        <Text style={styles.signUp_link} onPress={goToSignUp}>
          Sign up
        </Text>
      </Text>
    </AuthLayout>
  );
};

export default SignIn;
