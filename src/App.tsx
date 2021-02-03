import About from './Sections/About';
import PersonalData from './Sections/PersonalData';
import UsageOfData from './Sections/UsageOfData';
import Rights from './Sections/Rights';
import DataShared from './Sections/DataShared';
import SecurityOfData from './Sections/SecurityOfData';
import DataStorage from './Sections/DataStorage';
import StorageDuration from './Sections/StorageDuration';
import Marketing from './Sections/Marketing';
import Cookies from './Sections/Cookies';
import GetInTouch from './Sections/GetInTouch';
import Footer from './Sections/Footer/Footer';
import Header from './Sections/Header/Header';

import { 
  MainSection,
} from './styles';

function App() {
  return (
    <>
      <MainSection>
        <Header /> 
        <About />
        <PersonalData /> 
        <UsageOfData />
        <Rights />      
        <DataShared />
        <SecurityOfData />
        <DataStorage />
        <StorageDuration />
        <Marketing />
        <Cookies />
        <GetInTouch />   
        <Footer />
      </MainSection>
    </>
  );
}

export default App;
