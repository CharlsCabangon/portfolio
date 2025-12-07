import { Link } from 'react-scroll';

import { Border, Label, PrimaryBtn, SecondaryBtn } from '@/components/ui';
import { NAV_ID } from '@/data/layout/navData';

export default function Hero() {
  return (
    <section id="home" className="mx-sm space-y-xl h-auto">
      <div className="space-y-sm">
        <div>
          <Label>maybe a friendly greeting here?</Label>
          <Border className="flex-col">
            <h1 className="text-display block">hello!</h1>
            <h1 className="text-display block">i am Charls</h1>
          </Border>
        </div>

        <div>
          <Label>frontend is awesome</Label>
          <Border>
            <h4>
              <span className="md:relative md:top-2">Frontend Developer </span>& Graphic Designer
            </h4>
          </Border>
        </div>
      </div>

      <div className="space-y-2 md:hidden">
        <Border isFront={true} className="w-full flex-col">
          <Link
            to={NAV_ID.CONNECT}
            spy={true}
            smooth={true}
            offset={-130}
            duration={600}
            delay={0}
            className="w-full"
          >
            <PrimaryBtn className="w-full">connect with me</PrimaryBtn>
          </Link>
        </Border>
        <Border isFront={true} className="w-full flex-col">
          <Link
            to={NAV_ID.WORKS}
            spy={true}
            smooth={true}
            offset={-130}
            duration={600}
            delay={0}
            className="w-full"
          >
            <SecondaryBtn className="w-full">see my works</SecondaryBtn>
          </Link>
        </Border>
      </div>

      <Border isFront={true} className="hidden space-x-3 md:flex">
        <Link to={NAV_ID.CONNECT} spy={true} smooth={true} offset={-130} duration={600} delay={0}>
          <PrimaryBtn>connect with me</PrimaryBtn>
        </Link>
        <Link to={NAV_ID.WORKS} spy={true} smooth={true} offset={-130} duration={600} delay={0}>
          <SecondaryBtn>see my works</SecondaryBtn>
        </Link>
      </Border>

      <div className="">
        <Border position="right">
          <p>i love making the web look pretty and feel easy</p>
        </Border>
      </div>
    </section>
  );
}
