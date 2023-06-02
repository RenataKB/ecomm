use("ecomm");
const products = db.products.insertMany([
    {
      "NOME": "Notebook Samsung",
      "DESCRIÇÃO": "Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6\"FHD, W11 Cinza",
      "SLUG": "notebook-samsung",
      "PREÇO UNITÁRIO": NumberDecimal(3523.00),
      "QUANTIDADE EM ESTOQUE": 1,
      "CATEGORIA": "INFORMÁTICA"
    },
    {
      "NOME": "Sofá 3 lugares",
      "DESCRIÇÃO": "Sofá 3 Lugares Retrátil e Reclinável Cama Inbox Compact 1,80m Velusoft Cinza",
      "SLUG": "sofa-3-lugares",
      "PREÇO UNITÁRIO": NumberDecimal(2500.00),
      "QUANTIDADE EM ESTOQUE": 1,
      "CATEGORIA": "MÓVEIS"
    },
    {
      "NOME": "Clean Architecture",
      "DESCRIÇÃO": "Arquitetura limpa: O guia do artesão para estrutura e design de software por Robert C. Martin (Uncle Bob)",
      "SLUG": "livro-clean-architecture",
      "PREÇO UNITÁRIO": NumberDecimal(102.90),
      "QUANTIDADE EM ESTOQUE": 2,
      "CATEGORIA": "LIVROS"
    },
    {
      "NOME": "Mesa de jantar 6 lugares",
      "DESCRIÇÃO": "Mesa de Jantar 6 Lugares Lótus Oppa Design - Caramel",
      "SLUG": "mesa-de-jantar-6-lugares",
      "PREÇO UNITÁRIO": NumberDecimal(3678.98),
      "QUANTIDADE EM ESTOQUE": 1,
      "CATEGORIA": "MÓVEIS"
    },
    {
      "NOME": "iPhone 13 Pro",
      "DESCRIÇÃO": "Apple iPhone 13 Pro (256 GB) - Verde-alpino",
      "SLUG": "iphone-13-pro",
      "PREÇO UNITÁRIO": NumberDecimal(9176.00),
      "QUANTIDADE EM ESTOQUE": 6,
      "CATEGORIA": "CELULARES"
    },
    {
      "NOME": "Monitor Dell 27",
      "DESCRIÇÃO": "Monitor Dell de 27\" P2722H, Preto",
      "SLUG": "monitor-dell-27",
      "PREÇO UNITÁRIO": NumberDecimal(1889.00),
      "QUANTIDADE EM ESTOQUE": 3,
      "CATEGORIA": "INFORMÁTICA"
    },
    {
      "NOME": "Implementing Domain-Driven Design",
      "DESCRIÇÃO": "Implementando Domain-Driven Design por Vaughn Vernon",
      "SLUG": "livro-implementing-ddd",
      "PREÇO UNITÁRIO": NumberDecimal(144.07),
      "QUANTIDADE EM ESTOQUE": 3,
      "CATEGORIA": "LIVROS"
    },
    {
      "NOME": "Jogo de pneus",
      "DESCRIÇÃO": "Pneu Barum by Continental Aro 13 Bravuris 5hm 175/70r13 82t",
      "SLUG": "jogo-de-pneus-continental-13",
      "PREÇO UNITÁRIO": NumberDecimal(1276.79),
      "QUANTIDADE EM ESTOQUE": 1,
      "CATEGORIA": "AUTOMOTIVA"
    },
    {
      "NOME": "Clean Code",
      "DESCRIÇÃO": "Código limpo: Habilidades práticas do Agile Software por Robert C. Martin (Uncle Bob)",
      "SLUG": "livro-clean",
      "PREÇO UNITÁRIO": NumberDecimal(95.17),
      "QUANTIDADE EM ESTOQUE": 1,
      "CATEGORIA": "LIVROS"
    },
    {
      "NOME": "Galaxy S22 Ultra",
      "DESCRIÇÃO": "Smartphone Samsung Galaxy S22 Ultra 256GB 5G com caneta S PEN - Preto, Câmera Tripla 108MP + Selfie 40MP, RAM 12GB, Tela 6.8",
      "SLUG": "celular-galaxy-22-ultra",
      "PREÇO UNITÁRIO": NumberDecimal(8549.10),
      "QUANTIDADE EM ESTOQUE": 5,
      "CATEGORIA": "CELULARES"
    },
    {
      "NOME": "Macbook Pro 16",
      "DESCRIÇÃO": "Notebook Apple MacBook Pro de 13 polegadas: Chip M2 da Apple com CPU de oito núcleos e GPU de dez núcleos, de 512 GB SSD - Prateado",
      "SLUG": "notebook-macbook-pro-16",
      "PREÇO UNITÁRIO": NumberDecimal(31752.00),
      "QUANTIDADE EM ESTOQUE": 1,
      "CATEGORIA": "INFORMÁTICA"
    },
    {
      "NOME": "Refactoring Improving the Design of Existing Code",
      "DESCRIÇÃO": "Refatoração: Aperfeiçoando o Design de Códigos Existentes por Martin Fowler",
      "SLUG": "livro-refactoring",
      "PREÇO UNITÁRIO": NumberDecimal(173.90),
      "QUANTIDADE EM ESTOQUE": 1,
      "CATEGORIA": "LIVROS"
    },
    {
      "NOME": "Cama queen size",
      "DESCRIÇÃO": "Cama Queen Size Dener Oppa Design - Mel",
      "SLUG": "cama-queen-size-dener",
      "PREÇO UNITÁRIO": NumberDecimal(3100.00),
      "QUANTIDADE EM ESTOQUE": 2,
      "CATEGORIA": "MÓVEIS"
    },
    {
      "NOME": "Central multimidia",
      "DESCRIÇÃO": "Kit Combo Central Multimídia 9 Polegadas Mp5 Automotivo Aparelho 2 Din Som Pra Carro Sistema Operacional Android 12 Bluetooth Usb Gps Integrado Conexão Wifi Função Speedplay que Simula Carplay e Android Auto Mais Aplicativos Como Spotify Waze Youtube WhatsApp, Tela Resistiva, Microfone Externo Função Multi Tela 2gb Ram e 32gb de Memória interna, Entradas para Encostos de Cabeça, Comando de Volante e Para Câmera Frontal ou Traseira + Moldura Painel Kia Sorento 2013 a 2014 Cor Preta + Câmera de ré",
      "SLUG": "central-multimidia-automotiva",
      "PREÇO UNITÁRIO": NumberDecimal(711.18),
      "QUANTIDADE EM ESTOQUE": 1,
      "CATEGORIA": "AUTOMOTIVA"
    },
    {
      "NOME": "Building Microservices",
      "DESCRIÇÃO": "Building Microservices (English Edition) por Sam Newman",
      "SLUG": "livro-building-microservices",
      "PREÇO UNITÁRIO": NumberDecimal(300.28),
      "QUANTIDADE EM ESTOQUE": 2,
      "CATEGORIA": "LIVROS"
    },
    {
      "NOME": "Galaxy Tab S8",
      "DESCRIÇÃO": "Tablet Samsung Galaxy S8 5G SM-X706B 256gb Grafite 8gb Ram",
      "SLUG": "tablet-galaxy-tab-s8",
      "PREÇO UNITÁRIO": NumberDecimal(5939.10),
      "QUANTIDADE EM ESTOQUE": 4,
      "CATEGORIA": "INFORMÁTICA"
    }
]);
console.log(products);
