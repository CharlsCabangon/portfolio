import clsx from 'clsx';

import { Tooltip } from '@/components/ui';
import { getLink } from '@/data/sections/about/links';
import { SocialIcon } from 'react-social-icons';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

export default function Links() {
  return (
    <div
      className={clsx(
        'fixed right-0 bottom-0 z-50',
        'hidden flex-col items-center justify-center lg:flex',
        'border-border py-xs border bg-[#1a1b1e] px-0.5'
      )}
    >
      <Tooltip content="Download my resume" position="left">
        <button aria-label="Download my resume">
          <ArrowDownTrayIcon className="h-5 w-5 text-white" />
        </button>
      </Tooltip>

      <Tooltip content="Connect with me" position="left">
        <SocialIcon
          url={getLink('linkedin').href}
          network="linkedin"
          bgColor="transparent"
          fgColor=""
          style={{ width: 43, height: 43 }}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Connect with me on LinkedIn"
        />
      </Tooltip>

      <Tooltip content="Visit my Github" position="left">
        <SocialIcon
          url={getLink('github').href}
          network="github"
          bgColor="transparent"
          fgColor=""
          style={{ width: 43, height: 43 }}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit my Github"
        />
      </Tooltip>
    </div>
  );
}
