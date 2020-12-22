const app = require('express')()
const axios = require('axios')
const cors = require('cors')
const compiler = require('vue-template-compiler')
const encrypted = require('@dtinth/encrypted')()
const { parseFrontmatter } = require('@vuepress/shared-utils')
const md = require('@vuepress/markdown')
const markdown = md()
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')
const jwks = require('jwks-rsa')
const twemoji = require('twemoji')
const esbuild = require('esbuild')

markdown.use(require('markdown-it-footnote'))
markdown.renderer.render = (original =>
  function() {
    return twemoji.parse(original.apply(this, arguments))
  })(markdown.renderer.render)
markdown.use(markdown => {
  markdown.renderer.rules.link_open = (original =>
    function(tokens, idx, options, env, self) {
      const token = tokens[idx]
      const nextToken = tokens[idx + 1]
      if (nextToken && nextToken.type === 'text') {
        if (String(nextToken.content).startsWith('🔖')) {
          // https://github.com/aaronpk/webmention.io/blob/main/test/data/source.example.org/bookmark-of.html
          token.attrPush(['class', 'u-bookmark-of'])
        }
      }
      return original(tokens, idx, options, env, self)
    })(markdown.renderer.rules.link_open)
})

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dtinth.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'notes-backend',
  issuer: 'https://dtinth.us.auth0.com/',
  algorithms: ['RS256'],
  credentialsRequired: false
})

const { App } = require('@octokit/app')
const { Octokit } = require('@octokit/rest')
const githubApp = new App({
  id: 83405,
  privateKey: encrypted(`
    dGDjTHWQEXhGlZIuvL9xu6TRFL5ZuEKY.FBz4BTXj2IpdvN2lwvB8IiL8Yf+DXhXVy2q4Jag
    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
    xIvH1DMJKmmdHeO72mqZEQ9aJpFA=
  `)
})

const snapItKey = encrypted(`
  gvU23oOlDmr78OMyxOoxrfx+u4uXsb7K.3diL6SLwYXkNcwARhGvsEc2NhhUYEmfAf1frYtI
  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
  QQ3C6AnOvVe8A3yr2Ok86FlHY
`)

function fetchData(pageId) {
  if (pageId.startsWith('preview-')) {
    return fetchPreviewData(pageId.substr(8))
  } else {
    return fetchProdData(pageId)
  }
}

const installationId = encrypted(
  `EvSKGeZj/mOr8xM0onjmZwE9bKs0I5e9.YyzWnPp3VIRzlk3YGWQwLxjDSciQ7cLf`
)
const dataRepo = encrypted(
  `pNFKGNsMBYiEkKcuJmx+v6KZWC3MvGHM.C6beKnnHqZLD1huPAa2Js3H/l2rHKS1L64s0G84=`
)
const notesInfrastructureApiBase = encrypted(`
  cRJ7h+fnGiFaEFOjEuSreTgqEe+em8oM.F2AiEv+SC/IPYyiN3mvh5a7cmxr3A9/8jmiZF+5
  ipRUhzGGsjibuZ9PAHcKtL2SuBQ==
`)

async function fetchProdData(pageId) {
  const installationAccessToken = await githubApp.getInstallationAccessToken({
    installationId
  })
  const octokit = new Octokit({
    auth: installationAccessToken
  })
  const result = await octokit.repos.getContent({
    owner: 'dtinth',
    repo: dataRepo,
    path: String(pageId).replace(/\W/g, '') + '.md'
  })
  return {
    preview: false,
    source: Buffer.from(result.data.content, 'base64').toString()
  }
}

async function fetchPreviewData(jwt) {
  const response = await axios.get(
    notesInfrastructureApiBase + '/entry?jwt=' + encodeURIComponent(jwt)
  )
  return {
    source: response.data.data,
    preview: true
  }
}

app.use(cors())
app.use(jwtCheck, function(err, req, res, next) {
  if (err.code === 'invalid_token') return next()
  return next(err)
})

app.get('/entries/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const { source: src, preview } = await fetchData(id)
    const parseResult = parseFrontmatter(src)
    let frontmatter = parseResult.data
    let content = parseResult.content
    const protected =
      !preview &&
      !parseResult.data.public &&
      !(req.user && req.user.sub === 'github|193136')

    if (protected) {
      content = '(This entry is not yet published)'
      frontmatter = { system: 'unpublished' }
    }

    const {
      html,
      data: { hoistedTags, links },
      dataBlockString
    } = markdown.render(content, {
      frontmatter,
      relativePath: req.params.id + '.md'
    })

    const script = (hoistedTags || []).find(tag => tag.match(/^<script/i))
    let componentModule
    if (script) {
      const src = script
        .trim()
        .replace(/^<script[^>]*>/i, '')
        .replace(/<\/script>/i, '')
      const compiled = await esbuild.transform(src, {
        loader: 'ts',
        format: 'cjs'
      })
      componentModule = compiled.code
    }

    const template = `<div class="e-content">${html}</div>`
    const result = compiler.compile(template)
    res.json({
      frontmatter,
      render: result.render,
      staticRenderFns: result.staticRenderFns,
      dataBlockString,
      hoistedTags,
      componentModule,
      links,
      preview,
      screenshotToken: jsonwebtoken.sign(
        {
          url: `https://${process.env.VERCEL_URL}/${id}#og:image`,
          width: 900,
          height: 840,
          deviceScaleFactor: 2,
          waitUntil: 'networkidle0'
        },
        snapItKey,
        {
          algorithm: 'RS256',
          issuer: 'journal-web',
          noTimestamp: true
        }
      )
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: true })
  }
})

module.exports = app
