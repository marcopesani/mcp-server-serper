# Serper Search and Scrape MCP Server
[![smithery badge](https://smithery.ai/badge/@marcopesani/mcp-server-serper)](https://smithery.ai/server/@marcopesani/mcp-server-serper)

A TypeScript-based MCP server that provides web search and webpage scraping capabilities using the Serper API. This server integrates with Claude Desktop to enable powerful web search and content extraction features.

## Features

### Tools

- `google_search` - Perform web searches via Serper API
  - Rich search results including organic results, knowledge graph, "people also ask", and related searches
  - Supports region and language targeting
  - Optional parameters for location, pagination, time filters, and autocorrection
  
- `scrape` - Extract content from web pages
  - Get plain text and optional markdown content
  - Includes JSON-LD and head metadata
  - Preserves document structure

## Requirements

- Node.js >= 18
- Serper API key (set as `SERPER_API_KEY` environment variable)

## Development

Install dependencies:
```bash
npm install
```

Build the server:
```bash
npm run build
```

For development with auto-rebuild:
```bash
npm run watch
```

Run tests:
```bash
npm test                  # Run all tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage
npm run test:integration # Run integration tests
```

## Installation

### Installing via Smithery

To install Serper Search and Scrape for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@marcopesani/mcp-server-serper):

```bash
npx -y @smithery/cli install @marcopesani/mcp-server-serper --client claude
```

To use with Claude Desktop, add the server config:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`  
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "serper-search": {
      "command": "npx",
      "args": [
        "-y",
        "serper-search-scrape-mcp-server"
      ],
      "env": {
        "SERPER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Environment Variables

Create a `.env` file in the root directory:

```
SERPER_API_KEY=your_api_key_here
```

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.
