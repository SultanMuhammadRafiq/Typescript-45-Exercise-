// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(items: string[]): void {
    const sandwichSummary = `Your sandwich has the following items: ${items.join(", ")}`;
    console.log(sandwichSummary);
  }

  makeSandwich(["Bread","Chicken Kabab","Tomato","Lettuce","Onion","Souce","Mayonnese","French Fries"])
  makeSandwich(["Bread","Chicken Kabab","Fried Egg","Tomato","Lettuce","Onion","Souce","Mayonnese","French Fries"])
  makeSandwich(["Bread","Beaf Kabab","Fried Egg","Tomato","Lettuce","Onion","Souce","Mayonnese","French Fries"])
  