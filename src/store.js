const seedData = [
  { id: 1, type: "income",  category: "Bonus",  amount: 50,  date: "2026-09-02" },
  { id: 2, type: "income",  category: "Salary", amount: 100, date: "2026-09-03" },
  { id: 3, type: "expense", category: "Travel", amount: 50,  date: "2026-09-02" },
  { id: 4, type: "expense", category: "Food",   amount: 100.5, date: "2026-09-03" },
];

let transactions = [...seedData];   // runtime state

localStorage.setItem('transactions',JSON.stringify(transactions))
// function addExpense(category, amount, date) {
//   transactions.push({
//     id: Date.now(),
//     type: "expense",
//     category,
//     amount: parseFloat(amount),   // decimal value
//     date,
//   });
//   render();
// }