const jsonData = [
    {
      "Monday": "sooji upma",
      "Tuesday": "idli",
      "Wednesday": "poha",
      "Thursday": "aloo pyaz paratha",
      "Friday": "uttapam",
      "Saturday": "poori",
      "Sunday": "pao",
      "meal": "breakfast"
    },
    {
      "Monday": "",
      "Tuesday": "sambhar",
      "Wednesday": "",
      "Thursday": "",
      "Friday": "",
      "Saturday": "bhaji",
      "Sunday": "bhaji",
      "meal": "breakfast"
    },
    {
      "Monday": "boiled egg",
      "Tuesday": "",
      "Wednesday": "",
      "Thursday": "",
      "Friday": "egg bhurji",
      "Saturday": "",
      "Sunday": "",
      "meal": "breakfast"
    },
    {
      "Monday": "orange",
      "Tuesday": "papaya",
      "Wednesday": "banana",
      "Thursday": "orange",
      "Friday": "banana",
      "Saturday": "orange",
      "Sunday": "banana",
      "meal": "breakfast"
    },
    {
      "Monday": "sweet daliya",
      "Tuesday": "sweet daliya",
      "Wednesday": "corn flakes",
      "Thursday": "veg oats",
      "Friday": "corn flakes",
      "Saturday": "chocos",
      "Sunday": "corn flakes",
      "meal": "breakfast"
    },
    {
      "Monday": "brown bread",
      "Tuesday": "brown bread",
      "Wednesday": "brown bread",
      "Thursday": "brown bread",
      "Friday": "brown bread",
      "Saturday": "brown bread",
      "Sunday": "brown bread",
      "meal": "breakfast"
    },
    {
      "Monday": "white bread",
      "Tuesday": "white bread",
      "Wednesday": "white bread",
      "Thursday": "white bread",
      "Friday": "white bread",
      "Saturday": "white bread",
      "Sunday": "white bread",
      "meal": "breakfast"
    },
    {
      "Monday": "milk",
      "Tuesday": "milk",
      "Wednesday": "milk",
      "Thursday": "milk",
      "Friday": "milk",
      "Saturday": "milk",
      "Sunday": "milk",
      "meal": "breakfast"
    },
    {
      "Monday": "tea",
      "Tuesday": "tea",
      "Wednesday": "tea",
      "Thursday": "tea",
      "Friday": "tea",
      "Saturday": "tea",
      "Sunday": "tea",
      "meal": "breakfast"
    },
    {
      "Monday": "coffee",
      "Tuesday": "coffee",
      "Wednesday": "coffee",
      "Thursday": "coffee",
      "Friday": "coffee",
      "Saturday": "coffee",
      "Sunday": "coffee",
      "meal": "breakfast"
    },
    {
      "Monday": "beans masala",
      "Tuesday": "dum aloo",
      "Wednesday": "egg curry",
      "Thursday": "kofta curry",
      "Friday": "cabbage masala",
      "Saturday": "kadhai veg",
      "Sunday": "veg makhani",
      "meal": "lunch"
    },
    {
      "Monday": "soya keema matar",
      "Tuesday": "matar makhana",
      "Wednesday": "kadhai soya",
      "Thursday": "baigun bharta",
      "Friday": "shahi paneer",
      "Saturday": "aloo achari",
      "Sunday": "kadhai paneer",
      "meal": "lunch"
    },
    {
      "Monday": "sambhar",
      "Tuesday": "sambhar",
      "Wednesday": "sambhar",
      "Thursday": "sambhar",
      "Friday": "sambhar",
      "Saturday": "sambhar",
      "Sunday": "sambhar",
      "meal": "lunch"
    },
    {
      "Monday": "rajma",
      "Tuesday": "red masoor",
      "Wednesday": "dhaba dal",
      "Thursday": "dal makhani",
      "Friday": "arhar dal tadka",
      "Saturday": "kadi pakoda",
      "Sunday": "dal panchratan",
      "meal": "lunch"
    },
    {
      "Monday": "steamed rice",
      "Tuesday": "steamed rice",
      "Wednesday": "steamed rice",
      "Thursday": "steamed rice",
      "Friday": "steamed rice",
      "Saturday": "jeera rice",
      "Sunday": "steamed rice",
      "meal": "lunch"
    },
    {
      "Monday": "roti",
      "Tuesday": "roti",
      "Wednesday": "roti",
      "Thursday": "roti",
      "Friday": "roti",
      "Saturday": "roti",
      "Sunday": "roti",
      "meal": "lunch"
    },
    {
      "Monday": "lacha onion",
      "Tuesday": "green salad",
      "Wednesday": "masala onion",
      "Thursday": "green salad",
      "Friday": "lacha onion",
      "Saturday": "three beans salad",
      "Sunday": "green salad",
      "meal": "lunch"
    },
    {
      "Monday": "sweet lassi",
      "Tuesday": "tadka raita",
      "Wednesday": "curd",
      "Thursday": "curd",
      "Friday": "mix fruit raita",
      "Saturday": "",
      "Sunday": "boondi raita",
      "meal": "lunch"
    },
    {
      "Monday": "coleslaw s/w",
      "Tuesday": "red sauce pasta",
      "Wednesday": "corn n cheese s/w",
      "Thursday": "vermicilli upma",
      "Friday": "dahi papdi",
      "Saturday": "paani poori",
      "Sunday": "assorted pakoda",
      "meal": "snacks"
    },
    {
      "Monday": "tea",
      "Tuesday": "tea",
      "Wednesday": "tea",
      "Thursday": "tea",
      "Friday": "tea",
      "Saturday": "tea",
      "Sunday": "tea",
      "meal": "snacks"
    },
    {
      "Monday": "coffee",
      "Tuesday": "nimbu pani",
      "Wednesday": "coffee",
      "Thursday": "tang",
      "Friday": "coffee",
      "Saturday": "nimbu pani",
      "Sunday": "tang",
      "meal": "snacks"
    },
    {
      "Monday": "tawa veg",
      "Tuesday": "matar paneer",
      "Wednesday": "sitafal subzi",
      "Thursday": "gatta curry",
      "Friday": "kadhai soya",
      "Saturday": "aloo gobhi",
      "Sunday": "lauki chana",
      "meal": "dinner"
    },
    {
      "Monday": "lauki lababdar",
      "Tuesday": "gajar methi",
      "Wednesday": "aloo tamatar jhol",
      "Thursday": "sev bhaji",
      "Friday": "egg curry",
      "Saturday": "soya chaap masala",
      "Sunday": "aloo matar pyaz",
      "meal": "dinner"
    },
    {
      "Monday": "chana dal tadka",
      "Tuesday": "dal bukhara",
      "Wednesday": "kala chana masala",
      "Thursday": "dal lobiya",
      "Friday": "black masoor dal",
      "Saturday": "dhaba dal",
      "Sunday": "mix dal",
      "meal": "dinner"
    },
    {
      "Monday": "steamed rice",
      "Tuesday": "steamed rice",
      "Wednesday": "steamed rice",
      "Thursday": "steamed rice",
      "Friday": "steamed rice",
      "Saturday": "steamed rice",
      "Sunday": "steamed rice",
      "meal": "dinner"
    },
    {
      "Monday": "roti",
      "Tuesday": "roti",
      "Wednesday": "roti",
      "Thursday": "roti",
      "Friday": "roti",
      "Saturday": "roti",
      "Sunday": "roti",
      "meal": "dinner"
    },
    {
      "Monday": "milk",
      "Tuesday": "rice kheer",
      "Wednesday": "sooji halwa",
      "Thursday": "milk",
      "Friday": "coconut burfi",
      "Saturday": "besan ladoo",
      "Sunday": "gulab jamun",
      "meal": "dinner"
    },
    {
      "Monday": "lacha onion",
      "Tuesday": "lacha onion",
      "Wednesday": "green salad",
      "Thursday": "green salad",
      "Friday": "lacha onion",
      "Saturday": "green salad",
      "Sunday": "masala onion",
      "meal": "dinner"
    }
  ]
  
  // Function to show menu for the selected day
function showMenu() {
    const selectedDay = document.getElementById('day-select').value;
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Clear previous menu items

    // Group items by meal for the selected day
    const meals = groupByDay(jsonData, selectedDay);

    // Iterate over meals and create list items
    Object.entries(meals).forEach(([meal, items]) => {
        const mealHeader = document.createElement('h2');
        mealHeader.textContent = `${selectedDay} ${meal.charAt(0).toUpperCase() + meal.slice(1)}`; // Display day and meal name
        menu.appendChild(mealHeader);

        const ul = document.createElement('ul');
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        menu.appendChild(ul);
    });
}

// Function to group items by meal for a specific day
function groupByDay(data, day) {
    const meals = {};
    data.forEach(item => {
        const meal = item.meal.toLowerCase();
        if (!meals[meal]) {
            meals[meal] = [];
        }
        if (item[day] !== "") {
            meals[meal].push(item[day]);
        }
    });
    return meals;
}
