import Editor from './components/Editor'

function App() {
  return (
    <>
      <div>
          <div className="pane top-pane">
            <Editor />
            <Editor />
            <Editor />
          </div>
          <div className="pane"></div>
          <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder='0'
          width='100%'
          height='100%'
          />
      </div>
    </>
  );
}

export default App;
