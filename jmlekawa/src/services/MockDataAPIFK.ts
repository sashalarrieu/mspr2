import { AccountType, ProductType } from '../../ActionContext'

export const customers: AccountType[] = [
	{
		id: '1',
		name: 'John Doe',
		email: 'john.doe@example.com',
		orders: [
			{
				id: '1',
				products: [
					{
						name: 'café noir',
						price: '0.20',
						id: '1',
					},
					{
						name: 'café au lait',
						price: '0.30',
						id: '2',
					},
				],
			},
			{
				id: '2',
				products: [
					{
						name: 'café noir',
						price: '0.20',
						id: '1',
					},
				],
			},
		],
	},
	{
		id: '2',
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		orders: [
			{
				id: '1',
				products: [
					{
						name: 'café au lait',
						price: '0.30',
						id: '2',
					},
				],
			},
		],
	},
]

const products: ProductType[] = [
	{
		name: 'café noir',
		price: '0.20',
		id: '1',
	},
	{
		name: 'café au lait',
		price: '0.30',
		id: '2',
	},
]

// La liste des clients issue du CRM est accessible via l’API REST : /customers.
export function getCustomers() {
	return customers
}

// Une commande d’un client est accessible via l’API REST /customers/<customer id>.
export function getCustomerByID(customerID: string) {
	return customers.find((customer) => customer.id === customerID)
}

// La liste de produits d’une commande est accessible via l’API REST /customers/<customer id>/orders.
export function getOrdersByCustomerByID(customerID: string) {
	const customer = customers.find((customer) => customer.id === customerID)
	return customer?.orders
}

// Un produit d’une commande est accessible via l’API REST /customers/<customer id>/orders/<order id>.
export function getOrderInOrders(customerID: string, orderID: string) {
	const customer = customers.find((customer) => customer.id === customerID)
	const order = customer?.orders.find((order) => order.id === orderID)
	return order
}

// La liste de produits d’une commande est accessible via l’API REST /customers/<customer id>/orders/<order id>/products.
export function getProductsByOrdersAndCustomerID(
	customerID: string,
	orderID: string,
) {
	const customer = customers.find((customer) => customer.id === customerID)
	const order = customer?.orders.find((order) => order.id === orderID)
	return order?.products
}

// La liste des produits issue de l’ERP est accessible via l’API REST : /products.
export function getProducts() {
	return products
}

// Le détail d’un produit peut être accessible via l’API REST : /products/<product id>.
export function getProductByID(productID: string) {
	return products.find((product) => product.id === productID)
}
