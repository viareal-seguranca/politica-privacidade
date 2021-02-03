import { 
  Section, 
  Title, 
  Paragraph, 
  List,
  Item
} from '../styles';

function UsageOfData() {
  return (
    <Section>
      <Title>Como usamos as informações pessoais</Title>

      <Paragraph>
        Esta seção inclui detalhes da finalidade para a qual usamos informações
        pessoais e também as diferentes razões jurídicas pelas quais processamos
        essas informações pessoais. Algumas leis exigem que expliquemos o nosso
        motivo legal para o tratamento de suas informações pessoais.
      </Paragraph>

      <Paragraph>
        Usamos as informações pessoais para vários interesses legítimos,
        inclusive para fornecer e melhorar os serviços, administrar nosso
        relacionamento com você e nossos negócios, para marketing e para exercer
        nossos direitos e responsabilidades.
      </Paragraph>

      <Paragraph>
        Informações mais detalhadas sobre esses interesses legítimos são
        definidas abaixo:
      </Paragraph>

        <List>
          <Item>
            para configurar e administrar sua conta, fornecer assistência
            técnica, suporte cliente e treinamento, verificar sua identidade,
            assinatura e informações de serviço.
          </Item>

          <Item>
            para administrar o nosso relacionamento com você, nossos negócios e
            nossos fornecedores terceiros (por exemplo, para enviar as faturas).
          </Item>

          <Item>
            para personalizar sua experiência com nossos serviços. Podemos reter
            suas informações de navegação e uso para tornar suas pesquisas em
            nossos serviços mais relevantes e usar essas informações para
            direcionar publicidade on-line para você em nossos sites e
            aplicativos. Ocasionalmente podemos compartilhar suas informações
            pessoais em nossos serviços para que possamos tornar todos os
            serviços que oferecemos a você mais intuitivo (por exemplo, em vez
            de exigir que nos informe os mesmos dados muitas vezes).
          </Item>

          <Item>
            para entrar em contato com você em relação a, e conduzir, pesquisas
            e sondagens pelas quais optar por participar e analisar os dados
            coletados para fins de pesquisa de mercado.
          </Item>

          <Item>
            para exibir as informações que você optar por publicar,
            compartilhar, carregar ou tornar disponível em salas de bate-papo,
            serviços de mensagens, e comunidade e fóruns de evento (inclusive na
            comunidade e perfis de evento) e para a colaboração relacionados,
            conexão de pares, jogos e troca de informações.
          </Item>

          <Item>
            para propósitos de análise e desenvolvimento de melhorias, testes e
            aperfeiçoamento dos recursos e das funções de nossos serviços.
          </Item>

          <Item>
            para atender aos nossos requisitos de auditoria internos e externos,
            incluindo nossas obrigações de segurança das informações (e se seu
            empregador ou nosso assinante lhe fornece acesso aos nossos
            serviços, para atender os requisitos de auditoria interna e
            externa).
          </Item>

          <Item>para aplicar nossos termos e condições.</Item>

          <Item>
            para proteger nossos direitos, privacidade, segurança, redes,
            sistemas e propriedade ou itens de outras pessoas.
          </Item>

          <Item>
            para prevenção, detecção ou investigação de um crime ou outra
            violação da lei ou requisito, prevenção contra perda ou fraude.
          </Item>

          <Item>
            para estar em conformidade com as solicitações dos tribunais,
            autoridades policiais, órgãos normativos e outras instituições
            públicas e autoridades governamentais, inclusive onde eles estão
            fora do seu país de residência.
          </Item>

          <Item>
            para o exercício de nossos direitos e nos defender de reclamações e
            cumprir leis e regulamentações que se aplicam a nós ou a terceiros
            com quem trabalhamos.
          </Item>

          <Item>
            para participar, ou seja, estar sujeito a, qualquer venda, fusão,
            aquisição reestruturação, joint venture, cessão, transferência ou
            outra disposição de todos ou qualquer parte de nosso negócio, ativos
            ou estoque (inclusive em conexão com qualquer processo de falência
            ou similar).
          </Item>
        </List>
    </Section>
  );
}

export default UsageOfData;
