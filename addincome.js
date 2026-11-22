document.getElementById("add-incm").addEventListener("click",(event)=>{
    event.preventDefault()
    let incomeData={
        id:Date.now(),
        type:"income",
        category:`${document.getElementById("incm-cat").value}`,
        amount:parseFloat(document.getElementById("incm-amount").value),
        date:new Date().toLocaleDateString()
    }
    if(document.getElementById("date").value)
    {
        incomeData.date=new Date(`${document.getElementById("date").value}`).toLocaleDateString()
    }
    transactions=JSON.parse(localStorage.getItem('transactions'))
    transactions.push(incomeData)
    localStorage.setItem('transactions',JSON.stringify(transactions))
    console.log(transactions)
})

