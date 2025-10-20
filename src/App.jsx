import React, { useState } from 'react';
import { Search, Bell, User, Plus, ChevronRight, Calendar, FileText, CheckCircle, Clock, AlertCircle, MessageSquare, Upload, Download, Filter, MoreVertical, Check, X, Eye, Trash2, Edit, Star, TrendingUp, Users, Zap, Award, Server, Database, Shield, Settings, Activity, Send, Key, Minimize2 } from 'lucide-react';

const RPPTDesignSystem = () => {
  // --- Global State (Reverted to production defaults) ---
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('milestones');
  const [notifications, setNotifications] = useState(3);
  const [hoveredCard, setHoveredCard] = useState(null);

  // --- Sample Data (Upgraded to support isolated project views) ---

  const projectData = {
    // Project 1: Machine Learning in Healthcare (ID: 1)
    1: {
      details: { id: 1, title: 'Machine Learning in Healthcare', progress: 65, status: 'In Progress', supervisor: 'Dr. Rahman', dueDate: '2025-12-15', milestones: 8, completed: 5, color: 'from-blue-500 to-cyan-400', icon: '🤖' },
      milestones: [
        { id: 101, title: 'Literature Review', status: 'completed', dueDate: '2025-09-15', owner: 'Ahnaf', description: 'Comprehensive review of existing ML healthcare applications', documents: 5 },
        { id: 102, title: 'Methodology Design', status: 'completed', dueDate: '2025-09-30', owner: 'Mahmudul', description: 'Design research methodology and data collection strategy', documents: 3 },
        { id: 103, title: 'Data Collection', status: 'in-progress', dueDate: '2025-10-18', owner: 'Nafiz', description: 'Gather and preprocess healthcare datasets', documents: 2 },
        { id: 104, title: 'Implementation', status: 'pending', dueDate: '2025-11-15', owner: 'Raiyana', description: 'Build ML models and system architecture', documents: 0 },
      ],
      documents: [
        { name: 'Literature_Review_v3.pdf', size: '2.4 MB', date: '2025-09-15', versions: 3, status: 'approved', milestone: 'Literature Review' },
        { name: 'Methodology_Design_v2.docx', size: '1.8 MB', date: '2025-09-30', versions: 2, status: 'approved', milestone: 'Methodology Design' },
      ],
      comments: [
        { id: 1001, author: 'Dr. Rahman', time: '1 day ago', text: 'Please ensure ethical clearance documents are uploaded before proceeding to data collection.' },
        { id: 1002, author: 'Ahnaf', time: '5 hours ago', text: '@Dr. Rahman, understood. Uploading the signed form now.' },
      ]
    },
    // Project 2: Blockchain Security Analysis (ID: 2)
    2: {
      details: { id: 2, title: 'Blockchain Security Analysis', progress: 40, status: 'In Progress', supervisor: 'Dr. Ahmed', dueDate: '2025-11-30', milestones: 6, completed: 2, color: 'from-purple-500 to-pink-400', icon: '🔐' },
      milestones: [
        { id: 201, title: 'Literature Review (B)', status: 'completed', dueDate: '2025-10-01', owner: 'Mahmudul', description: 'Analysis of existing blockchain protocols.', documents: 2 },
        { id: 202, title: 'Protocol Simulation', status: 'in-progress', dueDate: '2025-11-15', owner: 'Nafiz', description: 'Setting up simulation environment and initial testing.', documents: 1 },
      ],
      documents: [
        { name: 'Initial_Proposal_v1.pdf', size: '1.2 MB', date: '2025-08-20', versions: 1, status: 'approved', milestone: 'Initial Planning' },
      ],
      comments: [
        { id: 2001, author: 'Dr. Ahmed', time: '1 week ago', text: 'The simulation environment design looks solid. Proceed to testing phase.' },
      ]
    },
    // Project 3: IoT Smart Agriculture System (ID: 3)
    3: {
      details: { id: 3, title: 'IoT Smart Agriculture System', progress: 85, status: 'Review', supervisor: 'Dr. Khan', dueDate: '2025-10-20', milestones: 10, completed: 9, color: 'from-green-500 to-emerald-400', icon: '🌱' },
      milestones: [
        { id: 301, title: 'Sensor Integration', status: 'completed', dueDate: '2025-09-01', owner: 'Raiyana', description: 'Installation and testing of all field sensors.', documents: 4 },
        { id: 302, title: 'Final System Testing', status: 'pending', dueDate: '2025-10-20', owner: 'Imjam', description: 'Final comprehensive system validation.', documents: 0 },
      ],
      documents: [
        { name: 'System_Architecture_v2.docx', size: '1.8 MB', date: '2025-09-10', versions: 2, status: 'approved', milestone: 'Architecture Design' },
        { name: 'Final_Report_Draft.pdf', size: '5.2 MB', date: '2025-10-18', versions: 1, status: 'review', milestone: 'Documentation' },
      ],
      comments: [
        { id: 3001, author: 'Dr. Khan', time: '2 days ago', text: 'Final report draft looks good. Need to check the appendix for sensor calibration logs.' },
      ]
    },
  };

  // Convert dictionary into an array for easy mapping in the dashboard
  const projects = Object.values(projectData).map(p => p.details);

  // Helper function to get project-specific data
  const getProjectData = (projectId) => projectData[projectId];

  // Data from SRS Feasibility Analysis Section 4.3 and 4.4
  const strategicAnalysisData = {
    financial: [
      { year: 1, cashFlow: -27522.94, accumulated: -27522.94 },
      { year: 2, cashFlow: -16833.60, accumulated: -44356.54 },
      { year: 3, cashFlow: -1544.37, accumulated: -45900.91 },
      { year: 4, cashFlow: 5667.40, accumulated: -40233.51 },
      { year: 7, cashFlow: 9846.62, accumulated: -16136.09 },
      { year: 8, cashFlow: 49182.90, accumulated: 33046.81 },
    ],
    swot: [
      { type: 'Strength', title: 'Centralized Artifacts', description: 'Consolidates all project artifacts into a structured repository, ensuring a single source of truth.', color: 'bg-green-100 text-green-800 border-green-300' },
      { type: 'Weakness', title: 'Adoption Challenges', description: 'Requires a cultural shift from familiar tools (Email, Drive) and needs initial training for staff and students.', color: 'bg-red-100 text-red-800 border-red-300' },
      { type: 'Opportunity', title: 'LMS/Repository Integration', description: 'Significant potential for expansion by integrating with existing university LMS and research repositories.', color: 'bg-blue-100 text-blue-800 border-blue-300' },
      { type: 'Threat', title: 'Competing Platforms', description: 'Existing systems (LMS modules, project tools) may limit adoption; resistance to change is a key threat.', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
    ]
  };

  // Sample data for supervisor review (used on Supervisor Dashboard)
  const pendingReviews = [
    { id: 1, student: 'Ahnaf Abid Shan', project: 'Machine Learning in Healthcare', document: 'Literature Review v3', submitted: '2 days ago', priority: 'high', avatar: '🧑‍💻', projectId: 1, docId: 101, docName: 'Literature_Review_v3.pdf' },
    { id: 2, student: 'Mahmudul Hasan', project: 'Blockchain Security', document: 'Methodology Design', submitted: '1 day ago', priority: 'medium', avatar: '👨‍💻', projectId: 2, docId: 201, docName: 'Initial_Proposal_v1.pdf' },
    { id: 3, student: 'Nafiz Imtiaz', project: 'IoT Agriculture', document: 'Implementation Report', submitted: '5 hours ago', priority: 'high', avatar: '📊', projectId: 3, docId: 302, docName: 'Final_Report_Draft.pdf' }
  ];

  // --- Shared Components ---
  const StatCard = ({ icon: Icon, label, value, color, emoji }) => (
    <div
      className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 cursor-pointer group relative overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110 group-hover:rotate-12`}>
          <span className="text-2xl">{emoji}</span>
        </div>
        <span className="text-4xl font-black text-gray-900 group-hover:scale-125 transition-transform">{value}</span>
      </div>
      <p className="text-gray-600 font-bold relative z-10">{label}</p>
    </div>
  );

  // --- Login Page ---
  const LoginPage = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden flex items-center justify-center p-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
          <div className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
        </div>
        <div className="max-w-md w-full relative z-10">
          {/* Floating Logo */}
          <div className="text-center mb-8 animate-float">
            <div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl mb-4 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className={`text-4xl font-black text-white transition-transform duration-300 ${isHovered ? 'scale-125 rotate-12' : ''}`}>R</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Research Portal</h1>
            <p className="text-blue-200 text-lg">Project Progress Tracker</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
          {/* Login Card with glassmorphism */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Welcome Back</h2>

            <div className="space-y-4">
              <div className="group">
                <label className="block text-sm font-semibold text-blue-100 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@university.edu"
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all group-hover:bg-white/15"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-semibold text-blue-100 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all group-hover:bg-white/15"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="rounded border-white/20 bg-white/10 text-cyan-500 mr-2" />
                  <span className="text-blue-100 group-hover:text-white transition">Remember me</span>
                </label>
                <a href="#" className="text-cyan-300 hover:text-cyan-200 font-semibold transition">Forgot password?</a>
              </div>
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-2xl font-bold hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                Sign In ✨
              </button>
              <div className="text-center text-sm text-blue-100">
                Don't have an account? <a href="#" className="text-cyan-300 font-bold hover:text-cyan-200 transition">Contact Admin</a>
              </div>
            </div>
          </div>
          {/* Role selector */}
          <div className="mt-6 flex gap-3 justify-center">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold hover:from-blue-400 hover:to-cyan-400 transform hover:scale-105 transition-all shadow-lg"
            >
              👨‍🎓 Student
            </button>
            <button
              onClick={() => setCurrentPage('supervisor')}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:from-purple-400 hover:to-pink-400 transform hover:scale-105 transition-all shadow-lg"
            >
              👨‍🏫 Supervisor
            </button>
            <button
              onClick={() => setCurrentPage('admin')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-gray-600 text-white rounded-2xl font-bold hover:from-indigo-400 hover:to-gray-500 transform hover:scale-105 transition-all shadow-lg"
            >
              ⚙️ Admin
            </button>
          </div>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  };

  // --- Create User Page (Admin Feature) ---
  const CreateUserPage = () => {
    const [userForm, setUserForm] = useState({ name: '', email: '', role: 'student', id: '' });

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setUserForm(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const message = `Account Created:\nName: ${userForm.name}\nRole: ${userForm.role}\nID: ${userForm.id}\n\nReturning to Admin Dashboard.`;
      console.log(message);
      setCurrentPage('admin');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 p-8">
        <header className="max-w-xl mx-auto mb-8 flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('admin')}
            className="p-3 bg-white rounded-2xl shadow-lg hover:bg-gray-100 transition-all group"
          >
            <ChevronRight className="w-6 h-6 text-indigo-600 rotate-180" />
          </button>
          <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Create New Account
          </h1>
        </header>

        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-2xl border-4 border-indigo-200/50">
          <p className="text-gray-600 mb-6 font-semibold">Provision a new user account for the Research Portal.</p>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
              <input type="text" id="name" required value={userForm.name} onChange={handleInputChange}
                placeholder="Ahnaf Abid Shan"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
              <input type="email" id="email" required value={userForm.email} onChange={handleInputChange}
                placeholder="name.email@university.edu"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>

            {/* Role and ID */}
            <div className="grid grid-cols-2 gap-4">
              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-sm font-bold text-gray-900 mb-2">User Role</label>
                <select id="role" required value={userForm.role} onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                >
                  <option value="student">Student 👨‍🎓</option>
                  <option value="supervisor">Supervisor 👨‍🏫</option>
                  <option value="admin">Administrator ⚙️</option>
                </select>
              </div>

              {/* ID */}
              <div>
                <label htmlFor="id" className="block text-sm font-bold text-gray-900 mb-2">Student/Faculty ID</label>
                <input type="text" id="id" required value={userForm.id} onChange={handleInputChange}
                  placeholder="e.g., 0112310423"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
              </div>
            </div>

            {/* Action */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-2xl font-black text-lg hover:from-indigo-500 hover:to-purple-500 transition-all transform hover:scale-[1.01] shadow-xl flex items-center justify-center gap-2"
            >
              <Key className="w-5 h-5" />
              Generate Password & Create Account
            </button>
          </form>
        </div>
      </div>
    );
  };

  // --- Create Project Page ---
  const CreateProjectPage = () => {
    // Mock data for supervisors and templates based on your SRS
    const mockSupervisors = ['Dr. Rahman', 'Dr. Ahmed', 'Dr. Khan', 'Professor Ali'];
    const mockTemplates = ['Standard Thesis (12 Milestones)', 'Capstone Project (8 Milestones)', 'Short Research Paper (5 Milestones)'];

    // State for controlled components
    const [projectForm, setProjectForm] = useState({
      title: '',
      description: '',
      supervisor: '',
      template: ''
    });

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setProjectForm(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // In a real app, form data would be validated and sent to Firestore.
      const message = `Project Proposal Submitted:\nTitle: ${projectForm.title}\nSupervisor: ${projectForm.supervisor}\nTemplate: ${projectForm.template}\n\nReturning to dashboard.`;
      console.log(message); // Log to console instead of alert
      setCurrentPage('dashboard');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-8 flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="p-3 bg-white rounded-2xl shadow-lg hover:bg-gray-100 transition-all group"
          >
            <ChevronRight className="w-6 h-6 text-blue-600 rotate-180" />
          </button>
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Start New Project 🚀
          </h1>
        </header>

        {/* Project Form Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-2xl border-4 border-blue-200/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Title */}
            <div>
              <label htmlFor="title" className="block text-xl font-bold text-gray-900 mb-2">Project Title</label>
              <input
                type="text"
                id="title"
                placeholder="e.g., Blockchain Security Analysis"
                required
                value={projectForm.title}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all text-lg"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-xl font-bold text-gray-900 mb-2">Detailed Description</label>
              <textarea
                id="description"
                rows="4"
                placeholder="Describe the problem, methodology, and expected outcomes..."
                required
                value={projectForm.description}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all text-lg resize-none"
              ></textarea>
            </div>

            {/* Supervisor & Template Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Supervisor */}
              <div>
                <label htmlFor="supervisor" className="block text-xl font-bold text-gray-900 mb-2">Select Supervisor</label>
                <select
                  id="supervisor"
                  required
                  value={projectForm.supervisor}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none text-lg"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="" disabled>Choose a faculty member</option>
                  {mockSupervisors.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Template */}
              <div>
                <label htmlFor="template" className="block text-xl font-bold text-gray-900 mb-2">Milestone Template</label>
                <select
                  id="template"
                  required
                  value={projectForm.template}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border-2 border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none text-lg"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="" disabled>Select a standard structure</option>
                  {mockTemplates.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Timeline Suggestion (Mock) */}
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg text-yellow-800 font-semibold">
                <p className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5"/>
                    Selecting a template will automatically generate **milestones** and **due dates** for your project.
                </p>
            </div>

            {/* Submission Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-black text-xl hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-[1.01] shadow-xl"
            >
              Submit Project Proposal & Get Started
            </button>
          </form>
        </div>
      </div>
    );
  };

  // --- Upload Document Page (Project Feature) ---
  const UploadDocumentPage = () => {
    // Note: In a real app, this page would receive the projectId/milestoneId
    const [file, setFile] = useState(null);
    const [milestone, setMilestone] = useState('');
    const project = getProjectData(selectedProject?.id);

    const handleFileChange = (e) => setFile(e.target.files[0]);
    const handleMilestoneChange = (e) => setMilestone(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file || !milestone) {
            console.log("Please select a file and a milestone.");
            return;
        }
        const message = `File submitted for project ${selectedProject?.title}:\nFile: ${file.name}\nMilestone: ${milestone}\n\nReturning to project details.`;
        console.log(message);
        setCurrentPage('project-detail');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-8">
        <header className="max-w-xl mx-auto mb-8 flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('project-detail')}
            className="p-3 bg-white rounded-2xl shadow-lg hover:bg-gray-100 transition-all group"
          >
            <ChevronRight className="w-6 h-6 text-blue-600 rotate-180" />
          </button>
          <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Upload Deliverable
          </h1>
        </header>

        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-2xl border-4 border-cyan-200/50">
            <p className="text-gray-600 mb-6 font-semibold">Submitting for Project: <strong className="text-gray-900">{selectedProject?.title}</strong></p>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Milestone Selection */}
            <div>
              <label htmlFor="milestone" className="block text-sm font-bold text-gray-900 mb-2">Target Milestone</label>
              <select id="milestone" required value={milestone} onChange={handleMilestoneChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
              >
                <option value="" disabled>Select a milestone</option>
                {project?.milestones.map((m) => (
                    <option key={m.id} value={m.title} disabled={m.status === 'completed'}>
                        {m.title} ({m.status === 'completed' ? 'Completed' : m.status.charAt(0).toUpperCase() + m.status.slice(1)})
                    </option>
                ))}
              </select>
            </div>

            {/* File Input */}
            <div>
              <label htmlFor="file" className="block text-sm font-bold text-gray-900 mb-2">Select Document File (PDF, DOCX, Code)</label>
              <input type="file" id="file" required onChange={handleFileChange}
                className="w-full text-gray-700 py-3 px-4 bg-gray-50 rounded-xl border-2 border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-300"
              />
            </div>

            {/* Submission Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-2xl font-black text-lg hover:from-blue-500 hover:to-cyan-500 transition-all transform hover:scale-[1.01] shadow-xl flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Upload & Create New Version
            </button>
          </form>
        </div>
      </div>
    );
  };

  // --- Review Submission Page (Supervisor Feature) ---
  const ReviewSubmissionPage = () => {
    // Mock review data for the purpose of the page
    const reviewTarget = pendingReviews.find(r => r.id === 3) || pendingReviews[0];
    const project = getProjectData(reviewTarget.projectId);
    const [commentText, setCommentText] = useState('');

    const handleReviewAction = (action) => {
        console.log(`SUPERVISOR ACTION: ${action} for ${reviewTarget.docName} (Project ${project.details.title})`);
        setCurrentPage('supervisor'); // Return to supervisor dashboard after action
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <header className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPage('supervisor')}
              className="p-3 bg-white rounded-2xl shadow-lg hover:bg-gray-100 transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-purple-600 rotate-180" />
            </button>
            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Review Submission
            </h1>
          </div>
          <div className="flex gap-3">
             <button
              onClick={() => handleReviewAction('REQUEST REVISION')}
              className="px-6 py-3 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <AlertCircle className="w-5 h-5" /> Request Revision
            </button>
            <button
              onClick={() => handleReviewAction('APPROVE')}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold hover:from-green-500 hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Check className="w-5 h-5" /> Approve Submission
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
            {/* Document Viewer (Left 2/3) */}
            <div className="col-span-2 space-y-6">
                <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg min-h-[500px]">
                    <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600"/> Document Viewer: <span className="font-medium text-purple-600">{reviewTarget.docName}</span>
                    </h2>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-500">
                        <Minimize2 className="w-12 h-12 mx-auto mb-3"/>
                        <p>Document preview for inline commenting loads here.</p>
                        <p className="text-sm">(Mock viewing area)</p>
                    </div>
                </div>
            </div>

            {/* Review & Feedback (Right 1/3) */}
            <div className="col-span-1 space-y-6">
                <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
                    <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-600"/> Submission Details
                    </h2>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Project: <span className="font-bold text-gray-900">{project.details.title}</span></p>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Student: <span className="font-bold text-gray-900">{reviewTarget.student}</span></p>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Submitted: <span className="font-bold text-gray-900">{reviewTarget.submitted}</span></p>
                    <p className="text-sm font-semibold text-gray-600">Priority: <span className={`font-bold ${reviewTarget.priority === 'high' ? 'text-red-600' : 'text-orange-600'}`}>{reviewTarget.priority}</span></p>
                </div>

                <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
                    <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-blue-600"/> Global Feedback
                    </h2>
                    <textarea
                      placeholder="Add overall comments, feedback, or general revision requests here."
                      rows="6"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 resize-none text-sm"
                    ></textarea>
                    <button
                      onClick={() => console.log(`Feedback submitted: ${commentText}`)}
                      className="mt-3 w-full py-2 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition"
                    >
                      Save Draft Comment
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
  };

  // --- Export Page (Student/Project Feature) ---
  const ExportProjectPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-8 flex items-center justify-center">
      <div className="max-w-lg w-full text-center bg-white rounded-3xl p-10 shadow-2xl border-4 border-cyan-200/50">
        <Upload className="w-16 h-16 mx-auto text-cyan-600 mb-6"/>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Export Project Artifacts</h1>
        <p className="text-gray-600 mb-6">Select the format and content you wish to export for the **{selectedProject?.title || 'Current Project'}**.</p>

        <div className="space-y-4 mb-8">
          <button className="w-full py-3 bg-cyan-100 text-cyan-800 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-cyan-200 transition-all">
            <FileText className="w-5 h-5"/> Export Final Report (PDF)
          </button>
          <button className="w-full py-3 bg-blue-100 text-blue-800 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-200 transition-all">
            <Database className="w-5 h-5"/> Export Audit Log (JSON/CSV)
          </button>
        </div>

        <button
          onClick={() => setCurrentPage('project-detail')}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-2xl font-bold hover:from-blue-500 hover:to-cyan-500 transition-all transform hover:scale-[1.01] shadow-xl"
        >
          Go Back to Project Details
        </button>
      </div>
    </div>
  );

  // --- Submit Deliverable Page (Student/Project Feature) ---
  const SubmitDeliverablePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8 flex items-center justify-center">
      <div className="max-w-lg w-full text-center bg-white rounded-3xl p-10 shadow-2xl border-4 border-pink-200/50">
        <Send className="w-16 h-16 mx-auto text-purple-600 mb-6"/>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Formal Submission</h1>
        <p className="text-gray-600 mb-6">This action locks the current document version and sends it for **Supervisor Approval** for **{selectedProject?.title || 'Current Project'}**.</p>

        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg text-yellow-800 font-semibold mb-6">
            <p className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5"/>
                Are you sure? This version cannot be edited after submission.
            </p>
        </div>

        <button
          onClick={() => {
            console.log(`FORMAL SUBMISSION: Project ${selectedProject?.id} submitted for review.`);
            setCurrentPage('project-detail'); // Simulate submission complete
          }}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-[1.01] shadow-xl"
        >
          Confirm & Submit to Supervisor
        </button>
        <button
          onClick={() => setCurrentPage('project-detail')}
          className="w-full mt-4 py-3 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-all"
        >
          Cancel and Return
        </button>
      </div>
    </div>
  );

  // --- Student Dashboard ---
  const StudentDashboard = () => {
    // Static data needed for the dashboard (not project-specific)
    const recentActivities = [
      { id: 1, type: 'approval', message: 'Dr. Rahman approved your Literature Review', time: '2 hours ago', icon: '✅', color: 'text-green-600' },
      { id: 2, type: 'comment', message: 'New comment on Methodology document', time: '5 hours ago', icon: '💬', color: 'text-blue-600' },
      { id: 3, type: 'deadline', message: 'Data Collection due in 3 days', time: '1 day ago', icon: '⚠️', color: 'text-orange-600' },
      { id: 4, type: 'upload', message: 'Nafiz uploaded Dataset Analysis v2', time: '1 day ago', icon: '📤', color: 'text-purple-600' }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Floating Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-2xl font-black text-white">R</span>
                  </div>
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RPPT</span>
                </div>
                <nav className="hidden md:flex gap-6">
                  <a href="#" className="text-blue-600 font-bold relative group">
                    Dashboard
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                  </a>
                  <a href="#" onClick={() => setCurrentPage('dashboard')} className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-110 inline-block">Projects</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-110 inline-block">Documents</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-110 inline-block">Timeline</a>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-64 pl-10 pr-4 py-2 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all group-hover:border-gray-300"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition" />
                </div>
                <button
                  onClick={() => setNotifications(0)}
                  className="relative p-3 hover:bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transition-all group"
                >
                  <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition group-hover:animate-bounce" />
                  {notifications > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-xs font-bold flex items-center justify-center animate-pulse">
                      {notifications}
                    </span>
                  )}
                </button>
                <button className="p-3 hover:bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transition-all group">
                  <User className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition" />
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Hero Section */}
          <div className="mb-8 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -z-10"></div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 animate-gradient">
              Welcome back, Ahnaf! 👋
            </h1>
            <p className="text-gray-600 text-xl">Here's what's happening with your projects today</p>
          </div>
          {/* Animated Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: FileText, label: 'Active Projects', value: '3', color: 'from-blue-500 to-cyan-400', emoji: '📚' },
              { icon: CheckCircle, label: 'Completed Tasks', value: '16', color: 'from-green-500 to-emerald-400', emoji: '✅' },
              { icon: Clock, label: 'Pending Reviews', value: '5', color: 'from-orange-500 to-yellow-400', emoji: '⏰' },
              { icon: MessageSquare, label: 'New Comments', value: '12', color: 'from-purple-500 to-pink-400', emoji: '💬' }
            ].map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Projects List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-black text-gray-900">My Projects 🚀</h2>
                <button
                  onClick={() => setCurrentPage('create-project')}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-5 h-5" />
                  New Project
                </button>
              </div>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentPage('project-detail');
                    }}
                    className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden transform hover:scale-102"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all group-hover:shadow-2xl`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition">{project.title}</h3>
                          <p className="text-sm text-gray-600 font-semibold">Supervisor: {project.supervisor}</p>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-xs font-black ${
                        project.status === 'Review' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      } shadow-lg`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="mb-4 relative z-10">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2 font-semibold">
                        <span>Progress</span>
                        <span className="font-black text-gray-900 text-lg drop-shadow-sm">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-3 rounded-full transition-all duration-1000 bg-gradient-to-r ${project.color} shadow-lg`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm relative z-10">
                      <div className="flex items-center gap-4 font-semibold">
                        <span className="text-gray-600">
                          <strong className="text-gray-900 font-black">{project.completed}</strong>/{project.milestones} milestones
                        </span>
                        <span className="text-gray-600">📅 {project.dueDate}</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Deadlines */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-6 border-2 border-orange-100 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">Upcoming Deadlines ⏰</h3>
                </div>
                <div className="space-y-3">
                  {getProjectData(1).milestones.filter(m => m.status !== 'completed').slice(0, 3).map((milestone, i) => (
                    <div key={milestone.id} className="flex items-start gap-3 p-3 rounded-2xl bg-white hover:bg-orange-50 transition-all cursor-pointer border border-orange-100 group">
                      <div className={`w-3 h-3 rounded-full mt-2 animate-pulse ${
                        milestone.status === 'in-progress' ? 'bg-orange-500' : 'bg-gray-400'
                      }`}></div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition">{milestone.title}</p>
                        <p className="text-xs text-gray-600 mt-1 font-semibold">📅 {milestone.dueDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Recent Activity */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border-2 border-purple-100 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">Recent Activity ⚡</h3>
                </div>
                <div className="space-y-3">
                  {recentActivities.map(activity => (
                    <div key={activity.id} className="p-3 rounded-2xl bg-white hover:bg-purple-50 transition-all cursor-pointer border border-purple-100 group">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">{activity.icon}</span>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 font-semibold group-hover:text-purple-600 transition">{activity.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </div>
    );
  };

  // --- Project Detail Page ---
  const ProjectDetailPage = () => {
    // Dynamically retrieve project-specific data based on the selected project ID
    const project = getProjectData(selectedProject?.id);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 p-10 text-center">
                <p className="text-xl font-bold text-red-600">Project Not Found. Returning to Dashboard...</p>
                <button onClick={() => setCurrentPage('dashboard')} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Go to Dashboard</button>
            </div>
        );
    }

    const milestones = project.milestones;
    const documents = project.documents;
    const comments = project.comments;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentPage('dashboard')}
                  className="p-2 hover:bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl transition-all group"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 rotate-180 transition" />
                </button>
                <div>
                  <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{project.details.title}</h1>
                  <p className="text-sm text-gray-600 font-semibold">Project Overview</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* --- UPDATED: Export Button navigates to new page --- */}
                <button
                  onClick={() => setCurrentPage('export-project')}
                  className="px-5 py-2.5 border-2 border-gray-300 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-105"
                >
                  📊 Export
                </button>
                {/* --- UPDATED: Submit Button navigates to new page --- */}
                <button
                  onClick={() => setCurrentPage('submit-deliverable')}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg"
                >
                  📤 Submit Deliverable
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Project Hero Card */}
          <div className={`bg-gradient-to-r ${project.details.color} rounded-3xl p-8 mb-8 text-white shadow-2xl relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                  {project.details.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-black mb-1">{project.details.title}</h2>
                  <p className="text-white/80 font-semibold">Supervised by {project.details.supervisor}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-white/80 text-sm mb-1 font-semibold">Progress</p>
                  <p className="text-4xl font-black">{project.details.progress}%</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-white/80 text-sm mb-1 font-semibold">Milestones</p>
                  <p className="text-4xl font-black">{project.details.completed}/{project.details.milestones}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-white/80 text-sm mb-1 font-semibold">Due Date</p>
                  <p className="text-2xl font-black">{project.details.dueDate}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-white/80 text-sm mb-1 font-semibold">Status</p>
                  <p className="text-2xl font-black">{project.details.status}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-white rounded-2xl p-2 shadow-lg border-2 border-gray-100">
            {['milestones', 'documents', 'timeline', 'team', 'comments'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 font-bold rounded-xl transition-all transform hover:scale-105 capitalize ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab === 'milestones' && '🎯'}
                {tab === 'documents' && '📄'}
                {tab === 'timeline' && '📅'}
                {tab === 'team' && '👥'}
                {tab === 'comments' && '💬'}
                {' '}{tab}
              </button>
            ))}
          </div>

          {/* --- Milestones Content --- */}
          {activeTab === 'milestones' && (
            <div className="grid grid-cols-1 gap-4">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.id}
                  className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all group transform hover:scale-102"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg transition-all transform group-hover:scale-110 group-hover:rotate-6 ${
                        milestone.status === 'completed' ? 'bg-gradient-to-br from-green-500 to-emerald-400 text-white' :
                          milestone.status === 'in-progress' ? 'bg-gradient-to-br from-orange-500 to-yellow-400 text-white' :
                            'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-600'
                        }`}>
                        M{index + 1}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-100 my-2 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition">{milestone.title}</h3>
                          <p className="text-gray-600 mb-3 font-medium">{milestone.description}</p>
                          <div className="flex items-center gap-4 text-sm font-semibold">
                            <span className="text-gray-600">👤 Owner: <strong className="text-gray-900">{milestone.owner}</strong></span>
                            <span className="text-gray-600">📅 Due: <strong className="text-gray-900">{milestone.dueDate}</strong></span>
                            <span className="text-gray-600">📄 Documents: <strong className="text-gray-900">{milestone.documents || 0}</strong></span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {milestone.status === 'completed' && (
                            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-full text-xs font-black flex items-center gap-2 shadow-lg">
                              <Check className="w-4 h-4" /> Completed
                            </span>
                          )}
                          {milestone.status === 'in-progress' && (
                            <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full text-xs font-black shadow-lg animate-pulse">
                              ⚡ In Progress
                            </span>
                          )}
                          {milestone.status === 'pending' && (
                            <span className="px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-full text-xs font-black shadow-lg">
                              ⏳ Pending
                            </span>
                          )}
                          <button className="p-2 hover:bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl transition-all group/btn">
                            <MoreVertical className="w-5 h-5 text-gray-500 group-hover/btn:text-blue-600 transition" />
                          </button>
                        </div>
                      </div>
                      {milestone.status === 'in-progress' && (
                        <div className="flex gap-3 mt-4">
                          <button 
                            onClick={() => setCurrentPage('upload-document')}
                            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-lg transform hover:scale-105"
                          >
                            <Upload className="w-4 h-4" /> Upload Document
                          </button>
                          <button className="px-5 py-2.5 border-2 border-gray-300 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-105">
                            👁️ View Details
                          </button>
                          <button className="px-5 py-2.5 border-2 border-green-300 rounded-2xl font-bold text-green-700 hover:bg-green-50 transition-all transform hover:scale-105">
                            ✅ Mark Complete
                          </button>
                        </div>
                      )}
                      {milestone.status === 'completed' && (
                        <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-green-900">Completed & Approved ✨</p>
                              <p className="text-sm text-green-700">Supervisor feedback available.</p>
                            </div>
                            <button className="px-4 py-2 bg-white border-2 border-green-300 rounded-xl font-bold text-green-700 hover:bg-green-50 transition-all">
                              View Feedback
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* --- Documents Tab --- */}
          {activeTab === 'documents' && (
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Project Documents 📄</h3>
                <button 
                  onClick={() => setCurrentPage('upload-document')}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" /> Upload New
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, i) => (
                  <div key={i} className="p-4 rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all group cursor-pointer bg-gradient-to-br from-white to-gray-50 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">{doc.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-600 font-semibold mb-2">
                          <span>📦 {doc.size}</span>
                          <span>📅 {doc.date}</span>
                          <span>🔄 v{doc.versions || 1}</span>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-black ${
                          doc.status === 'approved' ? 'bg-gradient-to-r from-green-500 to-emerald-400 text-white' : 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white'
                        }`}>
                          {doc.status === 'approved' ? '✅ Approved' : '⏳ In Review'}
                        </span>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-xl transition-all">
                        <Download className="w-5 h-5 text-gray-500 hover:text-blue-600 transition" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* --- Timeline Tab (Placeholder) --- */}
          {activeTab === 'timeline' && (
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg text-center py-16">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4"/>
                <h3 className="text-2xl font-black text-gray-900">Visual Timeline Coming Soon</h3>
                <p className="text-gray-600">A detailed Gantt chart view of all project milestones and dependencies will appear here.</p>
            </div>
          )}
          {/* --- Team Tab --- */}
          {activeTab === 'team' && (
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Team Members 👥</h3>
                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Member
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Ahnaf Abid Shan', role: 'Team Lead', id: '0112310423', avatar: '🧑‍💻', color: 'from-blue-500 to-cyan-400' },
                  { name: 'Mahmudul Hasan Rahad', role: 'Developer', id: '0112310420', avatar: '👨‍💻', color: 'from-purple-500 to-pink-400' },
                  { name: 'Nafiz Imtiaz Labib', role: 'Data Analyst', id: '0112310422', avatar: '📊', color: 'from-green-500 to-emerald-400' },
                  { name: 'Raiyana Islam Aahir', role: 'Designer', id: '0112310363', avatar: '🎨', color: 'from-orange-500 to-yellow-400' },
                  { name: 'Md. Imjam Hosen', role: 'Tester', id: '0112230335', avatar: '🧪', color: 'from-red-500 to-pink-400' },
                  { name: project.details.supervisor, role: 'Supervisor', id: 'Faculty', avatar: '👨‍🏫', color: 'from-indigo-500 to-purple-400' }
                ].map((member, i) => (
                  <div key={i} className="p-4 rounded-2xl border-2 border-gray-200 hover:border-purple-400 transition-all group cursor-pointer bg-gradient-to-br from-white to-gray-50 hover:shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                        {member.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition">{member.name}</h4>
                        <p className="text-sm font-bold text-gray-600">{member.role}</p>
                        <p className="text-xs text-gray-500 font-semibold mt-1">ID: {member.id}</p>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-xl transition-all">
                        <MessageSquare className="w-5 h-5 text-gray-500 hover:text-purple-600 transition" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* --- Comments Tab --- */}
          {activeTab === 'comments' && (
            <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-purple-600"/> Discussion Thread
              </h3>

              <div className="space-y-6 max-h-[500px] overflow-y-auto mb-6 pr-4">
                {comments.map(comment => (
                  <div key={comment.id} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md ${comment.author.includes('Dr.') ? 'bg-indigo-500' : 'bg-blue-500'}`}>
                        {comment.author[0]}
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-gray-900">{comment.author} <span className="text-xs font-normal text-gray-500 ml-2">{comment.time}</span></p>
                        <p className="text-gray-700 mt-1">{comment.text}</p>
                        <button className="text-xs font-semibold text-blue-500 hover:text-blue-700 mt-1">Reply</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Input */}
              <div className="border-t pt-4">
                <div className="flex gap-3">
                  <textarea
                    placeholder="Add a new comment or mention a team member (@name)"
                    rows="3"
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 resize-none"
                  ></textarea>
                  <button className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center hover:from-purple-500 hover:to-pink-500 shadow-lg transform hover:scale-105 transition-all">
                    <Send className="w-6 h-6"/>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Supervisor Dashboard ---
  const SupervisorDashboard = () => {

    const netAccumulatedCashFlow = strategicAnalysisData.financial[strategicAnalysisData.financial.length - 1].accumulated.toFixed(2);
    const breakEvenYear = strategicAnalysisData.financial.find(f => f.accumulated >= 0)?.year || 'N/A';
    const lastNegativeYear = strategicAnalysisData.financial.filter(f => f.accumulated < 0).pop()?.year || 0;

    // Static data needed for the dashboard (not project-specific)
    const recentActivities = [
        { id: 1, type: 'approval', message: 'Dr. Rahman approved Literature Review for Project 1', time: '2 hours ago', icon: '✅', color: 'text-green-600' },
        { id: 2, type: 'comment', message: 'New comment on Methodology document for Project 2', time: '5 hours ago', icon: '💬', color: 'text-blue-600' },
    ];


    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-2xl font-black text-white">R</span>
                  </div>
                  <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">RPPT</span>
                </div>
                <nav className="hidden md:flex gap-6">
                  <a href="#" className="text-purple-600 font-bold relative group">
                    Overview
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
                  </a>
                  <a href="#" onClick={() => setCurrentPage('dashboard')} className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-110 inline-block">Projects</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-110 inline-block">Reviews</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-110 inline-block">Reports</a>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setNotifications(0)}
                  className="relative p-3 hover:bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transition-all group"
                >
                  <Bell className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition group-hover:animate-bounce" />
                  {notifications > 0 && (
                    <span className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-xs font-bold flex items-center justify-center animate-pulse">
                      {notifications}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setCurrentPage('login')}
                  className="p-3 hover:bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transition-all group"
                >
                  <User className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition" />
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-3 animate-gradient">
              Supervisor Dashboard 👨‍🏫
            </h1>
            <p className="text-gray-600 text-xl">Monitor and review student projects</p>
          </div>
          {/* Supervisor Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: FileText, label: 'Supervised Projects', value: projects.length, color: 'from-purple-500 to-pink-400', emoji: '📚' },
              { icon: Clock, label: 'Pending Reviews', value: pendingReviews.length, color: 'from-orange-500 to-red-400', emoji: '⏰' },
              { icon: AlertCircle, label: 'At Risk', value: '3', color: 'from-red-500 to-pink-500', emoji: '⚠️' },
              { icon: Award, label: 'Approved This Month', value: '45', color: 'from-green-500 to-emerald-400', emoji: '🏆' }
            ].map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>

          {/* --- Strategic Overview --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Financial Feasibility */}
            <div className="lg:col-span-1 bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-black text-gray-900">Financial Feasibility 💰</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">Summary of the projected cash flow and break-even analysis over 10 years.</p>

              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200">
                  <p className="text-sm text-indigo-700 font-semibold mb-1">Break-Even Year</p>
                  <p className="text-3xl font-black text-indigo-800">{breakEvenYear}</p>
                </div>
                <div className={`p-3 rounded-xl border ${netAccumulatedCashFlow >= 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <p className="text-sm font-semibold mb-1">10-Year Accumulated Cash Flow (NPV)</p>
                  <p className={`text-3xl font-black ${netAccumulatedCashFlow >= 0 ? 'text-green-800' : 'text-red-800'}`}>
                    ${Math.abs(netAccumulatedCashFlow).toLocaleString()}
                  </p>
                  <p className={`text-xs mt-1 font-medium ${netAccumulatedCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {netAccumulatedCashFlow >= 0 ? `Positive Return by Year ${lastNegativeYear + 1}` : 'Still Negative'}
                  </p>
                </div>
              </div>

            </div>

            {/* SWOT Analysis */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-400 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-black text-gray-900">SWOT Analysis (Strategic Risks) 🎯</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {strategicAnalysisData.swot.map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl border-2 ${item.color}`}>
                    <h4 className="font-black text-lg mb-1 flex items-center gap-2">
                      {item.type === 'Strength' && '💪'}
                      {item.type === 'Weakness' && '📉'}
                      {item.type === 'Opportunity' && '⭐'}
                      {item.type === 'Threat' && '🚨'}
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* --- End Strategic Overview --- */}

          {/* Pending Reviews */}
          <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">Pending Reviews ⏰</h2>
              <div className="flex items-center gap-2">
                <button className="px-5 py-2.5 border-2 border-gray-300 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filter
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {pendingReviews.map((review, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-2xl border-2 border-gray-200 hover:border-purple-400 transition-all group bg-gradient-to-r from-white to-purple-50/30 hover:shadow-lg cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 group-hover:text-purple-600 transition">{review.document}</h3>
                      <p className="text-sm text-gray-600 font-semibold">{review.student} • {review.project}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-xs font-black shadow-lg ${
                      review.priority === 'high' ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse' : 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white'
                    }`}>
                      {review.priority === 'high' ? '🔥 High Priority' : '⚡ Medium Priority'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-semibold">{review.submitted}</span>
                    <button 
                      onClick={() => setCurrentPage('review-submission')}
                      className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all flex items-center gap-2 shadow-lg transform hover:scale-105"
                    >
                      <Eye className="w-4 h-4" /> Review
                    </button>
                    <button className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold hover:from-green-500 hover:to-emerald-500 transition-all flex items-center gap-2 shadow-lg transform hover:scale-105">
                      <Check className="w-4 h-4" /> Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* All Supervised Projects */}
          <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
            <h2 className="text-2xl font-black text-gray-900 mb-6">All Supervised Projects 📚</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentPage('project-detail');
                  }}
                  className="p-5 rounded-2xl border-2 border-gray-200 hover:border-purple-400 transition-all group cursor-pointer bg-gradient-to-br from-white to-purple-50/20 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="font-black text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition">{project.title}</h3>
                        <p className="text-sm text-gray-600 font-semibold">Team Lead: Ahnaf Abid Shan</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-black shadow-lg ${
                      project.status === 'Review' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2 font-semibold">
                      <span>Overall Progress</span>
                      <span className="font-black text-gray-900">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 bg-gradient-to-r ${project.color} shadow-lg`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-semibold">{project.completed}/{project.milestones} milestones</span>
                    <button className="text-sm font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1">
                      View Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Admin Dashboard ---
  const AdminDashboard = () => {
    const adminUsers = [
      { id: 12345, name: 'Dr. Rahman', role: 'Supervisor', avatar: 'D', color: 'bg-indigo-500', status: 'Active' },
      { id: 54321, name: 'Ahnaf Abid Shan', role: 'Student', avatar: 'A', color: 'bg-blue-500', status: 'Active' },
      { id: 98765, name: 'Admin User 01', role: 'Administrator', avatar: 'A', color: 'bg-gray-700', status: 'Active' },
      { id: 33503, name: 'Nafiz Imtiaz', role: 'Student', avatar: 'N', color: 'bg-yellow-500', status: 'Inactive' },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all transform group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-2xl font-black text-white">R</span>
                  </div>
                  <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">RPPT Admin</span>
                </div>
                <nav className="hidden md:flex gap-6">
                  <a href="#" className="text-indigo-600 font-bold relative group">
                    Overview
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-110 inline-block">Audit</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-all hover:scale-110 inline-block">Settings</a>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentPage('login')}
                  className="p-3 hover:bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl transition-all group"
                >
                  <User className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              System Administrator ⚙️
            </h1>
            <p className="text-gray-600 text-xl">Central management for users, integrity, and system health.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* System Health / Metrics (Left Column) */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
                <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6 text-indigo-600"/> System Metrics
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-gray-700 font-semibold">
                    <span>Uptime</span>
                    <span className="font-black text-green-600">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700 font-semibold">
                    <span>Active Sessions</span>
                    <span className="font-black">148</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700 font-semibold">
                    <span>Total Storage</span>
                    <span className="font-black">5.2 TB</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-gray-700 font-semibold">
                    <span>Projects Total</span>
                    <span className="font-black">{projects.length}</span>
                  </div>
                </div>
              </div>

              {/* Data Integrity Check */}
              <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-black text-gray-500 mb-1 uppercase tracking-wider">UNVERIFIED CHECKSUMS</h2>
                    <span className="text-5xl font-black text-gray-900">0</span>
                  </div>
                  <AlertCircle className="w-8 h-8 text-yellow-500" />
                </div>
              </div>

              {/* Security & Audit Actions */}
              <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
                <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-600"/> Audit & Security
                </h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-2 py-3 px-4 rounded-xl bg-purple-50 text-purple-800 font-bold hover:bg-purple-100 transition">
                    <Download className="w-4 h-4" /> Export Full Audit Log
                  </button>
                  <button className="w-full flex items-center gap-2 py-3 px-4 rounded-xl bg-gray-50 text-gray-800 font-bold hover:bg-gray-100 transition">
                    <Activity className="w-4 h-4" /> View Recent System Activity
                  </button>
                </div>
              </div>
            </div>

            {/* User & Role Management (Right Column) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600"/> User & Role Management
                  </h2>
                  <button
                    onClick={() => setCurrentPage('create-user')}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold hover:from-purple-500 hover:to-indigo-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Plus className="w-5 h-5" /> New Account
                  </button>
                </div>

                {/* User List */}
                <div className="space-y-3">
                  {adminUsers.map(user => (
                    <div key={user.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-indigo-400 transition-all bg-gray-50 hover:bg-white">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-black shadow-md ${user.color}`}>
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.role} | ID: {user.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-black ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                        <button className="p-2 text-gray-500 hover:text-blue-600 transition">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-600 transition">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Page Router
  const pages = {
    'login': <LoginPage />,
    'dashboard': <StudentDashboard />,
    'project-detail': <ProjectDetailPage />,
    'supervisor': <SupervisorDashboard />,
    'admin': <AdminDashboard />,
    'create-project': <CreateProjectPage />,
    'create-user': <CreateUserPage />,
    'upload-document': <UploadDocumentPage />,
    'export-project': <ExportProjectPage />,
    'submit-deliverable': <SubmitDeliverablePage />,
    'review-submission': <ReviewSubmissionPage />,
  };

  return (
    <div className="w-full">
      {pages[currentPage]}

      {/* Navigation Helper - Enhanced */}
      {currentPage !== 'login' && (
        <div className="fixed bottom-6 right-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-5 border-2 border-gray-200 z-50">
          <p className="text-xs font-black text-gray-500 mb-3 uppercase tracking-wider">🧭 Demo Navigation</p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setCurrentPage('login')}
              className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-bold hover:from-gray-500 hover:to-gray-600 transition-all transform hover:scale-105 shadow-lg"
            >
              🔐 Login
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:from-blue-500 hover:to-cyan-500 transition-all transform hover:scale-105 shadow-lg"
            >
              👨‍🎓 Student
            </button>
            <button
              onClick={() => setCurrentPage('supervisor')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg"
            >
              👨‍🏫 Supervisor
            </button>
            <button
              onClick={() => setCurrentPage('admin')}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-gray-600 text-white rounded-xl font-bold hover:from-indigo-500 hover:to-gray-500 transition-all transform hover:scale-105 shadow-lg"
            >
              ⚙️ Admin
            </button>
          </div>
        </div>
      )}
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default RPPTDesignSystem;
