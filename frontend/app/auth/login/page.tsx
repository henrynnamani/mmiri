"use client";

import { GlassWater } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, type ChangeEvent } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import api from "@/constants";
import { useCookies } from "react-cookie";

export default function LoginPage() {
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const router = useRouter();
  const [, setCookie] = useCookies(["access_token"]);

  const handleRegister = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      await api.post("/auths/signin", userDetail).then((res) => {
        toast("Login Successful", {
          position: "top-center",
        });
        setCookie("access_token", res.data.data.access_token, {
          path: "/",
        });
      });

      router.push("/");
    } catch {
      toast("Error logging In", {
        position: "top-center",
      });
    }
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-transparent p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GlassWater className="size-4" />
          </div>
          Mmiri
        </a>
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Welcome back</CardTitle>

              <CardDescription>Login with your Google account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister}>
                <div className="grid gap-6">
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleValueChange}
                        placeholder="test@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        name="password"
                        onChange={handleValueChange}
                        required
                      />
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Button
                      onClick={handleRegister}
                      type="submit"
                      className="w-full"
                    >
                      Sign In
                    </Button>
                  </div>
                  <div className="text-center text-sm">
                    Don&apos;t have an account?
                    <button
                      onClick={() => router.push("/auth/register")}
                      className="underline underline-offset-4"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
