# Serene Space Design

Ocorreu um erro no deploy do Vercel: as imagens estão quebrando e mostrando apenas o texto alternativo (alt text). Por favor, revise e corrija a forma como as imagens estão sendo importadas no projeto. Certifique-se de que todos os arquivos de imagem estão corretamente alocados na pasta public e que os componentes React estão referenciando essas imagens usando o caminho absoluto na raiz (por exemplo: src="/imagem.jpg"). Verifique também se não há erros de letras maiúsculas/minúsculas nas extensões dos arquivos, pois o Vercel é sensível a isso no build.

Crie um site, uma landing page para psicólogas. Psicóloga, né? Um site institucional com uma estrutura bem responsiva, também utilizando as cores descritas. Utilizando CSS e JavaScript o site deve conter scroll bem lentas e bem chamativas também. Quero que utilize a primeira foto em anexo na hero, a segunda foto no " Quem sou " ou algo assim da Doutora e a terceira foto como favicon.

O ícone da foto do WhatsApp deve ser o original do WhatsApp, o verde e branco do lado  flutuante do lado direito. O restante pode ser da paleta de cor do site. 
{
  "site_title": "Dra. Nayara Justimiano | Psicologia",
  "theme_and_tech": {
    "stack": ["HTML5", "CSS3", "Vanilla JavaScript"],
    "colors": {
      "primary_background": "#F9F6F0",
      "secondary_background": "#EADDCF",
      "accent_pink_soft": "#E6C5C8",
      "accent_pink_strong": "#C85A71",
      "highlight_green_olive": "#5B6447",
      "text_dark": "#4A4A4A",
      "text_light": "#FFFFFF",
      "accent_blue_light": "#D0E1E8"
    },
    "typography": {
      "headings": "Playfair Display, serif",
      "body": "Montserrat, sans-serif"
    }
  },
  "global_elements": {
    "menu": [
      "Home",
      "Sobre",
      "Especialidades",
      "FAQ",
      "Contato"
    ],
    "primary_cta_button": "Agendar Minha Consulta"
  },
  "sections": [
    {
      "type": "Hero_Section",
      "heading": "Cuide da sua Saúde Mental",
      "text": "Um espaço acolhedor e seguro para você se reconectar consigo mesma. Porque uma mente bem cuidada muda toda a sua vida.",
      "button": "Agendar pelo WhatsApp"
    },
    {
      "type": "Problem_Identification",
      "heading": "Você tem se sentido sobrecarregada ultimamente?",
      "sub_text": "É comum ignorarmos nossos próprios limites até que o corpo e a mente peçam socorro. Não se compare, o que você vê nas redes não é a vida inteira.",
      "bullet_points": [
        "Ansiedade constante e pensamentos acelerados",
        "Dificuldade de foco e organização (Sintomas de TDAH)",
        "Sensação de exaustão e sobrecarga emocional diária",
        "Dificuldade em estabelecer limites e focar no autocuidado"
      ]
    },
    {
      "type": "Solution_Bridge",
      "headings": [
        "Não precisa ser difícil o tempo todo.",
        "A terapia é o seu espaço de recomeço."
      ],
      "text": "No processo terapêutico, você encontra um ambiente livre de julgamentos para entender suas dores, desenvolver ferramentas de enfrentamento e reconquistar sua qualidade de vida com leveza e respeito ao seu tempo.",
      "button": "Quero iniciar meu tratamento"
    },
    {
      "type": "About_Professional",
      "heading": "Dra. Nayara Justimiano",
      "text": [
        "Acredito que cada pessoa carrega batalhas que não aparecem nas fotos. Meu papel é caminhar ao seu lado nessa jornada, oferecendo uma escuta ativa e acolhedora.",
        "Sou Psicóloga Clínica e Hospitalar, com Pós-graduação em Psicologia Clínica e Hospitalar, e Pós-graduação em ABA (Autismo e Deficiência Intelectual). Atualmente, sigo aprimorando meu trabalho como Graduanda em Psicomotricidade.",
        "Minha abordagem é focada no acolhimento genuíno, oferecendo suporte especializado para quem lida com ansiedade, TDAH e para pessoas no espectro autista, respeitando a neurodiversidade e a individualidade de cada paciente.",
        "Psicóloga | CRP 06/162278"
      ],
      "call_to_action": "Dê o primeiro passo para cuidar de quem mais importa: você.",
      "button": "Falar com a Dra. Nayara"
    },
    {
      "type": "Video_Section",
      "heading": "Conheça meu espaço e minha abordagem",
      "text": "Aperte o play e saiba como a psicoterapia pode transformar a sua rotina e trazer mais leveza para os seus dias."
    },
    {
      "type": "Specialties_Services",
      "main_heading": "Áreas de Atendimento",
      "sub_text": "Suporte especializado, humanizado e focado na sua qualidade de vida.",
      "items": [
        {
          "title": "Psicoterapia para Ansiedade e TDAH",
          "description": "Estratégias práticas e acolhimento para lidar com a sobrecarga emocional, melhorar o foco e reduzir os impactos da ansiedade na rotina."
        },
        {
          "title": "Suporte no Autismo (ABA)",
          "description": "Compreensão profunda de como cada pessoa funciona, indo muito além do diagnóstico para oferecer suporte real, respeitoso e focado no desenvolvimento."
        },
        {
          "title": "Autocuidado e Regulação Emocional",
          "description": "Um espaço para você aprender a olhar para si mesma com mais amor, estabelecer limites saudáveis e lidar com os dias difíceis."
        }
      ]
    },
    {
      "type": "Value_Proposition_Benefits",
      "heading": "Por que investir na sua Saúde Mental?",
      "text": "Os benefícios da psicoterapia refletem em todas as áreas da sua vida.",
      "items": [
        {
          "title": "Autoconhecimento Profundo",
          "description": "Entenda seus padrões de comportamento e tome decisões mais alinhadas com a sua verdadeira essência."
        },
        {
          "title": "Alívio da Sobrecarga",
          "description": "Desenvolva ferramentas práticas para lidar com o estresse, a ansiedade e as pressões do dia a dia."
        },
        {
          "title": "Relacionamentos Mais Saudáveis",
          "description": "Melhore sua comunicação, aprenda a dizer 'não' quando necessário e construa vínculos mais fortes."
        }
      ]
    },
    {
      "type": "Customer_Journey_Process",
      "heading": "Como funciona o atendimento?",
      "sub_text": "Um processo simples, seguro e focado em você desde o primeiro contato.",
      "steps": [
        {
          "title": "1. Contato via WhatsApp",
          "description": "Você clica no botão de agendamento e fala diretamente com o suporte para tirar dúvidas e conhecer a disponibilidade de horários."
        },
        {
          "title": "2. Agendamento da Sessão",
          "description": "Escolhemos o melhor horário para o seu atendimento, garantindo flexibilidade para a sua rotina."
        },
        {
          "title": "3. O seu Espaço Seguro",
          "description": "Iniciamos os atendimentos em um ambiente totalmente confidencial, onde você será ouvida de verdade por uma hora inteira."
        }
      ]
    },
    {
      "type": "FAQ",
      "heading": "Dúvidas Frequentes",
      "sub_text": "Ainda não tem certeza? Veja as perguntas mais comuns de novos pacientes:",
      "questions": [
        "O atendimento é apenas para quem tem diagnóstico de TDAH ou Autismo?",
        "Como funciona a primeira sessão de terapia?",
        "Qual a duração de cada consulta?",
        "Você emite recibo para reembolso de plano de saúde?"
      ]
    },
    {
      "type": "Footer_Contact",
      "heading": "Nunca é tarde para se olhar com amor.",
      "sub_text": "Não deixe seu bem-estar para depois. Agende seu horário hoje mesmo.",
      "contact_info": [
        "WhatsApp: +55 19 98430-3943",
        "E-mail: contato@nayjustimiano.com.br",
        "Atendimento Especializado"
      ],
      "social_links": [
        "https://www.instagram.com/nayjustimiano_psi/"
      ],
      "button": "Agendar pelo WhatsApp"
    }
  ]
}

Panópsia Color, né, com as seguintes descrições em JavaScript e também em CSS

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/86c0e440-fe64-4d7e-91b3-cec8738f7868).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
