import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4 py-12 sm:p-8 md:py-24">
      <div className="w-full max-w-4xl space-y-4">
        <Button asChild variant="outline" className="self-start">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Form
          </Link>
        </Button>
        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-4xl">Privacy Policy</CardTitle>
            <CardDescription>Our commitment to your privacy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <div className="space-y-2">
              <h2 className="font-headline text-2xl font-semibold">Introduction</h2>
              <p>
                This is a sample text for your privacy policy. In a real application, you would need to detail how you collect, use, and protect user data. This sample policy outlines general principles.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">1. Information We Collect</h3>
              <p>
                We collect information you provide directly to us when you fill out our lead form. This may include, but is not limited to:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Personal Identification Information (Name, Gender, Age)</li>
                <li>Contact Information (Email address, Phone number)</li>
                <li>Professional Information (Company Name, Company Type, Job Title)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">2. How We Use Your Information</h3>
              <p>
                The information we collect is used for the following purposes:
              </p>
               <ul className="list-disc space-y-1 pl-6">
                <li>To provide you with the resource you requested (e.g., the PDF report download).</li>
                <li>To contact you regarding your inquiry or interest in our services.</li>
                <li>To send you marketing communications and health newsletters, but only if you have explicitly opted in.</li>
                <li>To improve our website and offerings.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">3. Data Sharing and Disclosure</h3>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing our users, so long as those parties agree to keep this information confidential.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">4. Your Consent</h3>
              <p>
                By using our site and submitting the form, you consent to our privacy policy. You may withdraw your consent at any time.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">5. Contacting Us</h3>
              <p>
                If there are any questions regarding this privacy policy, you may contact us at <a href="mailto:privacy@example.com" className="text-accent underline">privacy@example.com</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
