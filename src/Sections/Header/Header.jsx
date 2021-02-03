import logo from '../../assets/logo@3x.png';

import { 
    Container,
    HeaderTitle,
    Logo
} from './styles';

export default function Header () {
    return (
        <Container>
            <Logo src={logo} />
            <HeaderTitle>Política de Privacidade</HeaderTitle>
        </Container>
    );
};