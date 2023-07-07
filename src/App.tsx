import { Card } from './component/common/card';
import { Container, Navbar } from './component/layout';
import cardImg from '/img/cardTest.jpg';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Card
          technos={[
            'docker',
            'api platform',
            'javascript',
            'next js',
            'php',
            'react js',
            'symfony',
            'tailwind',
            'typescript',
            'vite',
          ]}
          title='Algo sort'
          description={[
            'An interactive platform that showcases dynamic renderings of sorting algorithms. Dive into the fascinating world of sorting algorithms and explore their functionalities through visually engaging and interactive demonstrations.',
            'An interactive platform that showcases dynamic renderings of sorting algorithms. Dive into the fascinating world of sorting algorithms and explore their functionalities through visually engaging and interactive demonstrations.',
          ]}
          img={cardImg}
          link={'https://github.com/ReyalWesley/algo-sort'}
        />
      </Container>
    </>
  );
}

export default App;
