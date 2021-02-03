import { 
    Container,
    TrademarkInfo,
    Logo
} from './styles'

import logo from '../../assets/logo@3x.png';

export default function Footer () {
    return (
        <Container>
            <TrademarkInfo>
            Bold Bytes Serviços Digitais e Marketing LTDA (“ViaReal Segurança”), é
            uma empresa regularmente registrada no Brasil inscrita no CNPJ sob
            30.454.005/0001-55, com sede na Rua Carijós, 154 – Rosário, CEP
            36400-000, Conselheiro Lafaiete – Minas Gerais.
            </TrademarkInfo>

            <Logo src = { logo }/>
        </Container>
    );
}