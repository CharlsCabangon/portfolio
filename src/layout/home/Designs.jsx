import clsx from 'clsx';
import Border from '@/components/ui/Border';
import Heading from '@/components/Heading';

export default function Designs() {
  return (
    <section className="space-y-sm">
      <div className="ml-sm">
        <Heading level="h4">designs</Heading>
      </div>
      <Border>
        <div className={clsx('p-sm w-full')}>
          <div
            className={clsx(
              'grid w-full gap-1',
              'grid-cols-3 grid-rows-8',
              // bento on md >
              'md:gap-xs md:grid-cols-4 md:grid-rows-6',
              'h-[600px] md:h-[500px] lg:h-[700px] xl:h-[900px]'
            )}
          >
            {/* item 1 - tg */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'col-start-1 row-span-3 row-start-1',
                'md:col-start-1 md:row-span-3 md:row-start-1'
              )}
            >
              <img
                src="src/assets/images/designs/feature-the-garcian.avif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* item 2 - sd */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'col-start-2 row-span-2 row-start-1',
                'md:col-start-3 md:row-span-2 md:row-start-1'
              )}
            >
              <img
                src="src/assets/images/designs/feature-sd.avif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* item 3 - trainy */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'col-start-3 row-span-3 row-start-1',
                'md:col-start-4 md:row-span-3 md:row-start-1'
              )}
            >
              <img
                src="src/assets/images/designs/feature-trainy.avif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* item 4 - kultura */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'col-start-2 row-span-2 row-start-3',
                'md:col-start-2 md:row-span-2 md:row-start-1'
              )}
            >
              <img
                src="src/assets/images/designs/feature-kultura-shirt.avif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* item 5 - jay ay */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'col-start-1 row-start-4',
                'md:col-start-1 md:row-start-4'
              )}
            >
              <img
                src="src/assets/images/designs/feature-jay-ay-logo.avif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* item 6 - dept shirt */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'col-start-3 row-span-3 row-start-4',
                'md:col-start-4 md:row-span-3 md:row-start-4'
              )}
            >
              <img
                src="src/assets/images/designs/feature-dept-shirt.avif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* item 7 - ite day */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'col-span-2 col-start-1 row-span-2 row-start-5',
                'md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-5'
              )}
            >
              <img
                src="src/assets/images/designs/feature-ite-day.avif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* item 8 - filler */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'hidden',
                'md:col-start-3 md:row-span-2 md:row-start-5 md:block'
              )}
            >
              <img
                src="src/assets/images/designs/feature-filler.avif"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* item 9 - MAIN */}
            <div
              className={clsx(
                'relative overflow-hidden',
                'rounded-md border shadow-md',
                'border-border dark:border-border bg-background-secondary dark:bg-background-secondary',
                'col-span-3 col-start-1 row-span-2 row-start-7',
                'md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-3'
              )}
            >
              <div className="flex h-full items-center justify-center"></div>
            </div>
          </div>
        </div>
      </Border>
    </section>
  );
}
