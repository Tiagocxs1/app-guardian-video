// Timeline definitiva — narração 308.62s (5min09s)
// Hotspots com coordenadas OCR reais (fração da tela)

export type Hotspot = { cx: number; cy: number; label: string };
export type SceneData = {
  id: number;
  screenshot: string; // base do .jpg em /public/prints/ sem extensão
  phrase: string;
  subtitle: string;
  durationSec: number;
  hotspot?: Hotspot;
  highlightColor?: string;
};

export const C_RED = '#CB3033';
export const C_DARK = '#04344C';
export const C_MID = '#506A76';
export const C_CYAN = '#00FFFF';
export const C_WHITE = '#FFFFFF';

const P = {
  login: 'tela_de_login',
  inicial: 'tela_inicial',
  liberar: 'liberar_acesso',
  liberarRapido: 'liberacao_rapida_de_acesso',
  emergencia: 'notificacoes_de_emergencia',
  ocorrencias: 'ocorrencias',
  visitante1: 'cadastro_visitante_passo_1',
  visitante2: 'cadastro_visitante_passo_2',
  visitante3: 'visitante_cadastro_passo_3',
  zonas: 'reserva_de_areas_comuns',
  facial: 'cadastro_facial',
  gestorVisitantes: 'gestor_de_visitantes',
  biometria: 'biometrias_digitais___adicionar_biometria',
  menu: 'menu',
  usuarios: 'usuarios',
  cadastroUsuario: 'cadastro_de_usuario',
  acessosResumo: 'relatorio_de_acessos_resumo',
  ligacoes: 'relatorio_de_ligacoes_resumo',
  chaveiros: 'cadastro_de_chaveiros',
  senhas: 'senhas_de_acesso_cadastradas',
  visitanteCad: 'visitante_cadastrado',
};

export const SCENES: SceneData[] = [
  // ===== PARTE 1 (120.16s) =====
  { id: 1, screenshot: P.inicial, phrase: 'App Guardian', subtitle: 'Tudo na palma da mão', durationSec: 8, hotspot: { cx: 0.226, cy: 0.365, label: 'Guardian Monitoramento' }, highlightColor: C_RED },
  { id: 2, screenshot: P.login, phrase: 'Acesso rápido', subtitle: 'E-mail e senha', durationSec: 9, hotspot: { cx: 0.30, cy: 0.30, label: 'E-mail' }, highlightColor: C_CYAN },
  { id: 3, screenshot: P.login, phrase: 'Recuperação simples', subtitle: 'Recuperar senha', durationSec: 8, hotspot: { cx: 0.443, cy: 0.841, label: 'Recuperar senha' }, highlightColor: C_CYAN },
  { id: 4, screenshot: P.inicial, phrase: 'Tudo começa aqui', subtitle: 'Principais funções', durationSec: 9, hotspot: { cx: 0.47, cy: 0.26, label: 'Criar Convite' }, highlightColor: C_CYAN },
  { id: 5, screenshot: P.inicial, phrase: 'Seu perfil e gestão', subtitle: 'Menu e configurações', durationSec: 8, hotspot: { cx: 0.50, cy: 0.05, label: 'Menu do perfil' }, highlightColor: C_RED },
  { id: 6, screenshot: P.inicial, phrase: 'Zonas e câmeras', subtitle: 'Visualização em tempo real', durationSec: 9, hotspot: { cx: 0.30, cy: 0.39, label: 'Zona conectada' }, highlightColor: C_CYAN },
  { id: 7, screenshot: P.inicial, phrase: 'Alterne as câmeras', subtitle: 'Troque de visualização', durationSec: 8, hotspot: { cx: 0.60, cy: 0.42, label: 'Seletor de câmeras' }, highlightColor: C_CYAN },
  { id: 8, screenshot: P.liberar, phrase: '1 toque', subtitle: 'Liberar acesso', durationSec: 12, hotspot: { cx: 0.50, cy: 0.80, label: 'Liberar Acesso' }, highlightColor: C_RED },
  { id: 9, screenshot: P.liberarRapido, phrase: 'Liberação rápida', subtitle: 'Mantenha pressionado', durationSec: 10, hotspot: { cx: 0.363, cy: 0.882, label: 'Liberação rápida' }, highlightColor: C_RED },
  { id: 10, screenshot: P.acessosResumo, phrase: 'Todos os acessos', subtitle: 'Portas autorizadas', durationSec: 11, hotspot: { cx: 0.489, cy: 0.183, label: 'Relatório de acessos' }, highlightColor: C_CYAN },
  { id: 11, screenshot: P.ocorrencias, phrase: 'Emergência', subtitle: 'Alerta em segundos', durationSec: 11, hotspot: { cx: 0.178, cy: 0.204, label: 'Ocorrências' }, highlightColor: C_RED },
  { id: 12, screenshot: P.emergencia, phrase: 'Notificação de emergência', subtitle: 'Roubo · Incêndio · Saúde', durationSec: 9, hotspot: { cx: 0.50, cy: 0.40, label: 'Emergência' }, highlightColor: C_RED },
  { id: 13, screenshot: P.visitante1, phrase: 'Criar convite', subtitle: 'Convide em segundos', durationSec: 9, hotspot: { cx: 0.149, cy: 0.176, label: 'Cadastro de visitante' }, highlightColor: C_CYAN },

  // ===== PARTE 2 (126.40s) =====
  { id: 14, screenshot: P.visitante2, phrase: 'Cadastre seu visitante', subtitle: 'Unidade e dados', durationSec: 11, hotspot: { cx: 0.466, cy: 0.187, label: 'Dados do visitante' }, highlightColor: C_CYAN },
  { id: 15, screenshot: P.zonas, phrase: 'Zonas permitidas', subtitle: 'Controle de acesso', durationSec: 12, hotspot: { cx: 0.556, cy: 0.206, label: 'Reserva de áreas' }, highlightColor: C_CYAN },
  { id: 16, screenshot: P.visitante3, phrase: 'QR Code', subtitle: 'Acesso autorizado', durationSec: 12, hotspot: { cx: 0.466, cy: 0.187, label: 'QR Code / Facial' }, highlightColor: C_CYAN },
  { id: 17, screenshot: P.facial, phrase: 'Cadastro facial', subtitle: 'Selfie pelo celular', durationSec: 12, hotspot: { cx: 0.283, cy: 0.187, label: 'Cadastro Facial' }, highlightColor: C_CYAN },
  { id: 18, screenshot: P.gestorVisitantes, phrase: 'Gestor de visitantes', subtitle: 'Ativos e histórico', durationSec: 12, hotspot: { cx: 0.466, cy: 0.187, label: 'Gestor de Visitantes' }, highlightColor: C_CYAN },
  { id: 19, screenshot: P.visitanteCad, phrase: 'Visitante cadastrado', subtitle: 'Gerencie convites', durationSec: 11, hotspot: { cx: 0.465, cy: 0.187, label: 'Visitante' }, highlightColor: C_CYAN },
  { id: 20, screenshot: P.biometria, phrase: 'Biometria facial', subtitle: 'Sua própria biometria', durationSec: 12, hotspot: { cx: 0.30, cy: 0.187, label: 'Adicionar biometria' }, highlightColor: C_CYAN },
  { id: 21, screenshot: P.facial, phrase: 'Captura e confirmação', subtitle: 'Posicione o rosto', durationSec: 12, hotspot: { cx: 0.50, cy: 0.55, label: 'Captura facial' }, highlightColor: C_CYAN },
  { id: 22, screenshot: P.menu, phrase: 'Menu gestor', subtitle: 'Administre sua unidade', durationSec: 12, hotspot: { cx: 0.607, cy: 0.402, label: 'Menu Gestor' }, highlightColor: C_RED },
  { id: 23, screenshot: P.usuarios, phrase: 'Adicionar morador', subtitle: 'Gestão de usuários', durationSec: 11, hotspot: { cx: 0.29, cy: 0.183, label: 'Moradores' }, highlightColor: C_CYAN },
  { id: 24, screenshot: P.cadastroUsuario, phrase: 'Permissões do morador', subtitle: 'Defina áreas de acesso', durationSec: 10, hotspot: { cx: 0.431, cy: 0.387, label: 'Áreas de acesso' }, highlightColor: C_CYAN },

  // ===== PARTE 3 (62.06s) =====
  { id: 25, screenshot: P.ligacoes, phrase: 'Sincronização', subtitle: 'Equipamentos autorizados', durationSec: 14, hotspot: { cx: 0.489, cy: 0.183, label: 'Ligações' }, highlightColor: C_CYAN },
  { id: 26, screenshot: P.chaveiros, phrase: 'Ligação pelo app', subtitle: 'Equipamento vinculado', durationSec: 12, hotspot: { cx: 0.398, cy: 0.187, label: 'Chaveiros' }, highlightColor: C_CYAN },
  { id: 27, screenshot: P.senhas, phrase: 'Mais controle', subtitle: 'Tudo centralizado', durationSec: 12, hotspot: { cx: 0.438, cy: 0.189, label: 'Senhas de acesso' }, highlightColor: C_CYAN },
  { id: 28, screenshot: P.inicial, phrase: 'App Guardian', subtitle: 'Você dorme, a Guardian vigia.', durationSec: 22, hotspot: { cx: 0.226, cy: 0.365, label: 'Guardian Monitoramento' }, highlightColor: C_RED },
];