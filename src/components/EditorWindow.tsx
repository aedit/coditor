import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import FileExplorerWindow from './FileExplorer/FileExplorerWindow';
import EditorPane from './CodeEditor/EditorPane';
import EditorFooter from './EditorFooter/EditorFooter';
import { Context } from '../contexts/App.context';
import { useContext } from 'react';

const EditorWindow = () => {
  const { isLoading } = useContext(Context);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <ReflexContainer orientation="horizontal" className="w-full h-full">
        <ReflexElement>
          <ReflexContainer
            orientation="vertical"
            className="border border-gray-500 border-b-0"
          >
            <ReflexElement className="file-explorer" minSize={200} flex={0.2}>
              <FileExplorerWindow />
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="code-editor" minSize={200}>
              <EditorPane />
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>

        <ReflexElement
          flex={0.04}
          className="editor-footer px-2 flex items-center relative !overflow-visible border border-gray-500"
        >
          <EditorFooter />
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
};

export default EditorWindow;
