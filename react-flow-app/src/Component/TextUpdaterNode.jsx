import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

function TextUpdaterNode({ data }) {
    const onChange = useCallback((event) => {
        console.log(event.target.value); // Logs what the user types into the input box
    }, []);

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Text:</label>
                <input
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="nodrag" // Ensures you can type without dragging the node
                />
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle type="source" position={Position.Bottom} id="b" style={{ left: 10 }} />
        </>
    );
}

export default TextUpdaterNode;
