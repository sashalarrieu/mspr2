import { createContext, useState } from 'react'

export const accountTest = {
	id: '1',
	authKey: 'key',
	name: 'Sasha Larrieu',
	email: 'sasha@gmail.com',
}

export const useActionContext = (): ActionContextType => {
	const [connectedAccount, setConnectedAccount] =
		useState<ConnectedAccountType>(accountTest)

	return {
		connectedAccount,
		setConnectedAccount,
	}
}

interface AccountType {
	id: string
	authKey: string
	name: string
	email: string
}

export type ConnectedAccountType = AccountType | undefined

interface ActionContextType {
	connectedAccount: ConnectedAccountType
	setConnectedAccount: (value: ConnectedAccountType) => void
}

const actionContextStart = {
	connectedAccount: accountTest,
	setConnectedAccount: (value: ConnectedAccountType) => value,
}

export const ActionContext =
	createContext<ActionContextType>(actionContextStart)
