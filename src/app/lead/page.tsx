"use client";

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useCollection } from '@/firebase';
import { collection, query, orderBy, type Query } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  companyType: string;
  gender: string;
  age: number;
  emailSubscription: string;
  submittedAt: {
    seconds: number;
    nanoseconds: number;
  } | null;
};

export default function LeadPage() {
  const router = useRouter();
  const firestore = useFirestore();
  const [loading, setLoading] = useState(true);

  const leadsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'leads'), orderBy('submittedAt', 'desc')) as Query<Lead>;
  }, [firestore]);

  const { data: leads, loading: leadsLoading } = useCollection<Lead>(leadsQuery);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4 py-12 sm:p-8 md:py-24">
      <div className="w-full max-w-7xl space-y-4">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Lead Data</h1>
            <Button variant="outline" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Collected Leads</CardTitle>
          </CardHeader>
          <CardContent>
            {leadsLoading ? (
              <p>Loading leads...</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Submitted At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads?.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>{lead.firstName} {lead.lastName}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell>{lead.phone}</TableCell>
                      <TableCell>{lead.companyName}</TableCell>
                      <TableCell>{lead.jobTitle}</TableCell>
                      <TableCell>
                        {lead.submittedAt ? new Date(lead.submittedAt.seconds * 1000).toLocaleString() : 'N/A'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
