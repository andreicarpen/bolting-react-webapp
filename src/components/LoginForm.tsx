import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

/**
 * LoginForm component handles user authentication.
 * It uses react-hook-form for form management and zod for validation.
 * The component is internationalized using react-i18next.
 */

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  /**
   * Handles form submission.
   * @param data - The form data (email and password)
   */
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // TODO: Implement login logic
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">{t('login.email')}</FormLabel>
          <Input id="email" {...register('email')} />
          {errors.email && <Box color="red.500">{errors.email.message}</Box>}
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">{t('login.password')}</FormLabel>
          <Input id="password" type="password" {...register('password')} />
          {errors.password && <Box color="red.500">{errors.password.message}</Box>}
        </FormControl>
        <Button type="submit" colorScheme="blue">{t('login.submit')}</Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;