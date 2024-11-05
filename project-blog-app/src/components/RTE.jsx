import React from 'react'
import { Controller } from 'react-hook-form';
import { Editor } from "@tinymce/tinymce-react";

const RTE = ({
    name, control, label, defaultValue = ""
}) => {
    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1 text-orange-400 dark:text-orange-200'>
                    {label}
                </label>
            }

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                        init={{
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            branding: false,
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background-color:#1A202C; color:#F7F5F2; }'
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

export default RTE
