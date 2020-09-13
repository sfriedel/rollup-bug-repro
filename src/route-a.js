import main from './main'
import shared from './shared'

export default function something() {
	return main('something' + shared())
}
