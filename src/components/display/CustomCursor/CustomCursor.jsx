import AnimatedCursor from 'react-animated-cursor';
import { useTheme } from '@/features/Theme';

export default function CustomCursor() {
  const { isDark } = useTheme();

  return (
    <AnimatedCursor
      innerSize={8}
      innerScale={2}
      innerStyle={{
        backgroundColor: isDark ? '#e8e8e6' : '#262626',
        mixBlendMode: 'normal',
      }}
      outerSize={0}
      outerScale={0}
      outerAlpha={0}
      outerStyle={{
        border: 'none',
        backgroundColor: 'transparent',
      }}
      showSystemCursor={false}
      trailingSpeed={8}
      hasBlendMode={true}
    />
  );
}
