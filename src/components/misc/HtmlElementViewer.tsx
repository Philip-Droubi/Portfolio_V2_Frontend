import { getDir } from '@/utils/functions'

export default function HtmlElementViewer({ html }: { html: string }) {
    return (
        <div
            dir={getDir()}
            className="html-element"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
