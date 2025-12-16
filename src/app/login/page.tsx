"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const auth = getAuth();

    // Map hardcoded username to email
    const firebaseEmail = 'genfosis@example.com';
    
    // Check if the provided username is correct
    if (email.toLowerCase() !== 'genfosis') {
         toast({
            variant: "destructive",
            title: "Invalid Credentials",
            description: "Please check your username and password.",
        });
        setIsLoading(false);
        return;
    }

    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, firebaseEmail, password);
      router.push('/lead');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/configuration-not-found' || error.code === 'auth/operation-not-allowed') {
         toast({
            variant: "destructive",
            title: "Login Failed",
            description: "Email/Password sign-in is not enabled. Please enable it in your Firebase project settings.",
        });
      } else {
         toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Please check your username and password.",
        });
      }
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the lead data.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="genfosis"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
