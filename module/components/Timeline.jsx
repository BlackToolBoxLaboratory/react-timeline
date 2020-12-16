import React from 'react';
import classnames from 'classnames';

import getStyle from '../utils/getStyle.js';
import formatCamelCase from '../utils/formatCamelCase.js';

const Timeline = React.forwardRef((props, ref) => {
  const { position = 'left', align = "start", nodeList = [], typeObj={} } = props;
  const styleObj = formatCamelCase(props.styleObj || {});

  return (
    <div ref={ref} className={classnames('btb-react-timeline', props.className, `timeline-position-${position}`, `timeline-align-${align}`)} style={getStyle(styleObj, ['btb-react-timeline', `timeline-position-${position}`, `timeline-align-${align}`])}>
      {nodeList.map((node, index) => {
        return <div className="timeline_node" style={getStyle(styleObj, ['timeline_node'])} key={`${Date.now()}_${index}`}>
          <div className="node_point" style={getStyle(styleObj, ['node_point'])}/>
          <div className="node_content" style={getStyle(styleObj, ['node_content'])}>
            {
              (typeof node.type !== 'undefined' && typeof typeObj[node.type] === 'function')?typeObj[node.type](node) : node
            }
          </div>
        </div>;
      })}
    </div>
  );
});

export default Timeline;