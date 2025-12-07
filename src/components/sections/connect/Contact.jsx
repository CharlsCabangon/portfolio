import { ContactForm } from '@/features/Contact';
import { Border, Heading } from '@/components/ui';

export default function Contact() {
  return (
    <section className="space-y-sm">
      <div className="space-y-sm ml-sm">
        <Heading level="h4">you made it here!</Heading>
        <Border>
          <p>i’m ready to join your team, send an email!</p>
        </Border>
      </div>
      <Border
        border="top"
        isFront="true"
        position="center"
        className="p-sm xs:p-md md:px-lg lg:px-xl xl:px-4xl pattern-stripes"
      >
        <ContactForm />
      </Border>
    </section>
  );
}
