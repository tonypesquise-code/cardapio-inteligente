// Arquivo: dados.js
const restaurantes = [
    {
        id: "cantina",
        nome: "Cantina Exemplo",
        slogan: "A tradição da nossa terra servida na sua mesa.",
        whatsapp: "5542999999999", 
        cardapio: [
            {
                id: 1,
                nome: "Talharim 'Santa Bárbara'",
                descricao: "Massa artesanal ao molho de vinho tinto da colônia com lascas de carne.",
                preco: 45.90,
                imagem: "img/talharim.png",
                categoria: "Massas" // NOVA PROPRIEDADE
            },
            {
                id: 2,
                nome: "Pizza 'Essência'",
                descricao: "Frango temperado, Catupiry original, milho e um toque de azeite de ervas.",
                preco: 65.00,
                imagem: "img/pizza.png",
                categoria: "Pizzas"
            },
            {
                id: 4, // Adicionei uma bebida para testarmos o filtro!
                nome: "Vinho Tinto Suave (Taça)",
                descricao: "Vinho colonial suave da nossa região, perfeito para acompanhar as massas.",
                preco: 15.00,
                imagem: "🍷", // Usando emoji provisório
                categoria: "Bebidas"
            }
        ]
    },
    {
        id: "hamburgueria",
        nome: "Lenhador Burger",
        slogan: "O verdadeiro sabor no fogo a lenha.",
        whatsapp: "5542988888888",
        cardapio: [
            {
                id: 3,
                nome: "Burger 'Coração da Mata'",
                descricao: "Blend suculento de 180g, bacon e cebola caramelizada no pão brioche.",
                preco: 35.50,
                imagem: "img/burger.png",
                categoria: "Hambúrgueres"
            }
        ]
    }
];