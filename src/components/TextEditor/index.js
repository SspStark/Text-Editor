import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {Button, Textarea} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderlined: false}

  toggleBold = () => this.setState(prevState => ({isBold: !prevState.isBold}))

  toggleItalic = () =>
    this.setState(prevState => ({isItalic: !prevState.isItalic}))

  toggleUnderline = () =>
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))

  render() {
    const {isBold, isItalic, isUnderlined} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderlined ? '#faff00' : '#f1f5f9'
    return (
      <div>
        <h1>Text Editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <ul>
          <li>
            <Button
              data-testid="bold"
              onClick={this.toggleBold}
              colorText={boldLogo}
            >
              <VscBold size={25} />
            </Button>
          </li>
          <li>
            <Button
              data-testid="italic"
              onClick={this.toggleItalic}
              colorText={italicLogo}
            >
              <GoItalic size={25} />
            </Button>
          </li>
          <li>
            <Button
              data-testid="underline"
              onClick={this.toggleUnderline}
              colorText={underlineLogo}
            >
              <AiOutlineUnderline size={25} />
            </Button>
          </li>
        </ul>
        <Textarea
          rows="5"
          isBold={isBold}
          isItalic={isItalic}
          isUnderlined={isUnderlined}
        />
      </div>
    )
  }
}

export default TextEditor
