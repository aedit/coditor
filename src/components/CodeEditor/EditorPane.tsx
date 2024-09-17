import { Editor } from '@monaco-editor/react';
import WorksheetsTab from './WorksheetsTab';
import { useContext, useState } from 'react';
import { Context } from '../../contexts/App.context';
import { ThemeContext } from '../../contexts/Theme/Theme.context';

const EditorPane = () => {
  const { worksheets, activeWorksheet, openFile } = useContext(Context);
  const { appTheme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full flex flex-col">
      <WorksheetsTab
        worksheets={worksheets}
        currentWorksheet={activeWorksheet}
        onChange={openFile}
      />
      <Editor
        height="100%"
        className="flex-1"
        value={(activeWorksheet?.editorContent as string) || ''}
        defaultValue="Start Typing..."
        defaultLanguage="python"
        {...(appTheme === 'dark' && { theme: 'vs-dark' })}
      />
    </div>
  );
};

export default EditorPane;
