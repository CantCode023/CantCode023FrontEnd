import React from 'react'
import { DiscussionEmbed } from 'disqus-react';

export default function Discussion() {
    const disqusShortname = "cantcodeportfoliowebsite"
    const disqusConfig = {
        url: "https://cantcode023.netlify.app",
        identifier: "discussions",
        title: "Discussions"
    }

    return (
        <div style={{minHeight: "80vh", marginTop: "6rem"}} className="container d-flex justify-content-center align-items-center">
            <DiscussionEmbed className="disquswidth" shortname={disqusShortname} config={disqusConfig}/>
        </div>
    )
}
