'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect } from 'react'

interface DocumentEditorProps {
  content?: string
  onChange?: (content: string) => void
  placeholder?: string
}

export function DocumentEditor({
  content = '',
  onChange,
  placeholder = 'Start writing...'
}: DocumentEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-[720px] mx-auto px-40 py-40 focus:outline-none min-h-[calc(100vh-64px)]',
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
  })

  return (
    <div className="w-full h-full bg-background">
      <EditorContent editor={editor} />
    </div>
  )
}
