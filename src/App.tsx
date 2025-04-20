import { useState, useEffect } from 'react'

export default function App() {
    const [html, setHtml] = useState('<h1>Hello world</h1>')
    const [css, setCss] = useState('h1 { color: zinc; text-align: center; }')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            const source = `
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>${html}</body>
        </html>`
            setSrcDoc(source)
        }, 300)

        return () => clearTimeout(timeout)
    }, [html, css])

    return (
        <div className='min-h-screen bg-zinc-900 text-white font-mono p-4 md:p-6'>
            {/* Code Editor Area */}
            <div className='flex flex-col md:flex-row gap-6'>
                {/* HTML Editor */}
                <div className='flex-1'>
                    <label className='block text-sm mb-1 text-zinc-400'>HTML</label>
                    <textarea
                        className='w-full h-48 md:h-60 p-3 bg-zinc-800 border border-zinc-700 rounded resize-none outline-none focus:ring-2 focus:ring-green-500'
                        value={html}
                        onChange={(e) => setHtml(e.target.value)}
                    />
                </div>

                {/* CSS Editor */}
                <div className='flex-1'>
                    <label className='block text-sm mb-1 text-zinc-400'>CSS</label>
                    <textarea
                        className='w-full h-48 md:h-60 p-3 bg-zinc-800 border border-zinc-700 rounded resize-none outline-none focus:ring-2 focus:ring-blue-500'
                        value={css}
                        onChange={(e) => setCss(e.target.value)}
                    />
                </div>
            </div>

            {/* Preview Section */}
            <div className='mt-6'>
                <label className='block text-sm mb-1 text-zinc-400'>Preview</label>
                <div className='w-full h-[620px] bg-white border border-zinc-700 rounded overflow-hidden'>
                    <iframe
                        title='preview'
                        sandbox='allow-scripts'
                        srcDoc={srcDoc}
                        className='w-full h-full'
                    />
                </div>
            </div>
        </div>
    )
}
