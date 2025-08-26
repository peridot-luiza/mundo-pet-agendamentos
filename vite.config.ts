importar { definirConfig } de "vite";
importar reagir de "@vitejs/plugin-react-swc";
importar caminho de "caminho";
importar { marcador de componentes } de "adicionador adorável";

exportar padrão definirConfig(({ modo }) => ({
  base: '/mundo-pet-agendamentos/',
  servidor: {
    anfitrião: "::",
    porto: 8080,
  },
  plugins: [
    reagir(),
    modo === 'desenvolvimento' &&
    marcador de componentes(),
  ].filtro(Booleano),
  resolvedor: {
    pseudônimo: {
      "@": caminho.resolvedor(__nome fazer diretório, "./src"),
    },
  },
}));
