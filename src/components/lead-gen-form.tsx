"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Link from 'next/link';
import { Loader2, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  firstName: z.string().min(1, 'ต้องระบุชื่อจริง'),
  lastName: z.string().min(1, 'ต้องระบุนามสกุล'),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'กรุณาเลือกเพศ',
  }),
  age: z.coerce.number().min(1, 'ต้องระบุอายุ').positive('อายุต้องเป็นค่าบวก'),
  phone: z.string().min(10, 'ต้องระบุหมายเลขโทรศัพท์ที่ถูกต้อง'),
  email: z.string().email('กรุณาป้อนที่อยู่อีเมลที่ถูกต้อง'),
  companyName: z.string().min(1, 'ต้องระบุชื่อบริษัท'),
  companyType: z.string({ required_error: 'กรุณาเลือกประเภทบริษัท' }),
  jobTitle: z.string().min(1, 'ต้องระบุตำแหน่งงาน'),
  emailSubscription: z.enum(['subscribe', 'unsubscribe'], {
    required_error: 'กรุณาเลือกการสมัครรับข้อมูล',
  }),
  privacyAgreement: z.boolean().refine((val) => val === true, {
    message: 'คุณต้องยอมรับนโยบายความเป็นส่วนตัวเพื่อดำเนินการต่อ',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const companyTypes = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Government',
  'Non-Profit',
  'Other',
];

export default function LeadGenForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      age: undefined,
      phone: '',
      email: '',
      companyName: '',
      jobTitle: '',
      privacyAgreement: false,
    },
  });

  const handleDownload = () => {
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1rn3plL3GEkxmgCsoRl4AXI5WlLFI4g-R';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'health-trends-report.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    console.log('Form Submitted:', values);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    handleDownload();

    setIsSubmitting(false);
    setIsSubmitSuccessful(true);
    
    // Reset form after a delay
    setTimeout(() => {
        form.reset();
        setIsSubmitSuccessful(false);
    }, 5000);
  }

  return (
    <Card className="w-full max-w-2xl shadow-2xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">Get Your Free Health Tech Report</CardTitle>
        <CardDescription className="text-center">
          กรอกแบบฟอร์มด้านล่างเพื่อดาวน์โหลดรายงานพิเศษเกี่ยวกับเทรนด์สุขภาพล่าสุด
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อ</FormLabel>
                    <FormControl>
                      <Input placeholder="สมชาย" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>นามสกุล</FormLabel>
                    <FormControl>
                      <Input placeholder="ดีมาก" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        <FormLabel>เพศ</FormLabel>
                        <FormControl>
                            <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-4 pt-2"
                            >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                <RadioGroupItem value="male" />
                                </FormControl>
                                <FormLabel className="font-normal">ชาย</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                <RadioGroupItem value="female" />
                                </FormControl>
                                <FormLabel className="font-normal">หญิง</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                <RadioGroupItem value="other" />
                                </FormControl>
                                <FormLabel className="font-normal">อื่น ๆ</FormLabel>
                            </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>อายุ</FormLabel>
                        <FormControl>
                        <Input type="number" placeholder="30" {...field} onChange={e => field.onChange(e.target.valueAsNumber)} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>เบอร์โทร</FormLabel>
                        <FormControl>
                        <Input type="tel" placeholder="081-234-5678" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>อีเมล</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="somchai.d@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>ชื่อบริษัทหรือองค์กร</FormLabel>
                        <FormControl>
                        <Input placeholder="บริษัท ตัวอย่าง จำกัด" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>ตำแหน่งงาน</FormLabel>
                        <FormControl>
                        <Input placeholder="ผู้จัดการฝ่ายการตลาด" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
            
            <FormField
              control={form.control}
              name="companyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ประเภทบริษัท</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกประเภทบริษัท" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {companyTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emailSubscription"
              render={({ field }) => (
                <FormItem className="space-y-3 rounded-lg border p-4">
                  <FormLabel>
                    ท่านต้องการข้อมูลข่าวสารเกี่ยวกับเทรนด์สุขภาพ เทคโนโลยีสุขภาพ หรือความรู้เกี่ยวกับด้านสุขภาพเพิ่มเติมจากเราผ่านทางอีเมลของท่านหรือไม่ ?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="subscribe" />
                        </FormControl>
                        <FormLabel className="font-normal">ฉันต้องการรับข้อมูลผ่านอีเมลเพิ่มเติม</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="unsubscribe" />
                        </FormControl>
                        <FormLabel className="font-normal">ฉันไม่ต้องการรับข้อมูลผ่านอีเมลเพิ่มเติม</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacyAgreement"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      ฉันยินยอมให้ข้อมูลตาม{' '}
                      <Link href="/privacy-policy" className="font-semibold text-accent underline-offset-4 hover:underline" target="_blank">
                        เงื่อนไขความเป็นส่วนตัว
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              size="lg"
              disabled={isSubmitting || isSubmitSuccessful}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  กำลังส่ง...
                </>
              ) : isSubmitSuccessful ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  สำเร็จ! กำลังเริ่มดาวน์โหลด...
                </>
              ) : (
                'Submit and Download'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
