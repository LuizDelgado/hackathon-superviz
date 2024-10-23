import { SuperVizRoomProvider } from '@superviz/react-sdk'
import Room from './components/Room'

const userId = Math.floor(Math.random() * 1000).toString()

export default function App() {
	return (
		<SuperVizRoomProvider
			developerKey="zerm0x1519m5gaqjotr4tfs4myafsg"
			group={{
				id: 'demos-video-conference-group',
				name: 'Demos: Video Conference',
			}}
			participant={{
				id: userId,
				name: userId + ' Participant',
			}}
			roomId='video-conference-demo'
		>
			<Room />
		</SuperVizRoomProvider>
	)
}