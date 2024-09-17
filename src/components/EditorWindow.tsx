import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import FileExplorer from './FileExplorer';
import CodeEditor from './CodeEditor';
import EditorFooter from './EditorFooter/EditorFooter';

const EditorWindow = () => {
  return (
    <div className="w-full h-full dark:border-gray-50 border-gray-800 border-2 rounded-md p-3 pb-1">
      <ReflexContainer orientation="horizontal" className="w-full h-full">
        <ReflexElement>
          <ReflexContainer orientation="vertical">
            <ReflexElement className="file-explorer" minSize={200} flex={0.2}>
              <FileExplorer />
            </ReflexElement>

            <ReflexSplitter />

            <ReflexElement className="code-editor" minSize={200}>
              <CodeEditor />
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>

        <ReflexElement
          flex={0.04}
          className="editor-footer flex items-center relative !overflow-visible"
        >
          <EditorFooter />
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
};

export default EditorWindow;
