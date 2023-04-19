"use client";

import { FormattedPost } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Pencil, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type MenuBarProps = {
  editor: Editor | null;
};

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={
          editor.isActive("code")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        code
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        h1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        h3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        h4
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        h5
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 })
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        h6
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        bullet list
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        ordered list
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        code block
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        blockquote
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={
          editor.isActive("blockquote")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        horizontal rule
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={
          editor.isActive("blockquote")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        hard break
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={
          editor.isActive("blockquote")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        undo
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={
          editor.isActive("blockquote")
            ? "bg-background text-foreground p-1 rounded-md"
            : "p-1"
        }
      >
        redo
      </button>
    </>
  );
};

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");

  const handleOnChangeContent = ({ editor }: any) => {
    // If content inside is empty we are going to make sure there is no error
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  // MARK: TipTap Editor Config
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
  });

  const handleSubmit = () => console.log("Handling Submit");

  return (
    <div className="prose w-full max-w-full mb-10">
      <h5 className="text-foreground">{`Home > ${post.category} > ${post.title}`}</h5>

      <div className="flex justify-between items-center">
        <Badge>{post.category}</Badge>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3 mb-2">
              <Button
                variant={"destructive"}
                onClick={() => handleIsEditable(!isEditable)}
              >
                <X className="h-4 w-4" />
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              variant={"ghost"}
              onClick={() => handleIsEditable(!isEditable)}
            >
              <Pencil className="h-4 w-4 mr-2" />
              Make Edit
            </Button>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <>
          {isEditable ? (
            <div>
              <Textarea
                placeholder="Title"
                onChange={(e) =>
                  console.log("Change title Error", e.target.value)
                }
                value={title}
              />
            </div>
          ) : (
            <h3 className="text-foreground text-2xl font-bold">{post.title}</h3>
          )}

          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-foreground text-xs">{post.createdAt}</h6>
          </div>
        </>

        {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.title}
            src={post.image}
            sizes="
          (max-width: 640px) 100vw,
          (max-width: 768px) 85vw,
          (max-width: 1060px) 75vw,
          60vw
          "
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Editor */}
        <div
          className={
            isEditable
              ? "border-2 rounded-md bg-background text-foreground p-3"
              : "w-full max-w-full"
          }
        >
          {isEditable && (
            <>
              <MenuBar editor={editor} />
              <Separator />
            </>
          )}
          <EditorContent editor={editor} />
        </div>

        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Content;
