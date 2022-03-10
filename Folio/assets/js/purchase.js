var session = document.getElementById('event_options');
var sessionID = Number(session.options[session.selectedIndex].id);

document.getElementById('price_bt').addEventListener("click", function() {
    console.log("hey");
    var session_input = Number(session.options[session.selectedIndex].value);
    var status = document.getElementById('status_options');
    var status_input = Number(status.options[status.selectedIndex].value)
    var duration = document.getElementById('duration_options');
    var duration_input = Number(duration.options[duration.selectedIndex].value)
    let price = session_input + (status_input * duration_input)
    console.log(price);
    //Properly Storing the user input for later use
    var priceCents = price * 100;
    var sessionName = session.options[session.selectedIndex].getAttribute('name');
    window.storeItems = [sessionID, { priceInCents: priceCents, name: sessionName}]
    // module.exports = storeItems;
    // export default storeItems;
    // exports = {storeItems};
    // console.log(storeItems)

    document.getElementById("checkout").innerHTML = "Your Final Price: $".concat(price);
    let a_button = document.getElementById("checkout_b");

    if (!a_button) {
        let button = document.createElement("button"); button.name="checkout_b"; button.id="checkout_b"; button.innerHTML = "Proceed to Checkout"; button.classList.add("btn");
        document.getElementById("checkout_button").appendChild(button);
    }
})

document.getElementById("checkout_button").addEventListener("click", function() {
    console.log("checkout");
    fetch('http://localhost:3000/create-checkout-sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                {id: sessionID, quantity: 1, price: storeItems[1][0], name: storeItems[1][1]},
            ]
        })
    }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({ url }) => {
        window.location = url
    }).catch(e => {
        console.error(e.error)
    })
})