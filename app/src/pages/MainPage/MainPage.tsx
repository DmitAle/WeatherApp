import { WeatherWidget } from '@widgets/WeatherWidget';
import { Header } from '@widgets/Header';
import { Layout } from '@shared/ui/Layout';
import { Main } from '@shared/ui/Main';

export const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <WeatherWidget />
      </Main>
    </Layout>
  );
};
