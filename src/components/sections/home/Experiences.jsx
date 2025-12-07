import Accordion from '@/components/ui/Accordion/Accordion';
import Border from '@/components/ui/Border';
import Heading from '@/components/ui/Heading/Heading';
import Label from '@/components/ui/Label';

import { experiences } from '@/data/sections/experiences/experiences';

export default function Experiences() {
  return (
    <section className="space-y-sm">
      <div className="ml-sm">
        <Heading level="h4">my journey</Heading>
      </div>
      <div>
        <Label margin={true}>an accordion with an animate-ping would do it</Label>
        <Border className="pattern-stripes md:pl-xl lg:pl-4xl before:z-10 after:z-10">
          <Accordion items={experiences} />
        </Border>
      </div>
    </section>
  );
}
