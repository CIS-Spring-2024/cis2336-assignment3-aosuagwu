const menuItems = [
    { name: 'Pancakes', image: 'IMAGES/pancakes.webp', description: 'Fluffy Buttermilk Pancakes', category: 'breakfast' },
    { name: 'Breakfast Tacos', image: 'IMAGES/breakfast tacos.jpg', description: 'Savory Breakfast Tacos', category: 'breakfast' },
    { name: 'Oatmeal', image: 'IMAGES/oatmeal.jpg', description: 'Sweet Oats', category: 'breakfast' },
    { name: 'Sandwich', image: 'IMAGES/sandwich.jpg', description: 'Grilled Chicken Sandwich', category: 'lunch' },
    { name: 'Garden Salad', image: 'IMAGES/salad.jpg', description: 'Fresh Garden Salad', category: 'lunch' },
    { name: 'Pizza', image: 'IMAGES/pizza.jpg', description: 'Pepperoni Pizza', category: 'dinner' },
    { name: 'Pasta', image: 'IMAGES/pasta.jpg', description: 'Tomato Cream Pasta', category: 'dinner' },
    { name: 'Fried Rice', image: 'IMAGES/fried_rice.jpg', description: 'Tasty Fried Rice', category: 'dinner' },
    { name: 'Steak', image: 'IMAGES/steak.jpg', description: 'Tender Steak and Fresh Broccoli', category: 'dinner' }
]




function renderMenuItems(category, containerId) {
    const menuContainer = document.getElementById(containerId);
    const items = menuItems.filter(item => item.category === category);
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');




        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);




        const itemDescription = document.createElement('span');
        itemDescription.textContent = item.description;
        itemDescription.classList.add('menu-item-description');
        menuItem.appendChild(itemDescription);




        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        menuItem.appendChild(itemImage);




        menuContainer.appendChild(menuItem);
    });
}




renderMenuItems('breakfast', 'breakfastMenu');
renderMenuItems('lunch', 'lunchMenu');
renderMenuItems('dinner', 'dinnerMenu');


function submitOrder() {
    console.log("Submit button clicked");


    const items = document.querySelectorAll('.menu-item');
    const order = [];
    let isValid = true;


    items.forEach(item => {
        const itemName = item.querySelector('.menu-item-name').textContent;
        const quantityInput = item.querySelector('.quantity');
        const quantity = parseInt(quantityInput.value);


        if (isNaN(quantity) || quantity <= 0 || quantity > 10) {
            alert(`Please enter a valid quantity between 1 and 10 for ${itemName}`);
            quantityInput.classList.add('invalid');
            isValid = false;
            return;
        }


        order.push({ name: itemName, quantity: quantity });
    });


    if (isValid) {
        console.log("Order:", order);
        alert('Order has been successfully submitted!');
    } else {
        alert('Order has not yet been submitted.');
    }
}



