// Timeline final — 42 cenas, narração 337.7s (sem emergência)
export type SceneKind = 'print' | 'video' | 'logo';
export type Hotspot = { cx: number; cy: number; label: string };
export type SceneData = {
  id: number;
  kind: SceneKind;
  rec: string;
  phrase: string;
  subtitle: string;
  durationSec: number;
  hotspot?: Hotspot;
  highlightColor?: string;
  scroll?: boolean;
};
export const C_RED = '#CB3033';
export const C_DARK = '#04344C';
export const C_MID = '#506A76';
export const C_CYAN = '#00FFFF';
export const C_WHITE = '#FFFFFF';
export const SCENES: SceneData[] = [
  { id: 1, kind: 'print', rec: 'tela_de_login', phrase: 'App Guardian', subtitle: 'Tudo na palma da mão', durationSec: 12.5, hotspot: { cx: 0.158, cy: 0.536, label: "App Guardian" }, highlightColor: '#CB3033', scroll: false },
  { id: 2, kind: 'print', rec: 'tela_de_login', phrase: 'Acesso rápido', subtitle: 'E-mail e senha', durationSec: 4.9, hotspot: { cx: 0.158, cy: 0.536, label: "Acesso rápido" }, highlightColor: '#00FFFF', scroll: false },
  { id: 3, kind: 'print', rec: 'tela_de_login', phrase: 'Recuperação simples', subtitle: 'Recuperar senha', durationSec: 9.3, hotspot: { cx: 0.5, cy: 0.84, label: "Recuperação simples" }, highlightColor: '#00FFFF', scroll: false },
  { id: 4, kind: 'print', rec: 'tela_de_login', phrase: 'Pronto', subtitle: 'Agora estou dentro', durationSec: 4.9, hotspot: { cx: 0.5, cy: 0.76, label: "Pronto" }, highlightColor: '#00FFFF', scroll: false },
  { id: 5, kind: 'print', rec: 'menu', phrase: 'Seu perfil e gestão', subtitle: 'Meus dados pessoais', durationSec: 5.7, hotspot: { cx: 0.364, cy: 0.053, label: "Seu perfil e gestão" }, highlightColor: '#CB3033', scroll: true },
  { id: 6, kind: 'video', rec: 'videocameras', phrase: 'Conta, zona e câmeras', subtitle: 'Visualização em tempo real', durationSec: 8.1, hotspot: { cx: 0.5, cy: 0.5, label: "Conta, zona e câmeras" }, highlightColor: '#00FFFF', scroll: false },
  { id: 7, kind: 'video', rec: 'videocameras', phrase: 'Alterne as câmeras', subtitle: 'Troque a visualização', durationSec: 10.5, hotspot: { cx: 0.5, cy: 0.5, label: "Alterne as câmeras" }, highlightColor: '#00FFFF', scroll: false },
  { id: 8, kind: 'video', rec: 'videocameras', phrase: '1 toque', subtitle: 'Liberar acesso', durationSec: 11.6, hotspot: { cx: 0.7, cy: 0.8, label: "1 toque" }, highlightColor: '#CB3033', scroll: false },
  { id: 9, kind: 'video', rec: 'videocameras', phrase: 'Atenda pelo app', subtitle: 'Veja quem solicita acesso', durationSec: 7.2, hotspot: { cx: 0.5, cy: 0.5, label: "Atenda pelo app" }, highlightColor: '#00FFFF', scroll: false },
  { id: 10, kind: 'video', rec: 'videocameras', phrase: 'Todos os acessos', subtitle: 'Portas com permissão', durationSec: 21.7, hotspot: { cx: 0.5, cy: 0.5, label: "Todos os acessos" }, highlightColor: '#00FFFF', scroll: false },
  { id: 11, kind: 'print', rec: 'cadastro_visitante_passo_1', phrase: 'Criar convite', subtitle: 'Novo visitante', durationSec: 6.9, hotspot: { cx: 0.626, cy: 0.177, label: "Criar convite" }, highlightColor: '#00FFFF', scroll: false },
  { id: 12, kind: 'print', rec: 'cadastro_visitante_passo_1', phrase: 'Cadastre seu visitante', subtitle: 'Dados pessoais', durationSec: 2.0, hotspot: { cx: 0.168, cy: 0.443, label: "Cadastre seu visitante" }, highlightColor: '#00FFFF', scroll: false },
  { id: 13, kind: 'print', rec: 'relacao_com_a_unidade', phrase: 'Relação com a unidade', subtitle: 'Morador(a)', durationSec: 2.0, hotspot: { cx: 0.222, cy: 0.181, label: "Relação com a unidade" }, highlightColor: '#00FFFF', scroll: false },
  { id: 14, kind: 'print', rec: 'cadastro_visitante_passo_2', phrase: 'Defina o período', subtitle: 'Data e horário', durationSec: 3.4, hotspot: { cx: 0.273, cy: 0.557, label: "Defina o período" }, highlightColor: '#00FFFF', scroll: false },
  { id: 15, kind: 'print', rec: 'visitante_cadastro_passo_3', phrase: 'Zonas permitidas', subtitle: 'Escolha as zonas', durationSec: 5.6, hotspot: { cx: 0.225, cy: 0.53, label: "Zonas permitidas" }, highlightColor: '#00FFFF', scroll: false },
  { id: 16, kind: 'print', rec: 'visitante_cadastrado', phrase: 'QR Code', subtitle: 'Copiar link QR Code', durationSec: 5.1, hotspot: { cx: 0.501, cy: 0.568, label: "QR Code" }, highlightColor: '#00FFFF', scroll: false },
  { id: 17, kind: 'print', rec: 'cadastro_facial', phrase: 'Cadastro facial', subtitle: 'Novo cadastro', durationSec: 6.3, hotspot: { cx: 0.5, cy: 0.274, label: "Cadastro facial" }, highlightColor: '#00FFFF', scroll: false },
  { id: 18, kind: 'print', rec: 'cadastro_facial', phrase: 'Reconhecimento facial', subtitle: 'Foto cadastrada', durationSec: 18.4, hotspot: { cx: 0.406, cy: 0.352, label: "Reconhecimento facial" }, highlightColor: '#00FFFF', scroll: false },
  { id: 19, kind: 'print', rec: 'gestor_de_visitantes', phrase: 'Gestor de visitantes', subtitle: 'Ativos e histórico', durationSec: 15.5, hotspot: { cx: 0.375, cy: 0.255, label: "Gestor de visitantes" }, highlightColor: '#00FFFF', scroll: false },
  { id: 20, kind: 'print', rec: 'biometrias_digitais___adicionar_biometria', phrase: 'Biometria facial', subtitle: 'Adicionar biometria', durationSec: 7.5, hotspot: { cx: 0.503, cy: 0.441, label: "Biometria facial" }, highlightColor: '#00FFFF', scroll: false },
  { id: 21, kind: 'print', rec: 'cadastro_facial', phrase: 'Captura e confirmação', subtitle: 'Posicione o rosto', durationSec: 11.0, hotspot: { cx: 0.169, cy: 0.274, label: "Captura e confirmação" }, highlightColor: '#00FFFF', scroll: false },
  { id: 22, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Sincronização', subtitle: 'Equipamentos autorizados', durationSec: 17.0, hotspot: { cx: 0.25, cy: 0.265, label: "Sincronização" }, highlightColor: '#00FFFF', scroll: false },
  { id: 23, kind: 'print', rec: 'menu', phrase: 'Menu gestor', subtitle: 'Administrar unidades', durationSec: 4.1, hotspot: { cx: 0.43, cy: 0.402, label: "Menu gestor" }, highlightColor: '#CB3033', scroll: true },
  { id: 24, kind: 'print', rec: 'meus_dados___dados_basicos', phrase: 'Meus dados', subtitle: 'Dados pessoais', durationSec: 2.5, hotspot: { cx: 0.199, cy: 0.432, label: "Meus dados" }, highlightColor: '#00FFFF', scroll: false },
  { id: 25, kind: 'print', rec: 'meus_dados___endereco', phrase: 'Meu endereço', subtitle: 'Informações', durationSec: 1.5, hotspot: { cx: 0.3, cy: 0.4, label: "Meu endereço" }, highlightColor: '#00FFFF', scroll: false },
  { id: 26, kind: 'print', rec: 'meus_dados___senha_app', phrase: 'Senha do app', subtitle: 'Acesso ao aplicativo', durationSec: 2.0, hotspot: { cx: 0.3, cy: 0.4, label: "Senha do app" }, highlightColor: '#00FFFF', scroll: false },
  { id: 27, kind: 'print', rec: 'cadastro_de_chaveiros', phrase: 'Chaveiros', subtitle: 'Aproximação', durationSec: 3.0, hotspot: { cx: 0.254, cy: 0.441, label: "Chaveiros" }, highlightColor: '#00FFFF', scroll: false },
  { id: 28, kind: 'print', rec: 'meus_constroles___novo_controle', phrase: 'Controles remotos', subtitle: 'Novo controle', durationSec: 2.5, hotspot: { cx: 0.3, cy: 0.4, label: "Controles remotos" }, highlightColor: '#00FFFF', scroll: false },
  { id: 29, kind: 'print', rec: 'meus_veiculos', phrase: 'Veículos', subtitle: 'Cadastrar veículo', durationSec: 2.0, hotspot: { cx: 0.525, cy: 0.264, label: "Veículos" }, highlightColor: '#00FFFF', scroll: false },
  { id: 30, kind: 'print', rec: 'cadastro_de_veiculos_formulario', phrase: 'Veículos', subtitle: 'Formulário', durationSec: 2.5, hotspot: { cx: 0.3, cy: 0.4, label: "Veículos" }, highlightColor: '#00FFFF', scroll: false },
  { id: 31, kind: 'print', rec: 'senhas_de_acesso_cadastradas', phrase: 'Senhas de acesso', subtitle: 'Alterar quando quiser', durationSec: 4.6, hotspot: { cx: 0.749, cy: 0.272, label: "Senhas de acesso" }, highlightColor: '#00FFFF', scroll: false },
  { id: 32, kind: 'print', rec: 'usuarios', phrase: 'Adicionar morador', subtitle: 'Novo usuário', durationSec: 5.5, hotspot: { cx: 0.733, cy: 0.284, label: "Adicionar morador" }, highlightColor: '#00FFFF', scroll: false },
  { id: 33, kind: 'print', rec: 'cadastro_de_usuario', phrase: 'Permissões do morador', subtitle: 'Dados e zonas', durationSec: 30.4, hotspot: { cx: 0.199, cy: 0.55, label: "Permissões do morador" }, highlightColor: '#00FFFF', scroll: false },
  { id: 34, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Sincronização', subtitle: 'Equipamentos', durationSec: 17.5, hotspot: { cx: 0.25, cy: 0.265, label: "Sincronização" }, highlightColor: '#00FFFF', scroll: false },
  { id: 35, kind: 'print', rec: 'relatorio_de_acessos_resumo', phrase: 'Relatórios de acessos', subtitle: 'Filtros por período', durationSec: 3.5, hotspot: { cx: 0.249, cy: 0.265, label: "Relatórios de acessos" }, highlightColor: '#00FFFF', scroll: false },
  { id: 36, kind: 'print', rec: 'relatorio_de_acessos_filtro', phrase: 'Filtros', subtitle: 'Período, local e usuário', durationSec: 3.0, hotspot: { cx: 0.75, cy: 0.264, label: "Filtros" }, highlightColor: '#00FFFF', scroll: false },
  { id: 37, kind: 'print', rec: 'relatorio_de_ligacoes_resumo', phrase: 'Relatório de ligações', subtitle: 'Filtros', durationSec: 3.0, hotspot: { cx: 0.25, cy: 0.265, label: "Relatório de ligações" }, highlightColor: '#00FFFF', scroll: false },
  { id: 38, kind: 'print', rec: 'documentos_do_condominio', phrase: 'Documentos', subtitle: 'Condomínio', durationSec: 3.0, hotspot: { cx: 0.256, cy: 0.287, label: "Documentos" }, highlightColor: '#00FFFF', scroll: false },
  { id: 39, kind: 'print', rec: 'ocorrencias', phrase: 'Livro de ocorrências', subtitle: 'Eventos registrados', durationSec: 5.5, hotspot: { cx: 0.265, cy: 0.354, label: "Livro de ocorrências" }, highlightColor: '#00FFFF', scroll: false },
  { id: 40, kind: 'print', rec: 'cadastro_de_chaveiros', phrase: 'Ligação pelo app', subtitle: 'Equipamento vinculado', durationSec: 14.0, hotspot: { cx: 0.254, cy: 0.441, label: "Ligação pelo app" }, highlightColor: '#00FFFF', scroll: false },
  { id: 41, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'Visualize, acesse, gerencie', durationSec: 10.0, hotspot: { cx: 0.5, cy: 0.5, label: "App Guardian" }, highlightColor: '#CB3033', scroll: false },
  { id: 42, kind: 'logo', rec: '', phrase: 'App Guardian', subtitle: 'Você dorme, a Guardian vigia.', durationSec: 20.5, hotspot: { cx: 0.5, cy: 0.5, label: "App Guardian" }, highlightColor: '#CB3033', scroll: false },
];
export const TOTAL_DURATION = 337.7;