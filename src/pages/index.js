import React from "react"
import Link from "gatsby-link"
import {graphql} from "gatsby"

export default ({data}) => <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <h3>by {data.site.siteMetadata.author}</h3>
    <br/>
    <ul>
        {data.allFile.edges.map(({node}) =>
            <li>{node.relativePath}</li>
        )}
    </ul>

    <br/>
    <Link to="/page2">Page 2</Link>
    <br/>
    <Link to="/dir/page3">Page 3</Link>
</div>

export const query = graphql`
    query FirstQuery {
        site {
            siteMetadata {
                title
                author
            }
        },
        allFile {
            edges {
                node {
                    relativePath
                }
            }
        }
    }
`

