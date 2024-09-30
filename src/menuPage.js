export function menu() {
    const content = document.querySelector("#content");

    const heading1 = document.createElement("h1");
    const paragraph = document.createElement("p");
    
    heading1.textContent = "Our Menu";
    paragraph.textContent = "Explore our diverse selection of delicious dishes, crafted with care to delight your palate.";

    content.appendChild(heading1);
    content.appendChild(paragraph);

    const categoryMap = {};

    function addItems(category, itemName, desc, price) {
        let menuSection;

        
        if (categoryMap[category]) {
            menuSection = categoryMap[category];
        } else {
            
            menuSection = document.createElement("div");
            menuSection.classList.add("menu-section");

            const categoryHeading = document.createElement("h2");
            categoryHeading.textContent = category;

            menuSection.appendChild(categoryHeading);
            content.appendChild(menuSection);

            categoryMap[category] = menuSection; 
        }


        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        
        const itemHeading = document.createElement("h3");
        itemHeading.textContent = itemName;
        
        const itemDescription = document.createElement("p");
        itemDescription.textContent = desc;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = price
        menuSection.appendChild(menuItem);

        menuItem.appendChild(itemHeading);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuSection.appendChild(menuItem);
    
    }
    
    addItems("Appetizers", "Bruschetta", "Grilled bread topped with fresh tomatoes, basil, and mozzarella.", "$8.00");
    addItems("Appetizers", "Stuffed Mushrooms", "Mushrooms filled with a blend of cheeses, herbs, and breadcrumbs.", "$10.00");
    addItems("Appetizers", "Garlic Bread", "Toasted bread with a rich garlic and herb butter spread.", "$5.00");

    addItems("Main Courses", "Grilled Salmon", "Fresh salmon fillet grilled to perfection, served with seasonal vegetables.", "$20.00");
    addItems("Main Courses", "Spaghetti Carbonara", "Pasta tossed in a creamy sauce with pancetta, egg, and parmesan.", "$15.00");
    addItems("Main Courses", "Chicken Alfredo", "Fettuccine pasta in a creamy Alfredo sauce, topped with grilled chicken.", "$18.00");

    addItems("Desserts", "Tiramisu", "Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.", "$6.00");
    addItems("Desserts", "Chocolate Lava Cake", "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.", "$8.00");
    addItems("Desserts", "Cheesecake", "Rich and creamy cheesecake with a graham cracker crust, served with berry sauce.", "$7.00");

    addItems("Beverages", "House Red Wine", "Rich and full-bodied red wine, perfect for pairing with your meal.", "$10.00");
    addItems("Beverages", "Fresh Lemonade", "Refreshing lemonade made with freshly squeezed lemons and a hint of mint.", "$3.00");
    addItems("Beverages", "Iced Tea", "Chilled tea served with lemon and a touch of sweetness.", "$2.00");

}