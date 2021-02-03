import { 
  Section, 
  Title, 
  Paragraph, 
} from '../styles';

function SecurityOfData() {
  return (
    <Section>
      <Title>SEGURANÇA DOS DADOS PESSOAIS </Title>

      <Paragraph>
        Manter seus dados pessoais protegidos é nossa maior prioridade.
        Limitamos o acesso a somente aqueles funcionários da ViaReal Segurança
        que têm de entrar em contato com as suas informações para realizarem seu
        trabalho e entregar nossos serviços.
      </Paragraph>

      <Paragraph>
        Infelizmente, nenhum site ou aplicativo pode garantir total segurança,
        mas criamos um programa de segurança que abrange toda a empresa,
        projetado para manter seus dados pessoais o mais seguro possível. Ele
        usa uma variedade de medidas técnicas, organizacionais e administrativas
        de segurança e técnicas de melhores práticas, dependendo dos tipos de
        dados que estão sendo processados.
      </Paragraph>

      <Paragraph>
        Por exemplo, os sistemas de computadores que usamos para armazenar seus
        dados têm limitações de acesso e servidores baseados na nuvem que usam
        criptografia de disco padrão da indústria. Usamos criptografia TLS e
        HTTPS para proteger seus dados pessoais em transferências pela internet.
      </Paragraph>

      <Paragraph>  
        Desenvolvemos nossos serviços com o objetivo de usar o mínimo de dados
        pessoais possível, incluindo por meio do uso de técnicas de minimização
        de dados, como anonimização e pseudo anonimização. Além disso, sempre
        que desenvolvemos ou atualizamos nossos serviços de maneira que envolve
        a coleta ou o uso de novas formas de dados pessoais, realizamos uma
        avaliação de impacto na privacidade para entender e reduzir a
        probabilidade de impactos não desejáveis à você. 
      </Paragraph>
    </Section>
  );
}

export default SecurityOfData;
