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
            กลับไปที่แบบฟอร์ม
          </Link>
        </Button>
        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-4xl">นโยบายความเป็นส่วนตัว</CardTitle>
            <CardDescription>ความมุ่งมั่นของเราต่อความเป็นส่วนตัวของคุณ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <div className="space-y-2">
              <h2 className="font-headline text-2xl font-semibold">บทนำ</h2>
              <p>
                นี่เป็นข้อความตัวอย่างสำหรับนโยบายความเป็นส่วนตัวของคุณ ในแอปพลิเคชันจริง คุณจะต้องให้รายละเอียดเกี่ยวกับวิธีการรวบรวม ใช้ และปกป้องข้อมูลของผู้ใช้ นโยบายตัวอย่างนี้สรุปหลักการทั่วไป
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">1. ข้อมูลที่เราเก็บรวบรวม</h3>
              <p>
                เราเก็บรวบรวมข้อมูลที่คุณให้โดยตรงกับเราเมื่อคุณกรอกแบบฟอร์มสำหรับลูกค้าเป้าหมายของเรา ซึ่งอาจรวมถึงแต่ไม่จำกัดเพียง:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>ข้อมูลระบุตัวตนส่วนบุคคล (ชื่อ, เพศ, อายุ)</li>
                <li>ข้อมูลติดต่อ (ที่อยู่อีเมล, หมายเลขโทรศัพท์)</li>
                <li>ข้อมูลทางวิชาชีพ (ชื่อบริษัท, ประเภทบริษัท, ตำแหน่งงาน)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">2. วิธีที่เราใช้ข้อมูลของคุณ</h3>
              <p>
                ข้อมูลที่เราเก็บรวบรวมจะถูกใช้เพื่อวัตถุประสงค์ดังต่อไปนี้:
              </p>
               <ul className="list-disc space-y-1 pl-6">
                <li>เพื่อจัดหาทรัพยากรที่คุณร้องขอ (เช่น การดาวน์โหลดรายงาน PDF)</li>
                <li>เพื่อติดต่อคุณเกี่ยวกับคำถามหรือความสนใจในบริการของเรา</li>
                <li>เพื่อส่งการสื่อสารทางการตลาดและข่าวสารเกี่ยวกับสุขภาพ แต่เฉพาะในกรณีที่คุณเลือกรับอย่างชัดเจนเท่านั้น</li>
                <li>เพื่อปรับปรุงเว็บไซต์และข้อเสนอของเรา</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">3. การแบ่งปันและเปิดเผยข้อมูล</h3>
              <p>
                เราไม่ขาย แลกเปลี่ยน หรือถ่ายโอนข้อมูลที่สามารถระบุตัวตนของคุณไปยังบุคคลภายนอก ซึ่งไม่รวมถึงบุคคลที่สามที่เชื่อถือได้ซึ่งช่วยเราในการดำเนินงานเว็บไซต์ ดำเนินธุรกิจ หรือให้บริการแก่ผู้ใช้ของเรา ตราบใดที่บุคคลเหล่านั้นตกลงที่จะเก็บข้อมูลนี้เป็นความลับ
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">4. ความยินยอมของคุณ</h3>
              <p>
                โดยการใช้เว็บไซต์ของเราและส่งแบบฟอร์ม ถือว่าคุณยินยอมต่อนโยบายความเป็นส่วนตัวของเรา คุณสามารถถอนความยินยอมได้ตลอดเวลา
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline text-xl font-semibold">5. การติดต่อเรา</h3>
              <p>
                หากมีคำถามใด ๆ เกี่ยวกับนโยบายความเป็นส่วนตัวนี้ คุณสามารถติดต่อเราได้ที่ <a href="mailto:privacy@example.com" className="text-accent underline">privacy@example.com</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
