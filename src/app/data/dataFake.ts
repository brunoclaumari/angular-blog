export enum RecipeCategory {
  Caseiro,
  Salada,
  Sobremesa,
  CaldosSopas
}

export const receitas = [
  {
    id:1,
    recipe_title:"Sopa de feijão",
    featured:"Lembrança da vovó",
    recipe_category: RecipeCategory.CaldosSopas,
    recipe_data:"03 de Outubro de 2023",
    link_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJvXmeUX4XVM1b7VJ_GzdzibbHG99fQL-WEjMGLlpll-CM1qxRbaFNCuAC6jEtpRMMjY&usqp=CAU",
    ingredients:[
      "3 xícaras de Feijão cozido",
      "1 litro de água",
      "3 dentes de alho",
      "1 cebola picada"
    ],
    /* */
    preparation:[
      "No liquidificador, bata 3 xícaras de chá de feijão cozido e 1 linguiça calabresa em cubos até ficar homogêneo",
      "Em uma panela, refogue 3 dentes de alho picados e 1 cebola picada com 1 fio de azeite. Depois, acrescente 1 litro de água, 2 batatas em cubos, 250 gramas de espaguete quebrado, 1 cenoura em cubos e misture",
      "Acrescente 1 tablete de caldo de carne e o feijão reservado. Misture novamente e manda pro bucho!"
    ]
  },
  {
    id:2,
    recipe_title:"Salada com legumes",
    featured:"Tenha vida saudável",
    recipe_category: RecipeCategory.Salada,
    recipe_data:"25 de setembro de 2022",
    link_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkUFKTQdkWTy2uP1raSAmIi0VUhnM8DRoMyw&usqp=CAU",
    ingredients:[
      "2 cenouras",
      "4 batatas",
      "2 tomates",
      "1 cebola picada"
    ],
    preparation:[
      "Lave e cozinhe todos os legumes",
      "Tempere com sal e azeite",
      "Misture tudo e sirva frio"
    ]
  },
  {
    id:3,
    recipe_title:"Bolo de Chocolate",
    featured:"Guloseima para criançada",
    recipe_category: RecipeCategory.Sobremesa,
    recipe_data:"15 de agosto de 2023",
    link_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbF6ByzXcCjd9PVyPyAPrxLyNOS0CSOFd1Aw&usqp=CAU",
    ingredients:[
      "3 ovos",
      "Massa de bolo de chocolate",
      "Farinha de trigo",
      "Óleo de soja",
      "Fermento em pó",
      "Água"
    ],
    preparation:[
      "Quebre o ovo e jogue na tigela. Depois coloque a farinha e a massa de bolo",
      "Bate tudo na batedeira",
      "Unte a forma com farinha de manteiga",
      "Pegue a massa da batedeira e jogue na forma",
      "Leve ao forno por 30 minutos"
    ]
  },
  {
    id:4,
    recipe_title:"Strogonoff de frango",
    featured:"Prato preferido",
    recipe_category: RecipeCategory.Caseiro,
    recipe_data:"15 de agosto de 2023",
    link_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmthtES5P6KkeoGcJkuewELO-TQQ0prUrzMw&usqp=CAU",
    ingredients:[
      "2 peitos de frango (cortado em cubos)",
      "Creme de leite",
      "Azeite",
      "batata palha"
    ],
    preparation:[
      "Tempere o frango",
      "Corte em cubos",
      "Coloque o frango cortado e o creme de leite na panela e leve ao fogo",
      "Fique mexendo por 5 minutos",
      "Espere mais 5 com fogo baixo",
      "Coloque no prato e adicione batata palha"
    ]
  }
]


