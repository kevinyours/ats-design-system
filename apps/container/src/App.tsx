import { lazy } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const InterviewerApp = lazy(() => import("interviewerApp/App"));

function App() {
	return <InterviewerApp />;
}

export default App;
