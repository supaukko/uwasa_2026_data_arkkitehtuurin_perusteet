import fs from "node:fs/promises";

const Category = {
    BASIC: "basic",
    NORMAL: "normal",
    VIP: "vip",
    UNKNOWN: "Unknown"
};

const jsonString = await fs.readFile("src/kappale03/data/h6/customers.json", "utf-8");
const customers = JSON.parse(jsonString);

console.log(`Asiakkaita ${customers.length}`)

const target_customers = customers.map(customer=> transformCustomer(customer))

function parseAddress(customer) {
  return {
    street_address: customer.address,
    zip_code: customer.zip_code,
    city: customer.city
  }
}

function calculateAverage(customer) {
    const sales = Number.parseInt(customer.customer_sales, 10);
    const orders = Number.parseInt(customer.number_of_orders, 10);
    if (Number.isNaN(sales) || Number.isNaN(orders) || orders <= 0) {
        return 0;
    }

    return Math.round(sales / orders);
}

function transformCustomer(original_customer){
    return {
        fullName: `${original_customer.lastName} ${original_customer.firstName}`,
        address: parseAddress(original_customer),
        telephone: original_customer.telephone,
        customer_category: categorizeSales(original_customer.customer_sales),
        average_value_of_orders: calculateAverage(original_customer)
    }
}

function categorizeSales(sales){
  const count = Number.parseInt(sales, 10);
  if (Number.isNaN(count)) {
    return Category.UNKNOWN;
  }
  if (count < 10000) {
    return Category.BASIC;
  }
  if (count <= 30000) {
    return Category.NORMAL;
  }
  return Category.VIP;
}

console.log(target_customers);
