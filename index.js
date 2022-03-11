const fruitNames = ["Banana 🍌", "Grapes 🍇", "Lemon 🍋", "Mango 🥭", "Melon 🍈", "Pineapple 🍍", "Red Apple 🍎", "Tangerine 🍊", "Watermelon 🍉", "Kiwi Fruit🥝", "Green Apple🍏", "Pear🍐", "Coconut🥥", ];

const emojis = ["🍌", "🍇", "🍋", "🥭", "🍈", "🍍", "🍎", "🍊", "🍉", "🥝", "🍏", "🍐", "🥥", "🥔"];


const Fruitslist = document.getElementById("fruits");

fruitNames.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    Fruitslist.appendChild(li);
});

function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("fruits");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* if next item is alphabetically
                lower than current item, mark as a switch
                and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {

        fruitNames.push(inputValue);
        Fruitslist.innerHTML = "";
        fruitNames.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            Fruitslist.appendChild(li);
            myInput.value = "";
        });

    }

}

function filterFruits() {
    var render_lists = function(lists) {
        var li = "";
        for (index in lists) {
            li += "<li>" + lists[index] + "</li>";
        }
        Fruitslist.innerHTML = li;
    }

    render_lists(fruits);

    // lets filters it
    input = document.getElementById('list');

    var filterFruits = function(event) {
        keyword = input.value.toLowerCase();
        filtered_fruits = fruitNames.filter(function(user) {
            user = user.toLowerCase();
            return user.indexOf(keyword) > -1;
        });

        render_lists(filtered_fruits);
    }

    input.addEventListener('keyup', filterFruits);
}