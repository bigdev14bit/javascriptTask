const order = {"statuss" : "pending"}
if(order.statuss === "pending") {
  console.log("Processing");
} else if(order.statuss === "shipped") {
  console.log("Shipped");
} else if(order.statuss === "delivered") {
  console.log("Delivered");
}
