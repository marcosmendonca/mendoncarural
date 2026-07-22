export const site = {
  name: 'Mendonça Consultoria Rural',
  shortName: 'Mendonça Rural',
  domain: 'mendoncarural.com.br',
  url: 'https://mendoncarural.com.br',
  email: 'contato@mendoncarural.com.br',
  phoneDisplay: '(27) 99812-5081',
  phoneRaw: '5527998125081',
  coverage: 'Atendimento técnico em todo o Brasil, com etapas presenciais somente quando indispensáveis ao serviço',
  description: 'Consultoria agronômica em crédito rural, regularização ambiental e fundiária, projetos agropecuários e levantamentos técnicos.',
  image: '/images/brand/og-cover.jpg'
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  text: string;
  outcome: string;
  icon: string;
  services: string[];
  situations: string[];
  deliverables: string[];
  documents: string[];
  stages: string[];
  audience: string[];
  note?: string;
};

export const services: Service[] = [
  {
    slug: 'credito-rural',
    title: 'Crédito Rural',
    shortTitle: 'Crédito Rural',
    eyebrow: 'Financiamento e proteção da atividade',
    text: 'Estruturação técnica de propostas para custeio, investimento e programas de crédito voltados ao produtor rural.',
    outcome: 'Transformar o plano de produção ou investimento em uma proposta técnica clara, documentada e compatível com a finalidade do financiamento.',
    icon: 'credit-card',
    services: ['Custeio agrícola e pecuário', 'Projetos de investimento', 'PRONAF', 'PRONAMP', 'Programas do BNDES', 'PROAGRO', 'Apoio técnico para análise bancária'],
    situations: ['Quero financiar o plantio ou a criação', 'Preciso investir em máquinas, irrigação ou estrutura', 'O banco solicitou projeto, orçamento ou laudo técnico', 'Preciso organizar a documentação para um programa rural'],
    deliverables: ['Projeto ou proposta técnica conforme o objeto', 'Memorial e justificativas agronômicas', 'Orçamento e plano de aplicação organizados', 'Cronograma e premissas técnicas', 'ART quando aplicável e contratada'],
    documents: ['Documentos pessoais ou da empresa', 'Documentos do imóvel e da atividade', 'CAR, CCIR e ITR quando pertinentes', 'Orçamentos dos itens financiados', 'Dados produtivos e financeiros solicitados na triagem'],
    stages: ['Entendimento da necessidade', 'Triagem documental', 'Definição do programa e escopo', 'Elaboração técnica', 'Entrega e ajustes previstos'],
    audience: ['Produtores rurais', 'Empresas rurais', 'Cooperativas', 'Correspondentes bancários'],
    note: 'A aprovação do crédito é decisão exclusiva da instituição financeira e depende das regras vigentes de cada programa.'
  },
  {
    slug: 'regularizacao-ambiental',
    title: 'Regularização Ambiental Rural',
    shortTitle: 'Regularização Ambiental',
    eyebrow: 'Adequação documental e ambiental',
    text: 'Apoio técnico para organizar, corrigir e conduzir demandas ambientais relacionadas ao imóvel rural.',
    outcome: 'Dar clareza à situação ambiental declarada do imóvel e estruturar os próximos passos técnicos e documentais.',
    icon: 'leaf',
    services: ['Cadastro Ambiental Rural — CAR', 'Programa de Regularização Ambiental — PRA', 'PRADA', 'Laudos e relatórios ambientais', 'Diagnóstico de pendências', 'Mapas e arquivos ambientais', 'Apoio em notificações e adequações'],
    situations: ['Meu CAR possui pendências ou precisa ser atualizado', 'Recebi uma notificação ambiental', 'Preciso aderir ou compreender o PRA', 'Necessito de um laudo ou relatório ambiental'],
    deliverables: ['Diagnóstico documental da demanda', 'Mapas e memoriais quando necessários', 'Relatório ou laudo técnico conforme o escopo', 'Plano de ação e pendências identificadas', 'ART quando aplicável e contratada'],
    documents: ['CAR e recibos disponíveis', 'Matrícula, posse ou documentos do imóvel', 'Mapas, arquivos geográficos e coordenadas', 'Notificações, termos ou protocolos existentes', 'Registros fotográficos e informações declaradas'],
    stages: ['Levantamento da situação', 'Conferência dos documentos', 'Análise técnica', 'Preparação da solução', 'Entrega e orientação'],
    audience: ['Proprietários e possuidores rurais', 'Empresas rurais', 'Advogados e contadores', 'Instituições financeiras'],
    note: 'Os serviços não substituem licenciamento, fiscalização, decisão administrativa ou vistoria de órgão competente.'
  },
  {
    slug: 'regularizacao-fundiaria',
    title: 'Regularização Fundiária e Documental',
    shortTitle: 'Regularização Fundiária',
    eyebrow: 'Documentação do imóvel e do produtor',
    text: 'Organização e atualização de cadastros rurais essenciais para crédito, comercialização e regularidade da propriedade.',
    outcome: 'Reduzir inconsistências cadastrais e reunir a documentação rural necessária para cada finalidade.',
    icon: 'file-signature',
    services: ['CCIR', 'ITR', 'CAF', 'Inscrição Estadual Rural', 'Atualização de cadastros', 'Organização documental do imóvel', 'Apoio em inconsistências cadastrais'],
    situations: ['Preciso emitir ou atualizar o CCIR', 'Tenho dúvidas ou pendências no ITR', 'Preciso do CAF para acessar políticas públicas', 'O banco ou outro órgão pediu documentos atualizados'],
    deliverables: ['Protocolo, declaração ou cadastro conforme o serviço', 'Checklist documental', 'Relatório de pendências quando necessário', 'Orientação sobre próximos passos'],
    documents: ['CPF ou CNPJ e documentos dos responsáveis', 'Matrícula, escritura, contrato ou posse', 'Documentos rurais existentes', 'Informações de área, uso e exploração', 'Comprovantes e declarações exigidos pelo cadastro'],
    stages: ['Identificação da finalidade', 'Recebimento documental', 'Conferência cadastral', 'Execução do serviço', 'Entrega dos comprovantes'],
    audience: ['Produtores rurais', 'Proprietários e possuidores', 'Empresas e associações', 'Contadores e parceiros'],
    note: 'Cada cadastro possui regras próprias. A viabilidade e os documentos necessários são confirmados após a triagem.'
  },
  {
    slug: 'projetos-agropecuarios',
    title: 'Projetos Agropecuários',
    shortTitle: 'Projetos Agropecuários',
    eyebrow: 'Planejamento para implantar e produzir',
    text: 'Projetos técnicos para implantação, ampliação e organização de atividades agrícolas e pecuárias.',
    outcome: 'Converter uma ideia de produção em um plano técnico executável, dimensionado e coerente com os recursos disponíveis.',
    icon: 'tractor',
    services: ['Projetos de irrigação', 'Cafeicultura', 'Fruticultura e horticultura', 'Pecuária e produção animal', 'Piscicultura', 'Estufas e estruturas produtivas', 'Planejamento de sistemas agropecuários'],
    situations: ['Quero iniciar uma nova atividade rural', 'Preciso ampliar ou modernizar a produção', 'Quero dimensionar um sistema de irrigação', 'Preciso apresentar um projeto a banco ou parceiro'],
    deliverables: ['Projeto técnico e memorial descritivo', 'Dimensionamentos e premissas de cálculo', 'Lista de materiais ou investimentos', 'Cronograma de implantação', 'ART quando aplicável e contratada'],
    documents: ['Caracterização da propriedade', 'Objetivos e capacidade de investimento', 'Análises, mapas e dados disponíveis', 'Informações de água, energia e infraestrutura', 'Orçamentos e referências do sistema pretendido'],
    stages: ['Briefing técnico', 'Coleta de dados', 'Estudo e dimensionamento', 'Desenvolvimento do projeto', 'Entrega técnica'],
    audience: ['Produtores', 'Empresas rurais', 'Investidores', 'Cooperativas e associações'],
    note: 'Projetos dependem da qualidade dos dados fornecidos. Levantamentos ou visitas podem ser necessários conforme a complexidade.'
  },
  {
    slug: 'georreferenciamento',
    title: 'Georreferenciamento e Levantamentos Técnicos',
    shortTitle: 'Georreferenciamento',
    eyebrow: 'Informação espacial para decidir e regularizar',
    text: 'Levantamentos, mapas e produtos cartográficos para apoiar projetos, planejamento e demandas do imóvel rural.',
    outcome: 'Produzir uma base espacial confiável para dimensionamentos, projetos e procedimentos de regularização.',
    icon: 'map-location-dot',
    services: ['Levantamento planialtimétrico', 'Mapeamento de áreas rurais', 'Curvas de nível', 'Plantas e memoriais', 'Georreferenciamento conforme escopo', 'Arquivos KML, KMZ e outros formatos', 'Apoio cartográfico a projetos'],
    situations: ['Preciso medir ou representar uma área', 'Quero projetar irrigação, estradas ou estruturas', 'Necessito de curvas de nível e altimetria', 'Preciso de planta, mapa ou arquivo geográfico'],
    deliverables: ['Planta ou mapa técnico', 'Memorial descritivo conforme o escopo', 'Arquivos digitais geográficos', 'Relatório do levantamento', 'ART quando aplicável'],
    documents: ['Documentos e limites informados do imóvel', 'CAR, matrícula ou croquis existentes', 'Finalidade do levantamento', 'Pontos, coordenadas e arquivos disponíveis', 'Autorização de acesso quando houver etapa de campo'],
    stages: ['Definição da finalidade', 'Análise dos dados existentes', 'Planejamento do levantamento', 'Processamento e elaboração', 'Entrega dos produtos'],
    audience: ['Proprietários rurais', 'Projetistas e empresas', 'Advogados e contadores', 'Instituições e parceiros'],
    note: 'Levantamentos de campo e georreferenciamento legal dependem da localização, da cobertura operacional e da confirmação prévia do escopo.'
  }
];

export const solutionPaths = [
  { title: 'Quero financiar minha produção', href: '/solucoes/credito-rural', icon: 'sack-dollar', description: 'Custeio, investimento e programas de crédito rural.' },
  { title: 'Quero regularizar minha propriedade', href: '/solucoes/regularizacao-ambiental', icon: 'seedling', description: 'Demandas ambientais e organização de pendências.' },
  { title: 'Preciso atualizar documentos rurais', href: '/solucoes/regularizacao-fundiaria', icon: 'folder-open', description: 'CCIR, ITR, CAF, inscrição estadual e cadastros.' },
  { title: 'Quero implantar um projeto', href: '/solucoes/projetos-agropecuarios', icon: 'compass-drafting', description: 'Irrigação e projetos de produção agropecuária.' },
  { title: 'Preciso medir ou mapear uma área', href: '/solucoes/georreferenciamento', icon: 'ruler-combined', description: 'Levantamentos, mapas e georreferenciamento.' }
];

export const coefficientCategories = [
  {slug:'solo-e-fertilidade', title:'Solo e fertilidade', items:['Calagem','Gessagem','Adubação','Amostragem']},
  {slug:'irrigacao', title:'Irrigação', items:['Vazão','Lâmina','Turno de rega','Perdas']},
  {slug:'producao-vegetal', title:'Produção vegetal', items:['Espaçamento','População','Produtividade','Conversões']},
  {slug:'producao-animal', title:'Produção animal', items:['Lotação','Consumo','Volumoso','Dimensionamento']}
];

export const calculators = ['Calagem','Gessagem','População de plantas','Vazão de irrigação','Pulverização','Conversão de áreas'];

export const blogPosts = [
  {slug:'credito-rural-custeio-investimento', category:'Crédito Rural', title:'Crédito rural: diferença entre custeio e investimento', excerpt:'Entenda as finalidades mais comuns e quais informações costumam ser necessárias na análise inicial.', date:'Conteúdo em preparação'},
  {slug:'car-pendencias', category:'Regularização Ambiental', title:'CAR com pendências: por onde começar', excerpt:'Um roteiro inicial para organizar documentos, identificar inconsistências e compreender os próximos passos.', date:'Conteúdo em preparação'},
  {slug:'ccir-itr-documentos-rurais', category:'Regularização Fundiária', title:'CCIR e ITR: qual é a função de cada documento', excerpt:'Veja como esses documentos se relacionam com a regularidade cadastral do imóvel rural.', date:'Conteúdo em preparação'}
];
