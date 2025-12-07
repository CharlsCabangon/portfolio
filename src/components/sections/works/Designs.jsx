import { useState } from 'react';

import clsx from 'clsx';

import { ImageLightbox } from '@/components/display';
import { Heading, Border, Label, Tile } from '@/components/ui';
import { getAllDesigns, getDesignsForLightbox } from '@/data/sections/designs/designs';

export default function Designs() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const designs = getAllDesigns();
  const lightboxSlides = getDesignsForLightbox();

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="space-y-sm">
      <div className="ml-sm space-y-sm">
        <Heading level="h4">designs</Heading>
        <Border>
          <p>a curated showcase of my favorite visual builds</p>
        </Border>
      </div>
      <div>
        <Label margin={true}>{`grid grid-cols-3 grid-rows-6`}</Label>
        <Border isFront={true}>
          <div className="md:p-sm bg-background-secondary w-full p-1.5">
            <div
              className={clsx(
                'grid w-full gap-0.5',
                'grid-cols-3 grid-rows-6',
                'md:gap-1',
                'xxs:h-[400px] xs:h-[500px] h-[300px] sm:h-[600px] md:h-[800px] lg:h-[950px] xl:h-[1240px]'
              )}
            >
              {designs.map((design, index) => (
                <Tile
                  key={design.id}
                  src={design.image}
                  title={design.title}
                  caption={design.caption}
                  gridClass={design.gridClass}
                  onClick={() => openLightbox(index)}
                  className={design.className}
                />
              ))}
            </div>
          </div>
        </Border>
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentIndex}
      />
    </section>
  );
}
