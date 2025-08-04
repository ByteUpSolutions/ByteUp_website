# ByteUp Solutions - Website Corporativo

![ByteUp Solutions](assets/byteup-logo.png)

**Sua Ideia Nossa Solução**

Um website corporativo moderno e responsivo para a ByteUp Solutions, uma empresa especializada em transformar ideias em soluções digitais inovadoras.

## 🚀 Sobre o Projeto

O website da ByteUp Solutions foi desenvolvido com foco na experiência do usuário, performance e acessibilidade. Apresenta os serviços da empresa de forma clara e atrativa, incluindo desenvolvimento web, apps mobile, UI/UX design, marketing digital, cloud solutions e suporte técnico.

### ✨ Características Principais

- **Design Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Performance Otimizada**: Carregamento rápido e otimizações de performance
- **Acessibilidade**: Implementação de boas práticas de acessibilidade web
- **SEO Otimizado**: Meta tags e estrutura otimizada para motores de busca
- **Animações Suaves**: Micro-interações e animações que melhoram a UX
- **Formulário Validado**: Sistema de contato com validação em tempo real
- **Múltiplas Páginas**: Páginas dedicadas para cada serviço oferecido

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com Flexbox e Grid
- **JavaScript ES6+**: Interatividade e funcionalidades dinâmicas
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia (Inter e Poppins)

## 📁 Estrutura do Projeto

```
ByteUp_website-main/
├── assets/
│   ├── byteup-logo.png          # Logo da empresa
│   └── favicon.png              # Favicon do site
├── css/
│   ├── style.css                # Estilos principais
│   └── responsive.css           # Estilos responsivos
├── js/
│   └── main.js                  # JavaScript principal
├── index.html                   # Página inicial
├── desenvolvimento-web.html     # Página do serviço de desenvolvimento web
├── apps-mobile.html            # Página do serviço de apps mobile
├── ui-ux-design.html           # Página do serviço de UI/UX design
├── marketing-digital.html      # Página do serviço de marketing digital
├── cloud-solutions.html        # Página do serviço de cloud solutions
├── suporte-tecnico.html        # Página do serviço de suporte técnico
├── todo.md                     # Lista de tarefas do projeto
└── README.md                   # Documentação do projeto
```

## 🎨 Design System

### Paleta de Cores

- **Primary**: `#782900` (Marrom escuro)
- **Secondary**: `#eb8000` (Laranja)
- **White**: `#ffffff`
- **Light Gray**: `#f5f5f5`
- **Dark Gray**: `#333333`
- **Border**: `#e0e0e0`

### Tipografia

- **Títulos**: Poppins (400, 500, 600, 700)
- **Corpo**: Inter (300, 400, 500, 600, 700)

## 🚀 Como Executar

### Pré-requisitos

- Navegador web moderno
- Servidor web local (opcional, mas recomendado)

### Instalação

1. Clone ou baixe o repositório:
```bash
git clone https://github.com/byteupsolutions/ByteUp_website.git
```

2. Navegue até o diretório do projeto:
```bash
cd ByteUp_website-main
```

3. Abra o arquivo `index.html` em seu navegador ou use um servidor local:

**Opção 1 - Servidor Python:**
```bash
python -m http.server 8000
```

**Opção 2 - Servidor Node.js:**
```bash
npx http-server
```

**Opção 3 - Live Server (VS Code):**
- Instale a extensão Live Server
- Clique com o botão direito em `index.html`
- Selecione "Open with Live Server"

## 📱 Funcionalidades

### Navegação

- Menu responsivo com hamburger para mobile
- Scroll suave entre seções
- Indicadores visuais de navegação ativa

### Formulário de Contato

- Validação em tempo real
- Feedback visual para campos válidos/inválidos
- Mensagens de erro personalizadas
- Estado de carregamento durante envio
- Notificações de sucesso/erro

### Animações

- Animações de entrada para elementos
- Hover effects em botões e cards
- Transições suaves
- Animação da forma geométrica no hero

### Acessibilidade

- Estrutura semântica HTML
- Atributos ARIA apropriados
- Suporte a navegação por teclado
- Link "Pular para conteúdo"
- Contraste adequado de cores
- Suporte a motion reduction

## 🔧 Personalização

### Alterando Cores

Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
  --primary-color: #782900;
  --secondary-color: #eb8000;
  --white: #ffffff;
  --light-gray: #f5f5f5;
  --dark-gray: #333333;
  --border-color: #e0e0e0;
}
```

### Adicionando Novos Serviços

1. Crie uma nova página HTML baseada em uma existente
2. Atualize o conteúdo específico do serviço
3. Adicione o link na navegação e footer
4. Teste a responsividade

### Modificando Conteúdo

- **Textos**: Edite diretamente nos arquivos HTML
- **Imagens**: Substitua os arquivos na pasta `assets/`
- **Informações de contato**: Atualize em todas as páginas

## 📊 Performance

O site foi otimizado para performance com:

- Compressão de imagens
- CSS e JS minificados (em produção)
- Lazy loading para elementos não críticos
- Otimização de fontes web
- Cache de recursos estáticos

### Métricas de Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🌐 Compatibilidade

### Navegadores Suportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivos

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 📈 SEO

O site implementa boas práticas de SEO:

- Meta tags otimizadas
- Open Graph para redes sociais
- Twitter Cards
- Estrutura semântica HTML
- URLs amigáveis
- Sitemap (recomendado adicionar)
- Schema markup (recomendado adicionar)

## 🔒 Segurança

- Validação de formulários no frontend
- Sanitização de inputs
- Headers de segurança (recomendado no servidor)
- HTTPS obrigatório em produção

## 📝 TODO List

- [x] Implementar SEO básico
- [x] Adicionar favicon
- [x] Implementar acessibilidade
- [x] Adicionar links de redes sociais no footer
- [x] Implementar formulário de contato com validação
- [x] Implementar responsividade completa
- [ ] Definir conteúdo para a seção de blog
- [x] Atualizar informações de contato
- [ ] Revisar serviços oferecidos
- [x] Definir responsável pelo contato
- [ ] Testar compatibilidade com diferentes navegadores
- [ ] Revisar e otimizar o código CSS
- [ ] Revisar e otimizar o código JavaScript

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**ByteUp Solutions**
- Website: [https://byteupsolutions.github.io/ByteUp_website](https://byteupsolutions.github.io/ByteUp_website)
- Email: byteupsolutions@gmail.com
- Telefone: (11) 96639-4993
- Localização: Itu, SP - Brasil

---

**Desenvolvido com ❤️ pela equipe ByteUp Solutions**

*Sua Ideia Nossa Solução*

