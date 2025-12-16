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
            <CardTitle className="font-headline text-2xl">
              นโยบายความเป็นส่วนตัวของผู้รับเอกสาร E-book: Longevity Trend 2026 by Genfosis (Privacy
              Notice)
            </CardTitle>
            <CardDescription>บริษัท เจ็นโฟสิส จำกัด</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <p>
              บริษัท เจ็นโฟสิส จำกัด (ต่อไปนี้จะเรียกว่า “บริษัทฯ”) เป็นผู้สร้างเอกสาร E-book: Longevity Trend 2026 by
              Genfosis บริษัทฯ ขอเรียนว่า บริษัทฯ เคารพความเป็นส่วนตัวของท่านและตระหนักดีว่าข้อมูลส่วนบุคคลของแต่ละท่านมีความสำคัญอย่างยิ่ง บริษัทฯ จึงต้องการที่จะชี้แจงให้ทราบเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน
            </p>
            <p>
              ดังนั้น บริษัทฯ จึงได้มีนโยบายคุ้มครองข้อมูลส่วนบุคคลนี้ เพื่อชี้แจงรายละเอียดและ วิธีการจัดเก็บรวบรวม ใช้
              และ/หรือเปิดเผย การคุ้มครองข้อมูล การเข้าถึงข้อมูล การโอนย้าย และการวิเคราะห์ประมวลผลข้อมูลส่วนบุคคลของท่าน ดังต่อไปนี้
            </p>
            <p>
              ข้อมูลส่วนบุคคลในทีนี้ หมายถึง ข้อมูลต่างๆ ในการทำการลงทะเบียนเพื่อรับเอกสาร E-book: Longevity Trend
              2026 by Genfosis
            </p>
            <p>
              นโยบายการคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy) นี้อยู่ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
              พ.ศ. 2562 โดยบริษัทฯ มีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล ซึ่งตามกฎหมายเรียกว่า “ผู้ควบคุมข้อมูลส่วนบุคคล” โดยมีพนักงานที่บริษัทฯ มอบหมายโดยเฉพาะให้มีหน้าที่ดำเนินการเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลตามคำสั่งหรือในนามของบริษัทฯ ซึ่งตามกฎหมายเรียกว่า “ผู้ประมวลผลข้อมูลส่วนบุคคล” ส่วนท่านถือเป็น “เจ้าของข้อมูลส่วนบุคคล” ตามกฎหมายนี้
            </p>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">ข้อ 1. ข้อมูลส่วนบุคคลอะไรบ้างที่บริษัทฯ เก็บรวบรวม ใช้ และ/หรือเปิดเผย</h3>
              <p>
                บริษัทฯ จะเก็บรวบรวมข้อมูลส่วนบุคคลซึ่งเป็นข้อมูลที่ทำให้สามารถระบุตัวตนของท่านได้ ไม่ว่าทางตรงหรือทางอ้อม ได้แก่ ข้อมูลที่ท่านให้ไว้โดยตรงจากการลงทะเบียนผ่านระบบตัวกลางเพื่อรับเอกสาร E-book:
                Longevity Trend 2026 by Genfosis
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
