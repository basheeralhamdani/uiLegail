import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Dashboard from './pages/DashboardPage';
import Clients from './pages/ClientsPage';
import Templates from './pages/TemplatesPage';
import AICallReview from './components/features/case/AICallReview';
import CaseAiCanvas from './components/features/case/CaseAiCanvas';
import CaseDelivery from './components/features/case/CaseDelivery';
import CaseReviewData from './components/features/case/CaseReviewData';
import CaseSelectTemplate from './components/features/case/CaseSelectTemplate';
import ConversationalIntake from './components/features/client/ConversationalIntake';
import ClientIntake from './components/features/client/ClientIntake';
import CaseReviewPage from './pages/CaseReviewPage';
import SelectFormPage from './pages/SelectFormPage';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import RequireAuth from './components/common/RequireAuth';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Protected routes */}
            <Route path="/" element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="/clients" element={<RequireAuth><Clients /></RequireAuth>} />
            <Route path="/templates" element={<RequireAuth><Templates /></RequireAuth>} />
            <Route path="/ai-call-review/:matterId" element={<RequireAuth><AICallReview /></RequireAuth>} />
            <Route path="/case-ai-canvas/:matterId" element={<RequireAuth><CaseAiCanvas /></RequireAuth>} />
            <Route path="/case-delivery" element={<RequireAuth><CaseDelivery /></RequireAuth>} />
            <Route path="/case-review-data" element={<RequireAuth><CaseReviewData /></RequireAuth>} />
            <Route path="/case-select-template" element={<RequireAuth><CaseSelectTemplate /></RequireAuth>} />
            <Route path="/client-intake/:matterId" element={<RequireAuth><ClientIntake /></RequireAuth>} />
            <Route path="/conversational-intake/:matterId" element={<RequireAuth><ConversationalIntake /></RequireAuth>} />
            <Route path="/case-review/:matterId" element={<RequireAuth><CaseReviewPage /></RequireAuth>} />
            <Route path="/select-form/:matterId" element={<RequireAuth><SelectFormPage /></RequireAuth>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;