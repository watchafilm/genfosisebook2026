"use client";

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useCollection } from '@/firebase';
import { collection, query, orderBy, type Query } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { LogOut, Download } from 'lucide-react';
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

  const handleExport = () => {
    if (!leads) return;

    const headers = [
      "First Name", "Last Name", "Email", "Phone", "Company Name", 
      "Job Title", "Company Type", "Gender", "Age", 
      "Email Subscription", "Submitted At"
    ];
    
    const csvRows = [headers.join(',')];

    leads.forEach(lead => {
      const submittedAt = lead.submittedAt 
        ? new Date(lead.submittedAt.seconds * 1000).toLocaleString() 
        : 'N/A';
        
      const values = [
        `"${lead.firstName || ''}"`,
        `"${lead.lastName || ''}"`,
        `"${lead.email || ''}"`,
        `"${lead.phone || ''}"`,
        `"${lead.companyName || ''}"`,
        `"${lead.jobTitle || ''}"`,
        `"${lead.companyType || ''}"`,
        `"${lead.gender || ''}"`,
        lead.age,
        `"${lead.emailSubscription || ''}"`,
        `"${submittedAt}"`
      ];
      csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'leads.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleExport} disabled={!leads || leads.length === 0}>
                <Download className="mr-2 h-4 w-4" /> Export to CSV
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
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
                    <TableHead>Gender</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Company Type</TableHead>
                    <TableHead>Subscription</TableHead>
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
                      <TableCell>{lead.gender}</TableCell>
                      <TableCell>{lead.age}</TableCell>
                      <TableCell>{lead.companyType}</TableCell>
                      <TableCell>{lead.emailSubscription}</TableCell>
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
