"use client";

import { FormattedPost } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Pencil, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
dayjs.extend(relativeTime);

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
  // MARK: States
  // IsEditable
  const [isEditable, setIsEditable] = useState<boolean>(false);

  // Title
  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);

  // Content
  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");
  const [tempContent, setTempContent] = useState<string>(content);

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    // If content inside is empty we are going to make sure there is no error
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  const handleEnableEdit = () => {
    handleIsEditable(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || "");
  };

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
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
    editorProps: {
      attributes: {
        class:
          "prose prose-headings:text-foreground focus:outline-none w-full bg-background text-foreground",
      },
    },
    editable: isEditable,
  });

  // MARK: NextJS makes it easy, the syntax has to be perfect though: `api/post/[id]/route.ts`
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation checks
    if (title === "") setTitleError("This field is required.");
    if (editor?.isEmpty) setContentError("This field is required.");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );
    const data: FormattedPost = await response.json();

    // Reset values
    handleIsEditable(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  return (
    <div className="w-full max-w-full mb-10">
      {/* MARK: CATEGORY AND EDIT */}
      <h5 className="text-foreground">{`Home > ${post.category} > ${title}`}</h5>
      <div className="flex items-center justify-between">
        <Badge>{post.category}</Badge>
        <div className="">
          {isEditable ? (
            <div className="flex justify-between gap-3 mb-2">
              <Button variant={"destructive"} onClick={handleCancelEdit}>
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          ) : (
            <Button variant={"ghost"} onClick={handleEnableEdit}>
              <Pencil className="w-4 h-4 mr-2" />
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
                onChange={handleOnChangeTitle}
                value={title}
              />
            </div>
          ) : (
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          )}

          <div className="flex gap-3">
            <h5 className="text-xs font-semibold">By {post.author}</h5>
            <h6 className="text-xs text-foreground">
              {dayjs(post.createdAt).fromNow()}.
            </h6>
          </div>
        </>

        {/* MARK: IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={title}
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

        {/* MARK: Editor */}
        <div
          className={
            isEditable
              ? "border-2 rounded-md bg-background text-foreground p-3"
              : "w-full max-w-full text-foreground prose-headings:text-foreground"
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

        {/* MARK: SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end mt-2">
            <Button>Submit</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Content;
