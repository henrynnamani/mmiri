'use client'

import { GalleryVerticalEnd, GlassWater } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, type ChangeEvent } from "react"
// import api from "@/constants/api"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function RegisterPage () {
  const [userDetail, setUserDetail] = useState({
    email: '',
    password: ''
  })
  const router = useRouter()

    const handleRegister = async (e) => {
      e.preventDefault()
      try {
        console.log("I am here")
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          position: 'top-center',
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
        // await api.post('/signup', userDetail)
      } catch(err) {
        console.log(err)
      }
    }

    // toast("Event has been created", {
    //   description: "Sunday, December 03, 2023 at 9:00 AM",
    //   action: {
    //     label: "Undo",
    //     onClick: () => console.log("Undo"),
    //   },
    // })
    
    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log('')
      setUserDetail({
        ...userDetail,
        [e.target.name]: e.target.value
      })
    }
  
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-transparent p-6 md:p-10">
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
          <CardTitle className="text-xl">Create a New Account</CardTitle>
          
          <CardDescription>
            Sign up with your Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Sign up with Google
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
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
                  <Input id="password" type="password" name="password" onChange={handleValueChange} required />
                  <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                </div>
                <Button onClick={handleRegister} type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <button onClick={() => router.push('/auth/login')} className="underline underline-offset-4">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
      </div>
    </div>
  )
}