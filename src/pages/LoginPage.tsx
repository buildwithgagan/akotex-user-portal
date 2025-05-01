
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    // This is where you would handle the login logic
    console.log(data);
    
    // For now, we'll simulate a successful login
    toast.success("Login successful", {
      description: "Welcome back to your dashboard!",
    });
    
    // Redirect to the dashboard page after a short delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md mx-auto">
          <div className="flex flex-col items-center mb-8">
            <Link to="/" className="mb-4">
              <img 
                src="/lovable-uploads/70753024-7e70-4502-981c-d3cc6d7218b7.png" 
                alt="Akotex Group Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-center">Welcome back</h1>
            <p className="text-muted-foreground mt-2 text-center">Enter your credentials to access your account</p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder="name@example.com" 
                            {...field} 
                            className="pl-10" 
                          />
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••" 
                            {...field} 
                            className="pl-10 pr-10" 
                          />
                          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-akotex-red hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-akotex-red hover:bg-akotex-darkred text-white">
                  Sign in
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-akotex-red hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
