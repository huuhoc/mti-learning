import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from 'next/image'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome to Back! 👋</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Please sign in to your account and start the adventure
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email or Username</Label>
          <Input
            id="email"
            type="email"
            placeholder="Type your username"
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
            placeholder="Type your password"
            required
          />
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-muted-foreground text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm font-bold text-primary underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            or
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Image src="/assets/images/socials/facebook.svg" alt="facebook" width={20} height={20}/>
          </Button>
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Image src="/assets/images/socials/twitter.svg" alt="twitter" width={20} height={20}/>
          </Button>
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Image src="/assets/images/socials/google.svg" alt="google" width={20} height={20}/>
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">
        New on our platform?{" "}
        <a href="#" className="text-primary hover:underline underline-offset-4">
          Create an account
        </a>
      </div>
    </form>
  );
}
