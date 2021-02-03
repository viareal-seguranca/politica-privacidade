import { 
  Section, 
  Title, 
  Paragraph, 
  List,
  Item
} from '../styles';

export default function StorageDuration() {
  return (
    <Section>
      <Title>
        POR QUANTO TEMPO ARMAZENAMOS SUAS INFORMAÇÕES PESSOAIS
      </Title>

      <Paragraph>
        Mantemos seus dados somente pelo período necessário ou quando somos
        obrigados por motivos legais. Portanto, temos de excluí-los ou
        anonimiza-los para que não identifiquem você. Tratamos os dados de
        maneira diferente dependendo do propósito de uso, mas você poderá
        solicitar a exclusão dos seus dados a qualquer momento.
      </Paragraph>

      <Paragraph>
        Mantemos seus dados pessoais somente pelo tempo necessário. Isso depende
        do motivo da coleta ou se temos uma base legal contínua para mantê-los
        (como para cumprir um contrato entre nós, realizar um serviço solicitado
        por você ou por nossos interesses legítimos). Garantimos que, se não
        tivermos motivos ou necessidade legal para processar seus dados
        pessoais, excluiremos ou armazenaremos seus dados de maneira que não
        identifiquem você.
      </Paragraph>

      <Paragraph>
        Temos políticas de retenção diferentes para tipos diferentes de dados
        pessoais, levando em consideração:
      </Paragraph>

        <List>
          <Item>
            a razão para coletar os dados pessoais;
          </Item>

          <Item>
            quanto tempo levará para cumprir esse propósito;
          </Item>

          <Item>
            qualquer razão específica ou obrigação legal superior para reter os
            dados pessoais por um período específico.
          </Item>
        </List>
      
      <Paragraph>
        Além disso, se você tem uma conta conosco, manteremos dados pessoais
        como seu endereço de e-mail, nome e outros detalhes para que possa
        realizar login e acessar nossos serviços pelo período em que mantém uma
        conta. Podemos manter outras informações por tempo indefinido, como
        atividade no site vinculada a um endereço IP, que usamos para ajudar a
        entender nossos usuários, melhorar nossos produtos e serviços e proteger
        nossos interesses empresariais.
      </Paragraph>

      <Paragraph>
        Não importa a duração do período de retenção, você poderá solicitar a
        exclusão dos seus dados pessoais em determinadas circunstâncias.
      </Paragraph>
    </Section>
  );
}
