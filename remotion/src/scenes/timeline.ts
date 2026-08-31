// Timeline gerada automaticamente — alinhada aos timestamps reais da narração (308.7s)

export type Hotspot = { cx: number; cy: number; label: string };
export type SceneData = {
  id: number;
  screenshot: string;
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

export const SCENES: SceneData[] = [
  { id: 1, screenshot: 'tela_inicial', phrase: 'App Guardian', subtitle: 'Tudo na palma da mão', durationSec: 12.7, hotspot: { cx: 0.226, cy: 0.365, label: "App Guardian" }, highlightColor: '#CB3033' },
  { id: 2, screenshot: 'tela_de_login', phrase: 'Acesso rápido', subtitle: 'E-mail e senha', durationSec: 4.7, hotspot: { cx: 0.4, cy: 0.34, label: "Acesso rápido" }, highlightColor: '#00FFFF' },
  { id: 3, screenshot: 'tela_de_login', phrase: 'Recuperação simples', subtitle: 'Recuperar senha', durationSec: 10.3, hotspot: { cx: 0.443, cy: 0.841, label: "Recuperação simples" }, highlightColor: '#00FFFF' },
  { id: 4, screenshot: 'tela_inicial', phrase: 'Tudo começa aqui', subtitle: 'Principais funções', durationSec: 5.1, hotspot: { cx: 0.47, cy: 0.26, label: "Tudo começa aqui" }, highlightColor: '#00FFFF' },
  { id: 5, screenshot: 'tela_inicial', phrase: 'Seu perfil e gestão', subtitle: 'Menu do perfil', durationSec: 6.1, hotspot: { cx: 0.5, cy: 0.05, label: "Seu perfil e gestão" }, highlightColor: '#CB3033' },
  { id: 6, screenshot: 'tela_inicial', phrase: 'Zonas e câmeras', subtitle: 'Sua conta e zona', durationSec: 8.0, hotspot: { cx: 0.3, cy: 0.39, label: "Zonas e câmeras" }, highlightColor: '#00FFFF' },
  { id: 7, screenshot: 'tela_inicial', phrase: 'Alterne as câmeras', subtitle: 'Troque a visualização', durationSec: 10.8, hotspot: { cx: 0.6, cy: 0.42, label: "Alterne as câmeras" }, highlightColor: '#00FFFF' },
  { id: 8, screenshot: 'liberar_acesso', phrase: '1 toque', subtitle: 'Liberar acesso', durationSec: 11.3, hotspot: { cx: 0.5, cy: 0.78, label: "1 toque" }, highlightColor: '#CB3033' },
  { id: 9, screenshot: 'relatorio_de_acessos_resumo', phrase: 'Todos os acessos', subtitle: 'Portas autorizadas', durationSec: 17.6, hotspot: { cx: 0.489, cy: 0.183, label: "Todos os acessos" }, highlightColor: '#00FFFF' },
  { id: 10, screenshot: 'notificacoes_de_emergencia', phrase: 'Emergência', subtitle: 'Alerta em segundos', durationSec: 18.9, hotspot: { cx: 0.5, cy: 0.5, label: "Emergência" }, highlightColor: '#CB3033' },
  { id: 11, screenshot: 'cadastro_visitante_passo_1', phrase: 'Criar convite', subtitle: 'Convide em segundos', durationSec: 8.4, hotspot: { cx: 0.149, cy: 0.176, label: "Criar convite" }, highlightColor: '#00FFFF' },
  { id: 12, screenshot: 'cadastro_visitante_passo_2', phrase: 'Cadastre seu visitante', subtitle: 'Unidade e dados', durationSec: 6.2, hotspot: { cx: 0.466, cy: 0.187, label: "Cadastre seu visitante" }, highlightColor: '#00FFFF' },
  { id: 13, screenshot: 'reserva_de_areas_comuns', phrase: 'Zonas permitidas', subtitle: 'Controle de acesso', durationSec: 5.6, hotspot: { cx: 0.556, cy: 0.206, label: "Zonas permitidas" }, highlightColor: '#00FFFF' },
  { id: 14, screenshot: 'visitante_cadastro_passo_3', phrase: 'QR Code', subtitle: 'Acesso autorizado', durationSec: 11.5, hotspot: { cx: 0.466, cy: 0.187, label: "QR Code" }, highlightColor: '#00FFFF' },
  { id: 15, screenshot: 'cadastro_facial', phrase: 'Cadastro facial', subtitle: 'Convite por selfie', durationSec: 18.2, hotspot: { cx: 0.283, cy: 0.187, label: "Cadastro facial" }, highlightColor: '#00FFFF' },
  { id: 16, screenshot: 'gestor_de_visitantes', phrase: 'Gestor de visitantes', subtitle: 'Ativos e histórico', durationSec: 15.7, hotspot: { cx: 0.466, cy: 0.187, label: "Gestor de visitantes" }, highlightColor: '#00FFFF' },
  { id: 17, screenshot: 'biometrias_digitais___adicionar_biometria', phrase: 'Biometria facial', subtitle: 'Sua própria biometria', durationSec: 12.7, hotspot: { cx: 0.3, cy: 0.187, label: "Biometria facial" }, highlightColor: '#00FFFF' },
  { id: 18, screenshot: 'cadastro_facial', phrase: 'Captura e confirmação', subtitle: 'Posicione o rosto', durationSec: 5.8, hotspot: { cx: 0.5, cy: 0.55, label: "Captura e confirmação" }, highlightColor: '#00FFFF' },
  { id: 19, screenshot: 'relatorio_de_ligacoes_resumo', phrase: 'Sincronização', subtitle: 'Equipamentos autorizados', durationSec: 16.8, hotspot: { cx: 0.489, cy: 0.183, label: "Sincronização" }, highlightColor: '#00FFFF' },
  { id: 20, screenshot: 'menu', phrase: 'Menu gestor', subtitle: 'Administre sua unidade', durationSec: 14.2, hotspot: { cx: 0.607, cy: 0.402, label: "Menu gestor" }, highlightColor: '#CB3033' },
  { id: 21, screenshot: 'usuarios', phrase: 'Adicionar morador', subtitle: 'Gestão de usuários', durationSec: 6.0, hotspot: { cx: 0.29, cy: 0.183, label: "Adicionar morador" }, highlightColor: '#00FFFF' },
  { id: 22, screenshot: 'cadastro_de_usuario', phrase: 'Permissões do morador', subtitle: 'Defina as áreas', durationSec: 7.4, hotspot: { cx: 0.431, cy: 0.387, label: "Permissões do morador" }, highlightColor: '#00FFFF' },
  { id: 23, screenshot: 'relatorio_de_ligacoes_resumo', phrase: 'Sincronização de dados', subtitle: 'Tudo conectado', durationSec: 12.6, hotspot: { cx: 0.489, cy: 0.183, label: "Sincronização de dados" }, highlightColor: '#00FFFF' },
  { id: 24, screenshot: 'relatorio_de_ligacoes_resumo', phrase: 'Sincronizando...', subtitle: 'Equipamentos', durationSec: 18.1, hotspot: { cx: 0.489, cy: 0.183, label: "Sincronizando..." }, highlightColor: '#00FFFF' },
  { id: 25, screenshot: 'cadastro_de_chaveiros', phrase: 'Ligação pelo app', subtitle: 'Equipamento vinculado', durationSec: 14.5, hotspot: { cx: 0.398, cy: 0.187, label: "Ligação pelo app" }, highlightColor: '#00FFFF' },
  { id: 26, screenshot: 'tela_inicial', phrase: 'App Guardian', subtitle: 'Você dorme, a Guardian vigia.', durationSec: 29.5, hotspot: { cx: 0.226, cy: 0.365, label: "App Guardian" }, highlightColor: '#CB3033' },
];