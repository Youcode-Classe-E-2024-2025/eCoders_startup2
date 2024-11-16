const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
console.log(storedProducts);
 
 let productsData = [
    // New Balance
    {id: 1, name: "990v5", price: 166.43, img: "NB1.webp", gallerie: ["NB11.webp", "NB12.webp", "NB13.webp"], description: "Luxury sport shoe", category: "New Balance", quantity: 10, colors: ["#00443F", "#B9975E", "#3C6E72", "#E5E4DB"], details: "Crafted for both style and performance, the New Balance 990v5 is a premium choice featuring plush cushioning, superior stability, and a luxurious design. Ideal for all-day wear with exceptional comfort.", rating: 0.89, dateOfAdd: "2023-07-15"},
    {id: 2, name: "Foam 1080v12", price: 189.99, img: "NB2.webp", gallerie: ["NB21.webp", "NB22.webp", "NB23.webp"], description: "Comfortable running shoe", category: "New Balance", quantity: 5, colors: ["#111315"], details: "Designed for long-distance runners, the 1080v12 provides excellent cushioning and support, featuring a sleek and lightweight design perfect for enhancing speed and comfort over long runs.", rating: 0.92, dateOfAdd: "2023-06-20"},
    {id: 3, name: "FuelCell Rebel", price: 230.00, img: "NB3.webp", gallerie: ["NB31.webp", "NB32.webp", "NB33.webp"], description: "Lightweight running shoe", category: "New Balance", quantity: 8, colors: ["#121353", "#73B8CD", "#F1EDD8"], details: "The FuelCell Rebel is an ultra-lightweight running shoe with responsive cushioning that is ideal for high-energy performance and sprinting, giving runners that extra boost.", rating: 0.85, dateOfAdd: "2023-05-12"},
    {id: 4, name: "574 Core", price: 450.75, img: "NB4.webp", gallerie: ["NB41.webp", "NB42.webp", "NB43.webp"], description: "Classic casual shoe", category: "New Balance", quantity: 3, colors: ["#0F0C12"], details: "A staple of the New Balance line, the 574 Core combines retro style with modern comfort, perfect for casual wear with a timeless aesthetic.", rating: 0.81, dateOfAdd: "2023-03-18"},
    {id: 5, name: "Vazee Pace", price: 299.99, img: "NB5.webp", gallerie: ["NB51.webp", "NB52.webp", "NB53.webp"], description: "Fast and flexible shoe", category: "New Balance", quantity: 7, colors: ["#7B8061", "#A4A590"], details: "Engineered for speed, the Vazee Pace offers a flexible and lightweight design that promotes fast and natural foot movement, ideal for intense training sessions.", rating: 0.77, dateOfAdd: "2023-04-10"},
    {id: 6, name: "890v7", price: 120.99, img: "NB6.webp", gallerie: ["NB61.webp", "NB62.webp", "NB63.webp"], description: "Sporty running shoe", category: "New Balance", quantity: 12, colors: ["#B1CFEB", "#04AF9B", "#DACFBE"], details: "The 890v7 is a sporty, versatile running shoe with durable construction and breathable materials, providing comfort for everyday use and athletic activities.", rating: 0.80, dateOfAdd: "2023-01-25"},
    {id: 7, name: "990v4", price: 350.50, img: "NB7.webp", gallerie: ["NB71.webp", "NB72.webp", "NB73.webp"], description: "Comfortable lifestyle shoe", category: "New Balance", quantity: 6, colors: ["#A9A9A9", "#515355", "#BDBBB7"], details: "Built with premium materials and cushioned support, the 990v4 provides superior comfort and style for an elevated everyday look.", rating: 0.87, dateOfAdd: "2023-02-22"},
    {id: 8, name: "X-Racer", price: 90.00, img: "NB8.webp", gallerie: ["NB81.webp", "NB82.webp", "NB83.webp"], description: "Durable and fast shoe", category: "New Balance", quantity: 15, colors: ["#272427", "#EFEDEC"], details: "The X-Racer is designed for speed with durable construction, providing a sleek, low-profile look that's great for athletic performance and urban exploration.", rating: 0.76, dateOfAdd: "2023-05-30"},
    {id: 9, name: "990v5", price: 49.99, img: "NB9.webp", gallerie: ["NB91.webp", "NB92.webp", "NB93.webp"], description: "High-performance shoe", category: "New Balance", quantity: 20, colors: ["#BFC0BB", "#F1F1F1"], details: "The high-performance New Balance 990v5 is engineered with supportive materials, perfect for enhancing comfort and durability through long-distance runs.", rating: 0.93, dateOfAdd: "2023-08-05"},
    {id: 10, name: "Foam 1080v12", price: 600.00, img: "NB10.webp", gallerie: ["NB101.webp", "NB102.webp", "NB103.webp"], description: "Cushioned running shoe", category: "New Balance", quantity: 4, colors: ["#045951", "#D0C6A0", "#F1F1F1"], details: "An elite cushioned shoe for runners, the Foam 1080v12 offers a plush underfoot feel, making it ideal for long runs and recovery days.", rating: 0.95, dateOfAdd: "2023-07-01"},
    {id: 11, name: "Vazee Pace", price: 600.00, img: "NB110.webp", gallerie: ["NB111.webp", "NB112.webp", "NB113.webp"], description: "Flexible performance shoe", category: "New Balance", quantity: 4, colors: ["#2A292E", "#F1F1F3", "#0A554C"], details: "Vazee Pace is crafted for flexibility and performance, making it a top choice for athletes who need quick transitions and responsive energy return.", rating: 0.82, dateOfAdd: "2023-06-11"},
    {id: 12, name: "574 Core", price: 600.00, img: "NB120.webp", gallerie: ["NB121.webp", "NB122.webp", "NB123.webp"], description: "Casual everyday shoe", category: "New Balance", quantity: 4, colors: ["#101014"], details: "A classic everyday shoe, the 574 Core combines modern construction with vintage appeal, suited for comfort and style in any setting.", rating: 0.84, dateOfAdd: "2023-09-03"},
    
    // NIKE
    {id: 13, name: "Air Max", price: 130.99, img: "Nike-AIRMAX.png", gallerie: ["Nike-AIRMAX-1.jpg", "Nike-AIRMAX-2.jpg", "Nike-AIRMAX-3.png"], description: "Confort et style emblématique.", category: "nike", quantity: 10, colors: ["#FFFFFF"], details: "Les Air Max offrent un amorti légendaire et un style unique, conçus pour les amateurs de confort urbain et de mode streetwear.", rating: 0.87, dateOfAdd: "2023-11-02"},
    {id: 14, name: "Classic", price: 120.50, img: "CLASSIC.png", gallerie: ["CLASSIC-1.jpg", "CLASSIC-2.jpg", "CLASSIC-3.jpg"], description: "Look intemporel pour toutes occasions.", category: "nike", quantity: 15, colors: ["#000000"], details: "Le modèle Classic allie élégance et confort pour un style polyvalent qui convient à tous les looks.", rating: 0.75, dateOfAdd: "2023-10-15"},
    {id: 15, name: "Court Legacy", price: 110.00, img: "COURT-LEGACY.png", gallerie: ["COURT-LEGACY-1.png", "COURT-LEGACY-2.png", "COURT-LEGACY-3.png"], description: "Légère et décontractée.", category: "nike", quantity: 8, colors: ["#00FF00"], details: "La Court Legacy combine un design classique avec une touche de modernité, idéale pour un style décontracté.", rating: 0.82, dateOfAdd: "2023-09-20"},
    {id: 16, name: "SB Flex", price: 100.75, img: "SB-FORCE.png", gallerie: ["SB-FORCE-1.jpg", "SB-FORCE-2.jpg", "SB-FORCE-3.png"], description: "Confort et style pour les skateurs.", category: "nike", quantity: 10, colors: ["#FF0000"], details: "La SB Flex offre flexibilité et stabilité pour les amateurs de skate et de mode urbaine.", rating: 0.78, dateOfAdd: "2023-08-10"},
    {id: 17, name: "Zoom Air", price: 140.00, img: "ZOOM.png", gallerie: ["ZOOM-1.png", "ZOOM-2.png", "ZOOM-3.png"], description: "Amorti supérieur et design moderne.", category: "nike", quantity: 9, colors: ["#D3D3D3"], details: "Conçue pour la performance, la Zoom Air offre un amorti avancé pour les coureurs exigeants.", rating: 0.92, dateOfAdd: "2023-07-30"},
    {id: 18, name: "Revolution", price: 95.25, img: "REVOLUTION.jpg", gallerie: ["REVOLUTION-1.jpg", "REVOLUTION-2.jpg", "REVOLUTION-3.png"], description: "Respirante et polyvalente.", category: "nike", quantity: 11, colors: ["#0000FF"], details: "Chaussure respirante et idéale pour les activités quotidiennes avec un confort maximal.", rating: 0.81, dateOfAdd: "2023-06-18"},
    {id: 19, name: "Flex Runner", price: 85.00, img: "FLEX-RUNNER.png", gallerie: ["FLEX-RUNNER-1.png", "FLEX-RUNNER-2.jpg", "FLEX-RUNNER-3.png"], description: "Légère pour une course optimale.", category: "nike", quantity: 14, colors: ["#000000"], details: "Conçue pour une course légère et sans effort, parfaite pour les débutants et les coureurs occasionnels.", rating: 0.76, dateOfAdd: "2023-05-25"},
    {id: 20, name: "Quest", price: 125.49, img: "QUEST.png", gallerie: ["QUEST-1.jpg", "QUEST-2.jpg", "QUEST-3.png"], description: "Confort et style pour les coureurs.", category: "nike", quantity: 10, colors: ["#FF0000"], details: "Offre un équilibre entre confort et stabilité, idéale pour les coureurs à la recherche de performance.", rating: 0.89, dateOfAdd: "2023-04-10"},
    {id: 21, name: "Jordan Stadium", price: 90.99, img: "JORDAN-STADIUM.png", gallerie: ["JORDAN-STADIUM-1.png", "JORDAN-STADIUM-2.png", "JORDAN-STADIUM-3.png"], description: "Chaussure pour homme.", category: "nike", quantity: 10, colors: ["#FF0000"], details: "Un classique pour les amateurs de style sportif et de mode urbaine.", rating: 0.74, dateOfAdd: "2023-03-15"},
    {id: 22, name: "Nike Full Force", price: 64.99, img: "FULLFORCE.png", gallerie: ["FULLFORCE-1.png", "FULLFORCE-2.png", "FULLFORCE-3.png"], description: "Chaussure pour homme.", category: "nike", quantity: 10, colors: ["#FF0000"], details: "Allie confort et robustesse pour un usage quotidien, parfaite pour les environnements urbains.", rating: 0.68, dateOfAdd: "2023-02-07"},
    {id: 23, name: "Attack", price: 97.99, img: "ATTACK.jpg", gallerie: ["ATTACK-1.png", "ATTACK-2.jpg", "ATTACK-3.jpg"], description: "Chaussure pour homme.", category: "nike", quantity: 10, colors: ["#FF0000"], details: "Chaussure durable et résistante, idéale pour les activités extérieures intenses.", rating: 0.77, dateOfAdd: "2023-01-25"},
    {id: 24, name: "Tech Hera", price: 125.49, img: "TECH-HERA.png", gallerie: ["TECH-HERA-1.png", "TECH-HERA-2.png", "TECH-HERA-3.png"], description: "Chaussure pour homme.", category: "nike", quantity: 10, colors: ["#FF0000"], details: "Un modèle performant avec un look moderne, pour les amateurs de technologie et de confort.", rating: 0.84, dateOfAdd: "2022-12-05"},
    // Adidas
    {id: 25, name: "Gazelle", price: 100.00, img: "gazelle.png", gallerie: ["gazelle-1.png", "gazelle-2.png", "gazelle-3.png"], description: "Style rétro et confortable.", category: "adidas", quantity: 10, colors: ["#FFFFFF"], details: "La Gazelle d'Adidas est un modèle emblématique avec un design rétro et un confort moderne. Idéale pour les amateurs de streetwear et ceux qui recherchent un look urbain classique.", rating: 0.88, dateOfAdd: "2023-09-10"},
    {id: 26, name: "Stan Smith", price: 130, img: "Stan-Smith.png", gallerie: ["Stan-Smith-1.png", "Stan-Smith-2.png", "Stan-Smith-3.png"], description: "Élégante pour tous les styles.", category: "adidas", quantity: 12, colors: ["#00FF00"], details: "La Stan Smith est un modèle élégant qui traverse les générations avec son design minimaliste et sa polyvalence. Parfaite pour un style casual ou sophistiqué.", rating: 0.92, dateOfAdd: "2023-11-01"},
    {id: 27, name: "NMD", price: 150.99, img: "NMD.png", gallerie: ["NMD-1.png", "NMD-2.png", "NMD-3.png"], description: "Touche urbaine et performance.", category: "adidas", quantity: 9, colors: ["#808080"], details: "Le NMD d'Adidas allie style urbain et performance. Son design innovant et sa technologie de confort en font un choix parfait pour ceux qui recherchent une chaussure moderne et fonctionnelle.", rating: 0.85, dateOfAdd: "2023-08-15"},
    {id: 28, name: "Superstar", price: 90.30, img: "SuperStar.png", gallerie: ["SuperStar-1.png", "SuperStar-2.png", "SuperStar-3.png"], description: "Classique et intemporelle.", category: "adidas", quantity: 8, colors: ["#FFFFFF"], details: "Le modèle Superstar est un classique d'Adidas qui ne se démode jamais. Son design iconique et sa semelle en caoutchouc à coque renforcée offrent à la fois style et confort.", rating: 0.90, dateOfAdd: "2022-12-05"},
    {id: 29, name: "Ultraboost", price: 180.49, img: "Ultraboost.png", gallerie: ["Ultraboost-1.png", "Ultraboost-2.png", "Ultraboost-3.png"], description: "Parfaite pour de longues marches.", category: "adidas", quantity: 7, colors: ["#0000FF"], details: "L'Ultraboost est l'une des chaussures les plus confortables d'Adidas, conçue pour les longues marches et les courses. Avec sa technologie de semelle boost, elle offre un retour d'énergie optimal.", rating: 0.95, dateOfAdd: "2023-07-10"},
    {id: 30, name: "Lite Racer", price: 85.00, img: "Lite-racer.png", gallerie: ["Lite-racer-1.png", "Lite-racer-2.png", "Lite-racer-3.png"], description: "Légère et stylée.", category: "adidas", quantity: 13, colors: ["#FF0000"], details: "La Lite Racer est une chaussure légère et confortable, idéale pour un usage quotidien. Son design moderne et ses matériaux respirants la rendent parfaite pour les sportifs comme pour les citadins.", rating: 0.87, dateOfAdd: "2023-06-25"},
    {id: 31, name: "Duramo", price: 90, img: "Duramo.png", gallerie: ["Duramo-1.png", "Duramo-2.png", "Duramo-3.png"], description: "Polyvalente et confortable.", category: "adidas", quantity: 11, colors: ["#000080"], details: "La Duramo est une chaussure sportive polyvalente offrant un confort exceptionnel pour les séances d'entraînement et les courses quotidiennes. Son design épuré s'adapte à tous les styles.", rating: 0.82, dateOfAdd: "2023-09-05"},
    {id: 32, name: "Samba", price: 95.75, img: "Samba.png", gallerie: ["Samba-1.png", "Samba-2.png", "Samba-3.png"], description: "Style décontracté et classique.", category: "adidas", quantity: 12, colors: ["#A52A2A"], details: "Le modèle Samba d'Adidas allie style sportif et élégant avec sa silhouette classique. Une chaussure parfaite pour un look décontracté ou pour jouer au football en extérieur.", rating: 0.89, dateOfAdd: "2023-08-22"},
    {id: 33, name: "Racer TR23", price: 80, img: "Racer.png", gallerie: ["Racer-1.png", "Racer-2.png", "Racer-3.png"], description: "Style décontracté et classique.", category: "adidas", quantity: 12, colors: ["#A52A2A"], details: "Le Racer TR23 est une chaussure légère et moderne avec un design épuré. Elle est parfaite pour les entraînements ou pour une utilisation quotidienne, alliant confort et style.", rating: 0.86, dateOfAdd: "2023-05-17"},
    {id: 34, name: "Runfalcon", price: 65, img: "Runfalcon.png", gallerie: ["Runfalcon-1.png", "Runfalcon-2.png", "Runfalcon-3.png"], description: "Style décontracté et classique.", category: "adidas", quantity: 12, colors: ["#A52A2A"], details: "Le Runfalcon est un modèle simple et fonctionnel, idéal pour la course à pied ou un look décontracté au quotidien. Son confort et sa légèreté en font un choix populaire.", rating: 0.81, dateOfAdd: "2023-03-28"},
    {id: 35, name: "OZMILLEN", price: 110, img: "OZMILLEN.png", gallerie: ["OZMILLEN-1.png", "OZMILLEN-2.png", "OZMILLEN-3.png"], description: "Style décontracté et classique.", category: "adidas", quantity: 12, colors: ["#A52A2A"], details: "L'OZMILLEN est une chaussure au design moderne et élégant, offrant à la fois confort et style. Elle est idéale pour une utilisation en ville ou pour une activité sportive légère.", rating: 0.84, dateOfAdd: "2023-06-30"},
    {id: 36, name: "Kaptir", price: 90, img: "Kaptir.png", gallerie: ["Kaptir-1.png", "Kaptir-2.png", "Kaptir-3.png"], description: "Style décontracté et classique.", category: "adidas", quantity: 12, colors: ["#A52A2A"], details: "Le Kaptir combine confort et légèreté, avec un design qui s'adapte à toutes les occasions. Parfait pour ceux qui recherchent une chaussure agréable au quotidien.", rating: 0.80, dateOfAdd: "2023-04-12"},
    
];


localStorage.setItem('products', JSON.stringify(productsData));