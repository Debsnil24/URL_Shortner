import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useStore } from "@/store/useStore";

export default function Login() {
  const { setAuthDialogOpen, setIsLogin } = useStore();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
        <p className="text-sm text-gray-400">
          Sign in to your account to continue
        </p>
      </div>
      <Input
        isClearable
        type="email"
        placeholder="Enter your email"
        startContent={
          <Icon icon="mdi:email" className="w-5 h-5 text-gray-700" />
        }
        label={<p className="text-white ml-1">Email</p>}
        labelPlacement="outside"
        className="text-white"
        classNames={{
          clearButton: "text-black",
          input: ["placeholder:text-xs"],
        }}
      />
      <Input
        isClearable
        type="password"
        placeholder="Enter your password"
        startContent={
          <Icon icon="mdi:lock" className="w-5 h-5 text-gray-700" />
        }
        label={<p className="text-white ml-1">Password</p>}
        labelPlacement="outside"
        className="text-white"
        classNames={{
          clearButton: "text-black",
          input: ["placeholder:text-xs"],
        }}
      />
      <div className="flex gap-2 w-full justify-end items-center -mt-1.5 ">
        <Button
          variant="solid"
          className="bg-transparent text-gray-300 h-4 text-xs hover:underline"
        >
          Forgot Password?
        </Button>
      </div>
      <Button
        color="primary"
        onPress={() => {
          console.log("Login pressed");
          setAuthDialogOpen(false);
        }}
        radius="full"
        className="text-md font-semibold"
      >
        Sign In
      </Button>
      <p className="text-sm text-gray-400 flex justify-center">
        Don&apos;t have an account?&nbsp;
        <span
          onClick={() => {
            setIsLogin(false);
          }}
          className="text-sm cursor-pointer hover:underline text-gray-300"
        >
          Sign up
        </span>
      </p>
    </>
  );
}
