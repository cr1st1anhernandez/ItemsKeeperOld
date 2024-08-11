'use client';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { EyeIcon, EyeOffIcon, MailIcon, UserIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { validateEmail, validateName, validatePassword } from '@/utils/validations';
import { register } from '@/lib/authentication';

export const Register = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleName = (name: string) => {
    setNameError(validateName(name));
    setName(name);
  };

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

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setNameError(nameErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (nameErr || emailErr || passwordErr) return;

    setLoading(true);
    try {
      await register({ name, email, password });
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Card className="w-full p-4 md:w-96 md:p-8">
      <CardHeader className="flex items-center justify-center">
        <h2 className="text-xl font-semibold md:text-2xl lg:text-4xl">Register</h2>
      </CardHeader>
      <CardBody>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <Input
            endContent={
              <UserIcon className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
            }
            errorMessage={nameError}
            id="name"
            isInvalid={!!nameError}
            label="Name"
            labelPlacement="outside"
            size="lg"
            type="text"
            variant="bordered"
            onChange={(e) => toggleName(e.target.value)}
          />
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
            onChange={(e) => togglePassword(e.target.value)}
          />
          <Button className="mt-6" color="primary" isLoading={loading} size="lg" type="submit">
            Register
          </Button>
        </form>
      </CardBody>
      <CardFooter>
        <p>
          Don&apos;t have an account?{' '}
          <Link className="font-semibold" href="/auth/login" underline="always">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
