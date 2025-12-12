import { motion } from 'framer-motion';
import clsx from 'clsx';

import { Border, Tooltip } from '@/components/ui';
import { DotGrid, ClickSpark } from '@/components/display';
import { Markdown } from '@/features/Markdown';
import { about, tools } from '@/data/sections/about/about';
import { useScrollReveal, useStagger } from '@/lib/hooks';
import { downloadResume } from '@/lib/utils';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function AboutMe() {
  const animation = useScrollReveal({ threshold: 0.2 });
  const stagger = useStagger({ y: 50 });

  return (
    <section>
      <Border isFront={true}>
        <motion.div
          ref={animation.ref}
          {...animation.props}
          className="flex w-full flex-col md:flex-row"
        >
          {/* image container */}
          <div
            className={clsx(
              'pattern-stripes',
              'flex w-full items-center justify-center',
              'p-sm sm:p-md md:w-[30%]'
            )}
          >
            <div
              className={clsx(
                'border-background-tertiary/70 ring-ring',
                'aspect-[3/5] overflow-hidden rounded-md border-10 shadow-lg ring',
                'md:-ml-20'
              )}
            >
              <ClickSpark>
                <img
                  src={about.image}
                  alt={about.title}
                  className="h-auto w-full cursor-pointer object-cover"
                />
              </ClickSpark>
            </div>
          </div>

          {/* text content */}
          <div
            className={clsx(
              'bg-background-secondary border-border border-t md:border-t-0 md:border-r',
              'p-xxs md:p-sm flex items-center justify-center',
              'md:order-first md:w-[70%]'
            )}
          >
            <article
              className={clsx(
                'border-border bg-background container',
                'md:pr-2xl lg:pr-3xl container h-full w-full rounded-md border shadow-md'
              )}
            >
              <motion.div ref={animation.ref} {...animation.props} className="space-y-sm">
                <div className="flex items-center justify-between gap-1.5 md:gap-2">
                  <h6>what i do</h6>
                  <div className="lg:hidden">
                    <Tooltip content="download my resume" position="top">
                      <button onClick={downloadResume} className="mt-1.5">
                        <ArrowDownTrayIcon className="text-foreground h-4 md:h-5" strokeWidth={1} />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div>
                  <Markdown path={about.content.path} file={about.content.filename} />
                </div>
              </motion.div>

              <motion.div
                ref={stagger.ref}
                {...stagger.container}
                className={clsx(
                  'border-border ring-ring relative container',
                  'gap-sm m-auto flex h-fit flex-col rounded-sm border shadow-sm',
                  'xl:mt-lg md:m-0 lg:w-[90%] 2xl:w-[85%]'
                )}
              >
                <div className="absolute inset-0 h-full w-full">
                  <DotGrid
                    dotSize={1.9}
                    gap={10}
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                  />
                </div>
                {tools.map((tool, index) => {
                  return (
                    <div key={index} className="gap-sm flex flex-col">
                      <motion.div
                        {...stagger.item}
                        className="font-code text-foreground border-foreground-secondary z-10 border-l-2 pl-3 text-xs"
                      >
                        {tool.title}
                      </motion.div>
                      <div className="gap-sm flex flex-wrap">
                        {tool.tools.map((item) => {
                          return (
                            <motion.div key={item.id} {...stagger.item}>
                              <Tooltip content={item.name}>
                                <img
                                  src={item.icon}
                                  alt={item.name}
                                  className="h-9 w-9 cursor-pointer rounded-sm shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                              </Tooltip>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </article>
          </div>
        </motion.div>
      </Border>
    </section>
  );
}
