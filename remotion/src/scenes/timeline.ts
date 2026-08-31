// Timeline final sincronizada com timestamps exatos da narração
export type SceneKind = 'print' | 'video' | 'logo';
export type SceneData = {
  id: number;
  kind: SceneKind;
  rec: string;
  phrase: string;
  subtitle: string;
  durationSec: number;
  scroll?: boolean;
};
export const C_RED = '#CB3033';
export const C_DARK = '#04344C';
export const C_MID = '#506A76';
export const C_CYAN = '#00FFFF';
export const C_WHITE = '#FFFFFF';
export const SCENES: SceneData[] = [
  { id: 1, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'Tudo na palma da mão', durationSec: 12.5, scroll: false },
  { id: 2, kind: 'print', rec: 'tela_de_login', phrase: 'Acesso rápido', subtitle: 'E-mail e senha', durationSec: 5.04, scroll: false },
  { id: 3, kind: 'print', rec: 'tela_de_login', phrase: 'Recuperação simples', subtitle: 'Recuperar senha', durationSec: 9.14, scroll: false },
  { id: 4, kind: 'print', rec: 'menu', phrase: 'Tela inicial', subtitle: 'Principais funções', durationSec: 4.88, scroll: true },
  { id: 5, kind: 'print', rec: 'menu', phrase: 'Seu perfil e gestão', subtitle: 'Menu do perfil', durationSec: 5.7, scroll: true },
  { id: 6, kind: 'video', rec: 'videocameras', phrase: 'Conta, zona e câmeras', subtitle: 'Visualização em tempo real', durationSec: 8.1, scroll: false },
  { id: 7, kind: 'video', rec: 'videocameras', phrase: 'Alterne as câmeras', subtitle: 'Troque a visualização', durationSec: 10.48, scroll: false },
  { id: 8, kind: 'video', rec: 'videocameras', phrase: '1 toque', subtitle: 'Liberar acesso', durationSec: 11.68, scroll: false },
  { id: 9, kind: 'video', rec: 'videocameras', phrase: 'Atenda pelo app', subtitle: 'Veja quem solicita acesso', durationSec: 7.2, scroll: false },
  { id: 10, kind: 'video', rec: 'videocameras', phrase: 'Todos os acessos', subtitle: 'Portas com permissão', durationSec: 21.6, scroll: false },
  { id: 11, kind: 'print', rec: 'cadastro_visitante_passo_1', phrase: 'Criar convite', subtitle: 'Novo visitante', durationSec: 6.92, scroll: false },
  { id: 12, kind: 'print', rec: 'cadastro_visitante_passo_1', phrase: 'Cadastre seu visitante', subtitle: 'Dados pessoais', durationSec: 1.26, scroll: false },
  { id: 13, kind: 'print', rec: 'relacao_com_a_unidade', phrase: 'Relação com a unidade', subtitle: 'Morador(a)', durationSec: 2.0, scroll: false },
  { id: 14, kind: 'print', rec: 'cadastro_visitante_passo_2', phrase: 'Defina o período', subtitle: 'Data e horário', durationSec: 4.18, scroll: false },
  { id: 15, kind: 'print', rec: 'visitante_cadastro_passo_3', phrase: 'Zonas permitidas', subtitle: 'Escolha as zonas', durationSec: 5.64, scroll: false },
  { id: 16, kind: 'print', rec: 'visitante_cadastrado', phrase: 'QR Code', subtitle: 'Copiar link QR Code', durationSec: 11.36, scroll: false },
  { id: 17, kind: 'print', rec: 'cadastro_facial', phrase: 'Cadastro facial', subtitle: 'Novo cadastro', durationSec: 3.48, scroll: false },
  { id: 18, kind: 'print', rec: 'cadastro_facial', phrase: 'Reconhecimento facial', subtitle: 'Selfie pelo celular', durationSec: 14.8, scroll: false },
  { id: 19, kind: 'print', rec: 'gestor_de_visitantes', phrase: 'Gestor de visitantes', subtitle: 'Ativos e histórico', durationSec: 15.64, scroll: false },
  { id: 20, kind: 'print', rec: 'biometrias_digitais___adicionar_biometria', phrase: 'Biometria facial', subtitle: 'Adicionar biometria', durationSec: 7.52, scroll: false },
  { id: 21, kind: 'print', rec: 'cadastro_facial', phrase: 'Menu de cadastro facial', subtitle: 'Perfil ou menu', durationSec: 5.16, scroll: false },
  { id: 22, kind: 'print', rec: 'cadastro_facial', phrase: 'Captura e confirmação', subtitle: 'Posicione o rosto', durationSec: 5.76, scroll: false },
  { id: 23, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Sincronização', subtitle: 'Equipamentos autorizados', durationSec: 7.2, scroll: false },
  { id: 24, kind: 'print', rec: 'cadastro_facial', phrase: 'Acesso por facial', subtitle: 'Áreas permitidas', durationSec: 9.56, scroll: false },
  { id: 25, kind: 'print', rec: 'menu', phrase: 'Menu gestor', subtitle: 'Administrar unidades', durationSec: 5.08, scroll: true },
  { id: 26, kind: 'print', rec: 'meus_dados___dados_basicos', phrase: 'Meus dados', subtitle: 'Dados pessoais', durationSec: 1.62, scroll: false },
  { id: 27, kind: 'print', rec: 'meus_dados___endereco', phrase: 'Meu endereço', subtitle: 'Informações', durationSec: 1.5, scroll: false },
  { id: 28, kind: 'print', rec: 'meus_dados___senha_app', phrase: 'Senha do app', subtitle: 'Acesso ao aplicativo', durationSec: 3.24, scroll: false },
  { id: 29, kind: 'print', rec: 'cadastro_de_chaveiros', phrase: 'Chaveiros', subtitle: 'Aproximação', durationSec: 2.76, scroll: false },
  { id: 30, kind: 'print', rec: 'meus_constroles___novo_controle', phrase: 'Controles remotos', subtitle: 'Novo controle', durationSec: 2.28, scroll: false },
  { id: 31, kind: 'print', rec: 'meus_veiculos', phrase: 'Veículos', subtitle: 'Cadastrar veículo', durationSec: 1.72, scroll: false },
  { id: 32, kind: 'print', rec: 'cadastro_de_veiculos_formulario', phrase: 'Veículos', subtitle: 'Formulário', durationSec: 1.52, scroll: false },
  { id: 33, kind: 'print', rec: 'senhas_de_acesso_cadastradas', phrase: 'Senhas de acesso', subtitle: 'Alterar quando quiser', durationSec: 6.08, scroll: false },
  { id: 34, kind: 'print', rec: 'gestor_de_visitantes', phrase: 'Gerenciar informações', subtitle: 'Visitantes', durationSec: 9.08, scroll: false },
  { id: 35, kind: 'print', rec: 'usuarios', phrase: 'Adicionar morador', subtitle: 'Novo usuário', durationSec: 5.96, scroll: false },
  { id: 36, kind: 'print', rec: 'cadastro_de_usuario', phrase: 'Permissões do morador', subtitle: 'Dados e zonas', durationSec: 7.4, scroll: false },
  { id: 37, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Dados sincronizados', subtitle: 'Equipamentos', durationSec: 12.64, scroll: false },
  { id: 38, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Sincronização', subtitle: 'Andamento dos equipamentos', durationSec: 17.56, scroll: false },
  { id: 39, kind: 'print', rec: 'relatorio_de_acessos_resumo', phrase: 'Relatórios de acessos', subtitle: 'Filtros por período', durationSec: 3.26, scroll: false },
  { id: 40, kind: 'print', rec: 'relatorio_de_acessos_filtro', phrase: 'Filtros', subtitle: 'Período, local e usuário', durationSec: 3.0, scroll: false },
  { id: 41, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Relatório de ligações', subtitle: 'Filtros', durationSec: 2.34, scroll: false },
  { id: 42, kind: 'print', rec: 'documentos_do_condominio', phrase: 'Documentos', subtitle: 'Condomínio', durationSec: 3.16, scroll: false },
  { id: 43, kind: 'print', rec: 'ocorrencias', phrase: 'Livro de ocorrências', subtitle: 'Eventos registrados', durationSec: 6.8, scroll: false },
  { id: 44, kind: 'print', rec: 'cadastro_de_chaveiros', phrase: 'Ligação pelo app', subtitle: 'Equipamento vinculado', durationSec: 9.6, scroll: false },
  { id: 45, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'Centralize tudo', durationSec: 9.04, scroll: false },
  { id: 46, kind: 'logo', rec: '', phrase: 'Visualize, acesse, gerencie', subtitle: 'Tudo pelo celular', durationSec: 8.88, scroll: false },
  { id: 47, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'Você dorme, a Guardian vigia.', durationSec: 16.38, scroll: false },
];
export const TOTAL_DURATION = 337.7;