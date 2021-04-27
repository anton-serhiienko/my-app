
import NetworkJSApp from './App';
import ReactDOM from 'react-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NetworkJSApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
