import { InputForm, Header, Result } from 'components/home';

function Home() {
  return (
    <div className="flex flex-col space-y-4 md:space-y-2">
      <Header />
      <div className="flex flex-col space-y-0 md:flex-col-reverse md:space-y-8 md:space-y-reverse">
        <Result />
        <InputForm />
      </div>
    </div>
  );
}

export default Home;
