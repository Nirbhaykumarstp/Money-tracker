function render()
{   
    transactions=JSON.parse(localStorage.getItem('transactions'))
    const income=transactions.filter(t => t.type==="income")
    const expense=transactions.filter(t => t.type==="expense")
    const sum=list=>list.reduce((s,t)=>s+t.amount,0)
    console.log(sum(income))
    document.getElementById("total-incm").textContent=sum(income)
    document.getElementById("total-expns").textContent=sum(expense)
    document.getElementById("total-svng").textContent=(sum(income)-sum(expense))

    document.getElementById("month-sep").innerHTML=`<tr><td><span>september</span></td><td>${sum(income)}</td><td>${sum(expense)}</td><td>${sum(income)-sum(expense)}</td><td><span>${(Math.floor((sum(income)-sum(expense))/sum(expense))*100)}</span></td></tr>`

    document.getElementById("total-trnscn").innerHTML=transactions.map(t=> `<tr><td>${t.date}</td><td><span>${t.category}</span></td><td>${t.amount}</td></tr>`)
}
render()