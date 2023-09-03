import { getData } from './http'

// La liste des clients issue du CRM est accessible via l’API REST : /customers.
export function getCustomers() {
	return getData('customers/')
}

// Une commande d’un client est accessible via l’API REST /customers/<customer id>.
export function getCustomerByID(customerID: string) {
	return getData('customers/' + customerID)
}

// La liste de produits d’une commande est accessible via l’API REST /customers/<customer id>/orders.
export function getOrdersByCustomerByID(customerID: string) {
	return getData('customers/' + customerID + '/orders/')
}

// Un produit d’une commande est accessible via l’API REST /customers/<customer id>/orders/<order id>.
export function getOrderInOrders(customerID: string, orderID: string) {
	return getData('customers/' + customerID + '/orders/' + orderID)
}

// La liste de produits d’une commande est accessible via l’API REST /customers/<customer id>/orders/<order id>/products. 
export function getProductsByOrdersAndCustomerID(
	customerID: string,
	orderID: string,
) {
	return getData(
		'customers/' + customerID + '/orders/' + orderID + '/products',
	)
}

// La liste des produits issue de l’ERP est accessible via l’API REST : /products.
export function getProducts() {
	return getData('products/')
}

// Le détail d’un produit peut être accessible via l’API REST : /products/<product id>.
export function getProductByID(productID: string) {
	return getData('products/' + productID)
}
