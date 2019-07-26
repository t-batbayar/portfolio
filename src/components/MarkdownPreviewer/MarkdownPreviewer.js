import React from 'react';
import marked from 'marked';

import AnimatedPageWrapper from '../../containers/AnimatedPageWrapper';

import classes from './MarkdownPreviewer.css';
import Editor from './Editor/Editor';
import Previewer from './Previewer/Previewer';

class MarkdownPreviewer extends React.Component {

	state = {
		defaultValue: defaultValue
	}

	componentDidMount() {
		document.title = "Маркдаун тэмдэглэгээт хэл хувиргагч"
	}

	handleEditorChange = (e) => {
		const editorVal = e.target.value;
		this.setState(() => ({ defaultValue: editorVal }))
	}

	handleMarkdown = () => {
		const renderer = new marked.Renderer();
		renderer.link = (href, title, text) => `<a href='${ href }' title='${ text }' target='_blank'>${ text }</a>`

		marked.setOptions({
			headerIds: false,
			breaks: true
		})
		return marked(this.state.defaultValue, { renderer });
	}

	render() {
		return (
			<AnimatedPageWrapper>
				<div id="wrapper" className={ classes.MarkdownPreviewer }>
					<Editor handleEditorChange={ (e) => { this.handleEditorChange(e) } } defaultValue={ this.state.defaultValue } />
					<Previewer markdownedString={ this.handleMarkdown() } />
				</div>
			</AnimatedPageWrapper>
		)
	}
}

const defaultValue = `# Header 1
## Header
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
	if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
		return multiLineCode;
	}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
	- Some are bulleted.
		- With different indentation levels.
			- That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default MarkdownPreviewer;