'use client';
import { login } from '@/lib/authentication';
import { validateEmail, validatePassword } from '@/utils/validations';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { EyeIcon, EyeOffIcon, MailIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleEmail = (email: string) => {
    setEmailError(validateEmail(email));
    setEmail(email);
  };

  const togglePassword = (password: string) => {
    setPasswordError(validatePassword(password));
    setPassword(password);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) return;
    setLoading(true);
    try {
      await login({ email, password });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Card className="w-full p-4 md:w-96 md:p-8">
      <CardHeader className="flex items-center justify-center">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-4xl">Login</h2>
      </CardHeader>
      <CardBody>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <Input
            endContent={
              <MailIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            }
            errorMessage={emailError}
            id="email"
            isInvalid={!!emailError}
            label="Email"
            labelPlacement="outside"
            size="lg"
            required
            type="email"
            variant="bordered"
            onChange={(e) => toggleEmail(e.target.value)}
          />
          <Input
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeOffIcon className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <EyeIcon className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
            errorMessage={passwordError}
            isInvalid={!!passwordError}
            label="Password"
            labelPlacement="outside"
            size="lg"
            type={isVisible ? 'text' : 'password'}
            variant="bordered"
            required
            onChange={(e) => togglePassword(e.target.value)}
          />
          <Button className="mt-6" color="primary" isLoading={loading} size="lg" type="submit">
            Login
          </Button>
        </form>
      </CardBody>
      <CardFooter>
        <p>
          Don&apos;t have an account?{' '}
          <Link className="font-semibold" href="/auth/register" underline="always">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
