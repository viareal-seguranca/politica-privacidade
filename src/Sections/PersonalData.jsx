import { 
  Section, 
  Title, 
  Paragraph, 
  List,
  Item
} from '../styles';

function PersonalData() {
  return (
    <Section>
      <Title>Dados Pessoais Que Coletamos</Title>

      <Paragraph>
        Coletamos informações pessoais sobre suas interações conosco e de
        determinados terceiros e outras fontes (como seu empregador ou do
        assinante que tem acesso a nossos serviços ou a partir de fontes
        disponíveis ao público onde for permitido) ou conforme você usa nossos
        serviços. Isso inclui coisas como seu endereço IP, informações sobre o
        dispositivo e o navegador que você usa para acessar nossos serviços, o
        URL do site de onde partiu sua visita e sites de terceiros que visita
        quando clica em links para sair do site ViaReal Segurança.
      </Paragraph>

      <Paragraph>
        Também podemos saber sua localização pelo seu dispositivo móvel ou
        endereço IP. Isso ajuda a melhorar a sua experiência e garantir que você
        receba o conteúdo mais relevante. Em muitos casos, é possível escolher
        se deseja ou não nos fornecer informações pessoais, mas se optar por não
        fornecer, você poderá não obter a funcionalidade completa de serviços.
        As informações pessoais que coletamos consistem no seguinte:
      </Paragraph>

        <List>
          <Item>
            <b>Nome e dados de contato:</b> como primeiro e último nome,
            endereço de e-mail, endereço postal, número de telefone e outros
            tipos semelhantes de dados de contato.
          </Item>

          <Item>
            <b> Credenciais de conta:</b> como comunicações e arquivos
            fornecidos por você em relação a seu uso dos serviços.
          </Item>

          <Item>
            <b>Informações do dispositivo:</b> como informações sobre seu
            dispositivo, como endereço IP, local ou provedor.
          </Item>

          <Item>
            <b>Informações de uso e o histórico de navegação:</b> como
            informações sobre como você navega dentro de nossos serviços, seu
            histórico de navegação e quais elementos de nossos serviços são mais
            usados.
          </Item>

          <Item>
            <b>Dados de localização:</b> para serviços com recursos aprimorados
            de localização. Se precisarmos do seu consentimento para coletar
            dados de geolocalização, coletaremos separadamente.
          </Item>

          <Item>
            <b>Informações demográficas:</b> como seu país e idioma de
            preferência.
          </Item>

          <Item>
            <b>Informações de uso e perfil:</b> como você interagiu com os
            nossos serviços, incluindo o tempo gasto em nosso site e/ou
            aplicativo e páginas, recursos ou funcionalidades acessados; links
            em que você clicou para ser redirecionado para os nossos serviços ou
            a partir deles, incluindo a identidade do Fornecedor Terceiro para
            onde você é redirecionado e o tipo de serviço selecionado.
          </Item>

          <Item>
            <b>Informações de preferências:</b> as preferências associadas com a
            sua conta na ViaReal Segurança, incluindo autorizações específicas
            que você deu ou negou, preferências de e-mail e notificações push e
            cookies contendo suas preferências de publicidade.
          </Item>

          <Item>
            <b>Informações de comunicação:</b> inclui comunicações que recebemos
            de você, como feedback, solicitações de ajuda, perguntas por e-mail
            e outros métodos de comunicação eletrônica, como chat on-line,
            mensagens instantâneas ou redes sociais e metadados associados com
            essas comunicações, como data e hora.
          </Item>

          <Item>
            <b>Conteúdo gerado ou fornecido pelo usuário:</b> conteúdo enviado
            por você aos nossos serviços, incluindo comentários, fotos, vídeos,
            recomendações, preferências, avaliações e metadados como a data e a
            hora associadas com esse conteúdo.
          </Item>

          <Item>
            <b>Informações de redes sociais:</b> obtemos as informações
            fornecidas mediante cadastros, pesquisas, promoções, anúncios,
            interações e outros, sempre com o consentimento do usuário.
          </Item>
        </List>
        
      <Paragraph>
        Também coletamos informações pessoais sobre você de terceiros, tais
        como:
      </Paragraph>
          
        <List>
          <Item>
            <b>
              {" "}
              a(s) pessoa(s) que possibilita(m) o acesso a nossos serviços:
            </b>{" "}
            (por exemplo, seu empregador ou nosso assinante) para configurar uma
            conta de usuário.
          </Item>

          <Item>
            <b>a organização à qual você pertence</b> onde essa organização
            permite a você acesso aos nossos serviços).
          </Item>

          <Item>
            <b>parceiros e fornecedores de serviços que trabalham conosco</b> em
            relação a seu serviço.
          </Item>

          <Item>
            <b>fontes publicamente disponíveis</b> como sites públicos, bancos
            de dados de governo abertos ou outros dados em domínio público, para
            nos ajudar a manter a precisão dos dados, fornecer e aprimorar os
            serviços.
          </Item>
        </List>
      
      <Paragraph>
        Os tipos de informações pessoais que coletamos dependem de como você
        está interagindo conosco e quais serviços está adquirindo ou utilizando.
      </Paragraph>

    </Section>
  );
}

export default PersonalData;
