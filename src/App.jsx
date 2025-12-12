import { AppLayout, Header } from '@/layout';
import { ThemeProvider } from '@/features/Theme';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <AppLayout>
        <HomePage />
      </AppLayout>
    </ThemeProvider>
  );
}
