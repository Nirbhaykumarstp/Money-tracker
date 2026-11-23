document.getElementById("add-expns").addEventListener("click",(event)=>{
    event.preventDefault()
    let expnsData={
        id:Date.now(),
        type:"Expense",
        category:`${document.getElementById("expns-cat").value}`,
        amount:parseFloat(document.getElementById("expns-amount").value),
        date:new Date().toLocaleDateString()
    }
    if(document.getElementById("date").value)
    {
        expnsData.date=new Date(`${document.getElementById("date").value}`).toLocaleDateString()
    }
    transactions=JSON.parse(localStorage.getItem('transactions'))
    transactions.push(expnsData)
    localStorage.setItem('transactions',JSON.stringify(transactions))
    console.log(transactions)
})

