import React, { useCallback, useState } from 'react';
import {
  ReactFlow, Background, Controls, applyNodeChanges,
  applyEdgeChanges, addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import DeleteEdgeDrop from './Component/DeleteEdgeComp';

const App = () => {
  const [nodes, setNodes] = useState([
    { id: 'node-1', position: { x: 0, y: 0 }, data: { label: 'Node 1' }, type: 'default' },
    { id: 'node-2', position: { x: 0, y: 200 }, data: { label: 'Node 2' }, type: 'output' },
    { id: 'node-3', position: { x: 200, y: 200 }, data: { label: 'Node 3' }, type: 'output' },
  ]);

  const [edges, setEdges] = useState([
    { id: 'edge-1', source: 'node-1', target: 'node-2', label: 'Edge 1' },
    { id: 'edge-2', source: 'node-1', target: 'node-3', label: 'Edge 2' },
  ]);

  const handleEdgeDelete = (id) => {
    setEdges((eds) => eds.filter((edge) => edge.id !== id));
  };

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <DeleteEdgeDrop />
        {/* <ReactFlow
        nodes={nodes}
        edges={edges.map((edge) => ({
          ...edge,
          label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {edge.label}
              <button
                style={{
                  marginLeft: 8,
                  backgroundColor: '#FF5A5F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering edge click
                  handleEdgeDelete(edge.id);
                }}
              >
                Delete
              </button>
            </div>
          ),
        }))}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={{ backgroundColor: '#B8CEFF' }}
      >
        <Background />
        <Controls />
      </ReactFlow> */}
    </div>
  );
};

export default App;


// add node, edges (using a button add nodes and by draggin a edge should be created, on click a normal form should open to update data)
// updatable nodes and edges,


// Cybernauts Development Assignment: 
// User Management System 
// Description 
// Your task is to implement a full-stack application with a CRUD API backend 
// using a database, and a React frontend featuring interactive user visualisation 
// using react-flow (link to lib). 
// Technical Requirements 
// Backend Requirements 
// ● The task can be implemented in Typescript or Python or JAVA 
// ● Use Node.js v22+ LTS (Express) or FAST API or Spring Boot 
// ● Prefer asynchronous API whenever possible 
// ● Upload your code to GitHub, GitLab, BitBucket, or similar hosting 
// services with full commit history 
// ● Requirements 1-6 are mandatory 
// ● Complete Requirements 7-10 for bonus points 
// Frontend Requirements 
// ● Use React v18+ 
// ● Implement using TypeScript 
// ● Use the react-flow library for visualisation 
// ● Implement proper error handling and loading states 
// ● Follow React best practices and component organisation 
// Timelines 
// 3 Days from the day of receiving the task 
// Implementation Details 
 
// Backend Implementation (API) 
 
// 1. Implement endpoint api/users with all CRUD operations: 
// ➔    GET  api/users - get all users (200) 
// ➔    POST  api/users - create new user (201, 400) 
// ➔    PUT  api/users/{userId} - update user (200, 400, 404) 
// ➔    DELETE  api/users/{userId} - delete user (204, 400, 404) 
 
// 2. User objects should have: 
// ● id - unique identifier (string, uuid) generated on the server side 
// ● username - user's name (string, required) 
// ● age - user's age (number, required) 
// ● hobbies - user's hobbies (array of strings or empty array, required) 
 
// 3. Handle non-existing endpoints (404) 
 
// 4. Implement proper error handling (500) 
 
// 5. Use .env for configuration (eg. PORT) 
 
// Frontend Implementation 
 
// 6. Create a React application with the following features: 
 
//    a. Main Visualization Area: 
//    - Implement react-flow to display users as nodes 
//    - Each user node should display the username and age 
//    - Connected hobbies should be displayed as child nodes 
 
//    b. Sidebar Component: 
//    - Display a list of available hobby categories 
//    - Make hobbies draggable 
//    - Allow dropping hobbies onto user nodes to add them 
//    - Provide a search/filter for hobbies 
 
//    c. User Management: 
//    - Form to create/ edit users 
//    - Validation for required fields 
//    - Success/ error notifications 
//    - Confirmation dialogues for deletions 
 
//    d. State Management: 
//    - Implement proper state management for users and hobbies 
//    - Handle loading states and errors 
//    - Maintain consistency between the backend and frontend 
 
// Bonus Points 
 
// 7. Development Modes: 
//    - Development mode using nodemon/ts-node-dev (npm script start:dev) 
//    - Production mode with build process (npm script start:prod) 
 
// 8. API Tests cases (minimum 3 scenarios) 
 
// 9. Horizontal Scaling: 
//    - Implement load balancer using Node.js Cluster API or similar ways in 
// (Python or JAVA) 
//    - Maintain a consistent state across workers 
 
// 10. Frontend Bonus Features: 
//     - Implement Redux Toolkit with proper slice organization for state      
// management 
//     - Add undo/ redo functionality for node movements and connections 
//     - Implement custom node types with different visualizations based on user 
// properties 
 
// Evaluation Criteria 
 
// 1. Code Quality: 
//    - Clean, maintainable code 
//    - Proper error handling 
//    - TypeScript usage 
//    - Component organisation 
 
// 2. Functionality: 
//    - All CRUD operations working correctly 
//    - Smooth integration between frontend and backend 
//    - Proper state management 
//    - Responsive design 
 
// 3. User Experience: - Intuitive drag-and-drop interface - Smooth animations - Clear feedback for user actions - Proper loading states 
// 4. Technical Implementation: - Effective use of react-flow - Proper state management implementation - API design and implementation - Error handling and edge cases 
// #Submission Guidelines 
// 1. Provide GitHub/ GitLab repository with: - Complete source code - README with setup instructions - .env example file - API Documentation - Any additional documentation for bonus features 
// 2. Include screenshots or GIFs demonstrating the application's functionality 
// 3. Deploy a live demo (optional but recommended) 

// i need to create this project using MERN and as here mention i need to use redux, reacthookform, reactflow for frontend 

// so i this is how i am thinking about the frontend 
// the screen will be distributted with 20% and 70% where in 
// In 20% there will be the list of all the created flows and on clicking on them the corresponding react-flow will displayed to the 70% of the screen 
// for creating a new react-flow there must be a button which will help to create new react flow also 
// for each list there should be a button to edit the name and delete that react flow, 

// now in 70% area of the screen
// i need to add a form which will help to generate a new node of react flow and that form should be created with react-hook-form 
// even after creating a node it should be deletable and editable mean i must have the capability to delte that node and edit the title of it for connecting the edge and disconnecting them
// i want to use  onReconnect, onReconnectStart and onReconnectEnd handlers. function from react-flow so that there shold be no overhead of extra code 

// now if any changes need free to do  