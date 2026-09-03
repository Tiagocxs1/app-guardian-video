// Timeline final — narração neural completa (Antonio) 241.08s
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
  { id: 1, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'Tudo na palma da mão', durationSec: 12.34, scroll: false },
  { id: 2, kind: 'print', rec: 'tela_de_login', phrase: 'Acesso rápido', subtitle: 'E-mail e senha', durationSec: 4.76, scroll: false },
  { id: 3, kind: 'print', rec: 'tela_de_login', phrase: 'Recuperação', subtitle: 'Recuperar senha', durationSec: 10.08, scroll: false },
  { id: 4, kind: 'print', rec: 'tela_inicial_1', phrase: 'Tela inicial', subtitle: 'Principais funções', durationSec: 4.62, scroll: false },
  { id: 5, kind: 'print', rec: 'menu', phrase: 'Seu perfil e gestão', subtitle: 'Menu do perfil', durationSec: 5.64, scroll: true },
  { id: 6, kind: 'video', rec: 'videocameras', phrase: 'Conta, zona e câmeras', subtitle: 'Visualização em tempo real', durationSec: 7.66, scroll: false, videoStartSec: 0.0 },
  { id: 7, kind: 'video', rec: 'videocameras', phrase: 'Alterne as câmeras', subtitle: 'Troque a visualização', durationSec: 6.78, scroll: false, videoStartSec: 8.0 },
  { id: 8, kind: 'video', rec: 'videocameras', phrase: 'Função que mais uso', subtitle: 'Com um toque', durationSec: 3.2, scroll: false, videoStartSec: 38.0 },
  { id: 9, kind: 'video', rec: 'videocameras', phrase: '1 toque', subtitle: 'Liberar acesso', durationSec: 10.68, scroll: false, videoStartSec: 41.0 },
  { id: 10, kind: 'video', rec: 'videocameras', phrase: 'Atenda pelo app', subtitle: 'Veja quem solicita', durationSec: 7.7, scroll: false, videoStartSec: 51.0 },
  { id: 11, kind: 'print', rec: 'liberacao_rapida_de_acesso', phrase: 'Todos os acessos', subtitle: 'Arraste para liberar', durationSec: 12.2, scroll: true },
  { id: 12, kind: 'print', rec: 'liberacao_rapida_de_acesso', phrase: 'Portas e locais', subtitle: 'Permissões rápidas', durationSec: 4.56, scroll: true },
  { id: 13, kind: 'print', rec: 'menu', phrase: 'Criar convite', subtitle: 'Menu de visitantes', durationSec: 4.1, scroll: false },
  { id: 14, kind: 'video', rec: 'menu_unidade', phrase: 'Receber alguém', subtitle: 'Selecione a unidade', durationSec: 6.38, scroll: false, videoStartSec: 0, src: 'video_will/menu_unidade.mp4' },
  { id: 15, kind: 'video', rec: 'novo_massa_link', phrase: 'Cadastro do visitante', subtitle: 'Unidade e período', durationSec: 7.2, scroll: false, videoStartSec: 0, src: 'video_will/novo_massa_link.mp4' },
  { id: 16, kind: 'video', rec: 'ajustar_data1', phrase: 'Zonas permitidas', subtitle: 'Escolha as zonas', durationSec: 5.44, scroll: false, videoStartSec: 0, src: 'video_will/ajustar_data1.mp4' },
  { id: 17, kind: 'print', rec: 'visitante_cadastro_passo_3', phrase: 'Duas possibilidades', subtitle: 'Depois do convite', durationSec: 4.8, scroll: false },
  { id: 18, kind: 'video', rec: 'novo_massa_link', phrase: 'QR Code', subtitle: 'Copiar link QR Code', durationSec: 6.4, scroll: false, videoStartSec: 0, src: 'video_will/novo_massa_link.mp4' },
  { id: 19, kind: 'print', rec: 'cadastro_facial', phrase: 'Cadastro facial', subtitle: 'Convite por selfie', durationSec: 3.76, scroll: false },
  { id: 20, kind: 'print', rec: 'cadastro_facial', phrase: 'Reconhecimento facial', subtitle: 'Selfie e sincronização', durationSec: 9.72, scroll: false },
  { id: 21, kind: 'print', rec: 'gestor_de_visitantes', phrase: 'Período e permissões', subtitle: 'Tudo definido', durationSec: 3.56, scroll: false },
  { id: 22, kind: 'video', rec: 'historico', phrase: 'Convites ativos', subtitle: 'Histórico de convites', durationSec: 6.36, scroll: false, videoStartSec: 0, src: 'video_will/historico.mp4' },
  { id: 23, kind: 'video', rec: 'ajustar_data', phrase: 'Editar convites', subtitle: 'Reaproveitar convite', durationSec: 11.78, scroll: false, videoStartSec: 0, src: 'video_will/ajustar_data.mp4' },
  { id: 24, kind: 'print', rec: 'menu', phrase: 'Além do acesso', subtitle: 'Menu gestor', durationSec: 5.0, scroll: true },
  { id: 25, kind: 'print', rec: 'meus_dados___dados_basicos', phrase: 'Meus dados', subtitle: 'Edite suas informações', durationSec: 6.0, scroll: false },
  { id: 26, kind: 'print', rec: 'cadastro_de_chaveiros', phrase: 'Chaveiros e controles', subtitle: 'Aproximação', durationSec: 5.0, scroll: false },
  { id: 27, kind: 'print', rec: 'meus_veiculos', phrase: 'Veículos', subtitle: 'da sua família', durationSec: 3.0, scroll: false },
  { id: 28, kind: 'print', rec: 'senhas_de_acesso_cadastradas', phrase: 'Senhas de acesso', subtitle: 'Altere quando quiser', durationSec: 5.0, scroll: false },
  { id: 29, kind: 'print', rec: 'gestor_de_visitantes', phrase: 'Gerenciar informações', subtitle: 'Visitantes', durationSec: 8.0, scroll: false },
  { id: 30, kind: 'print', rec: 'usuarios', phrase: 'Adicionar morador', subtitle: 'Novo usuário', durationSec: 6.0, scroll: false },
  { id: 31, kind: 'print', rec: 'cadastro_de_usuario', phrase: 'Permissões do morador', subtitle: 'Dados e áreas', durationSec: 6.0, scroll: false },
  { id: 32, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Dados sincronizados', subtitle: 'Equipamentos autorizados', durationSec: 5.0, scroll: false },
  { id: 33, kind: 'print', rec: 'relatorio_de_acessos_resumo', phrase: 'Relatórios completos', subtitle: 'Acessos e ligações', durationSec: 7.0, scroll: false },
  { id: 34, kind: 'print', rec: 'documentos_do_condominio', phrase: 'Documentos', subtitle: 'Condomínio', durationSec: 8.0, scroll: false },
  { id: 35, kind: 'print', rec: 'ocorrencias', phrase: 'Livro de ocorrências', subtitle: 'Eventos registrados', durationSec: 8.0, scroll: false },
  { id: 36, kind: 'print', rec: 'senhas_de_acesso_cadastradas', phrase: 'Centralize tudo', subtitle: 'Um único lugar', durationSec: 5.0, scroll: false },
  { id: 37, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'No fim das contas', durationSec: 4.36, scroll: false },
];
export const TOTAL_DURATION = 241.08;