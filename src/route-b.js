import main from './main'
import shared from './shared'
export {default as routeA} from './route-a'

export default function something() {
	return main('something' + shared())
}
