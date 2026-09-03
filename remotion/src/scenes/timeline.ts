// Timeline final (narração 254.72s)
export type SceneKind = 'print' | 'video' | 'logo';
export type SceneData = {
  id: number; kind: SceneKind; rec: string; phrase: string; subtitle: string;
  durationSec: number; scroll?: boolean; videoStartSec?: number; src?: string;
};
export const C_RED = '#CB3033';
export const C_DARK = '#04344C';
export const C_MID = '#506A76';
export const C_CYAN = '#00FFFF';
export const C_WHITE = '#FFFFFF';
export const SCENES: SceneData[] = [
  { id: 1, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'Tudo na palma da mão', durationSec: 12.5, scroll: false },
  { id: 2, kind: 'print', rec: 'tela_de_login', phrase: 'Acesso rápido', subtitle: 'E-mail e senha', durationSec: 5.04, scroll: false },
  { id: 3, kind: 'print', rec: 'tela_de_login', phrase: 'Recuperação', subtitle: 'Recuperar senha', durationSec: 9.16, scroll: false },
  { id: 4, kind: 'print', rec: 'tela_inicial_1', phrase: 'Tela inicial', subtitle: 'Principais funções', durationSec: 4.9, scroll: false },
  { id: 5, kind: 'print', rec: 'menu', phrase: 'Seu perfil e gestão', subtitle: 'Menu do perfil', durationSec: 5.68, scroll: true },
  { id: 6, kind: 'video', rec: 'videocameras', phrase: 'Conta, zona e câmeras', subtitle: 'Visualização em tempo real', durationSec: 8.12, scroll: false, videoStartSec: 0.0 },
  { id: 7, kind: 'video', rec: 'videocameras', phrase: 'Alterne as câmeras', subtitle: 'Troque a visualização', durationSec: 7.5, scroll: false, videoStartSec: 8.12 },
  { id: 8, kind: 'video', rec: 'videocameras', phrase: 'Uma função que mais uso', subtitle: 'Com um toque', durationSec: 2.96, scroll: false, videoStartSec: 15.62 },
  { id: 9, kind: 'video', rec: 'videocameras', phrase: '1 toque', subtitle: 'Liberar acesso', durationSec: 11.68, scroll: false, videoStartSec: 18.58 },
  { id: 10, kind: 'video', rec: 'videocameras', phrase: 'Atenda pelo app', subtitle: 'Veja quem solicita', durationSec: 7.16, scroll: false, videoStartSec: 30.26 },
  { id: 11, kind: 'print', rec: 'liberacao_rapida_de_acesso', phrase: 'Todos os acessos', subtitle: 'Arraste para liberar', durationSec: 17.38, scroll: true },
  { id: 12, kind: 'print', rec: 'menu', phrase: 'Criar convite', subtitle: 'Menu de visitantes', durationSec: 4.24, scroll: false },
  { id: 13, kind: 'video', rec: 'menu_unidade', src: 'video_will/menu_unidade.mp4', phrase: 'Novo visitante', subtitle: 'Selecione a unidade', durationSec: 6.88, scroll: false, videoStartSec: 0 },
  { id: 14, kind: 'video', rec: 'novo_massa_link', src: 'video_will/novo_massa_link.mp4', phrase: 'Cadastre o visitante', subtitle: 'Dados pessoais', durationSec: 1.8, scroll: false, videoStartSec: 0 },
  { id: 15, kind: 'print', rec: 'relacao_com_a_unidade', phrase: 'Relação com a unidade', subtitle: 'Morador(a)', durationSec: 1.5, scroll: false },
  { id: 16, kind: 'video', rec: 'ajustar_data1', src: 'video_will/ajustar_data1.mp4', phrase: 'Defina o período', subtitle: 'Data e horário', durationSec: 4.2, scroll: false, videoStartSec: 0 },
  { id: 17, kind: 'video', rec: 'ajustar_data', src: 'video_will/ajustar_data.mp4', phrase: 'Zonas permitidas', subtitle: 'Escolha as zonas', durationSec: 5.64, scroll: false, videoStartSec: 0 },
  { id: 18, kind: 'video', rec: 'novo_massa_link', src: 'video_will/novo_massa_link.mp4', phrase: 'QR Code', subtitle: 'Copiar link QR Code', durationSec: 11.36, scroll: false, videoStartSec: 0 },
  { id: 19, kind: 'print', rec: 'cadastro_facial', phrase: 'Cadastro facial', subtitle: 'Convite por selfie', durationSec: 10.24, scroll: false },
  { id: 20, kind: 'print', rec: 'cadastro_facial', phrase: 'Reconhecimento facial', subtitle: 'Acesso autorizado', durationSec: 8.02, scroll: false },
  { id: 21, kind: 'video', rec: 'historico', src: 'video_will/historico.mp4', phrase: 'Gestor de visitantes', subtitle: 'Ativos e histórico', durationSec: 6.16, scroll: false, videoStartSec: 0 },
  { id: 22, kind: 'video', rec: 'ajustar_data', src: 'video_will/ajustar_data.mp4', phrase: 'Editar convites', subtitle: 'Reaproveitar convite', durationSec: 9.48, scroll: false, videoStartSec: 0 },
  { id: 23, kind: 'print', rec: 'menu', phrase: 'Além do acesso', subtitle: 'Menu gestor', durationSec: 8.34, scroll: true },
  { id: 24, kind: 'print', rec: 'meus_dados___dados_basicos', phrase: 'Meus dados', subtitle: 'Dados pessoais', durationSec: 1.56, scroll: false },
  { id: 25, kind: 'print', rec: 'meus_dados___endereco', phrase: 'Meu endereço', subtitle: 'Informações', durationSec: 1.3, scroll: false },
  { id: 26, kind: 'print', rec: 'meus_dados___senha_app', phrase: 'Senha do app', subtitle: 'Acesso', durationSec: 3.5, scroll: false },
  { id: 27, kind: 'print', rec: 'cadastro_de_chaveiros', phrase: 'Chaveiros', subtitle: 'Aproximação', durationSec: 2.2, scroll: false },
  { id: 28, kind: 'print', rec: 'meus_constroles___novo_controle', phrase: 'Controles remotos', subtitle: 'Novo controle', durationSec: 3.0, scroll: false },
  { id: 29, kind: 'print', rec: 'meus_veiculos', phrase: 'Veículos', subtitle: 'Cadastrar veículo', durationSec: 1.5, scroll: false },
  { id: 30, kind: 'print', rec: 'cadastro_de_veiculos_formulario', phrase: 'Veículos', subtitle: 'Formulário', durationSec: 1.58, scroll: false },
  { id: 31, kind: 'print', rec: 'senhas_de_acesso_cadastradas', phrase: 'Senhas de acesso', subtitle: 'Alterar quando quiser', durationSec: 6.3, scroll: false },
  { id: 32, kind: 'print', rec: 'gestor_de_visitantes', phrase: 'Gerenciar informações', subtitle: 'Visitantes', durationSec: 8.92, scroll: false },
  { id: 33, kind: 'print', rec: 'usuarios', phrase: 'Adicionar morador', subtitle: 'Novo usuário', durationSec: 5.92, scroll: false },
  { id: 34, kind: 'print', rec: 'cadastro_de_usuario', phrase: 'Permissões do morador', subtitle: 'Dados e zonas', durationSec: 7.44, scroll: false },
  { id: 35, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Dados sincronizados', subtitle: 'Equipamentos autorizados', durationSec: 5.68, scroll: false },
  { id: 36, kind: 'print', rec: 'relatorio_de_acessos_resumo', phrase: 'Relatórios completos', subtitle: 'Acessos e ligações', durationSec: 4.82, scroll: false },
  { id: 37, kind: 'print', rec: 'relatorio_de_acessos_filtro', phrase: 'Filtros', subtitle: 'Período, local e usuário', durationSec: 3.4, scroll: false },
  { id: 38, kind: 'print', rec: 'documentos_do_condominio', phrase: 'Documentos', subtitle: 'Condomínio', durationSec: 2.8, scroll: false },
  { id: 39, kind: 'print', rec: 'ocorrencias', phrase: 'Livro de ocorrências', subtitle: 'Eventos registrados', durationSec: 10.0, scroll: false },
  { id: 40, kind: 'print', rec: 'cadastro_de_chaveiros', phrase: 'Ligação pelo app', subtitle: 'Equipamento vinculado', durationSec: 6.56, scroll: false },
  { id: 41, kind: 'print', rec: 'senhas_de_acesso_cadastradas', phrase: 'Centralize tudo', subtitle: 'Um único lugar', durationSec: 4.82, scroll: false },
  { id: 42, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'No fim das contas', durationSec: 3.48, scroll: false },
];
export const TOTAL_DURATION = 254.72;