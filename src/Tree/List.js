import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { treeClass } from '../styles'
import { empty } from '../utils/func'
import Node from './Node'

class List extends PureComponent {
  constructor(props) {
    super(props)

    this.bindLines = this.bindElement.bind(this, 'lines')
    this.bindElement = this.bindElement.bind(this, 'element')
    this.renderNode = this.renderNode.bind(this)
  }

  getKey(data, index) {
    const { id, keygen } = this.props
    if (typeof keygen === 'function') return keygen(data, id)
    else if (keygen) return data[keygen]
    return id + (id ? ',' : '') + index
  }

  bindElement(name, el) {
    this[name] = el
  }

  renderNode(child, index) {
    const {
      data, isRoot, expanded, keygen, line, className, ...other
    } = this.props
    const id = this.getKey(child, index)
    return (
      <Node
        {...other}
        data={child}
        id={id}
        index={index}
        key={id}
        line={line}
        keygen={keygen}
        listComponent={List}
      />
    )
  }

  render() {
    const { data, expanded, className } = this.props

    if (!expanded && !this.hasExpanded) return null

    this.hasExpanded = true

    return (
      <div
        className={className}
        ref={this.bindElement}
        onDrop={empty}
        onDragOver={empty}
        style={{ display: expanded ? 'block' : 'none' }}
      >
        { data.map(this.renderNode) }
      </div>
    )
  }
}

List.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  expanded: PropTypes.bool,
  id: PropTypes.string,
  isRoot: PropTypes.bool,
  keygen: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  line: PropTypes.bool,
  setLine: PropTypes.func,
}

List.defaultProps = {
  id: '',
  line: true,
  className: treeClass('children'),
}

export default List
