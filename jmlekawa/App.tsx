import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { ActionContext, useActionContext } from './ActionContext'
import RootNavigator from './src/navigators/RootNavigator'

export default function App() {

	return (
		<ActionContext.Provider value={useActionContext()}>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</ActionContext.Provider>
	)
}
