import { JoyuiMarkdown } from 'joyui-markdown';

const md = `
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
`;

const App = () => (
  <div className='App'>
    <JoyuiMarkdown>{md}</JoyuiMarkdown>
  </div>
);
export default App;
