let urlParams= (new URL(location)).searchParams
const orderId= urlParams.get('id')
const orderSpan = document.getElementById('orderId')
orderSpan.innerHTML = orderId
localStorage.clear()