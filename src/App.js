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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/ai-call-review/:matterId" element={<AICallReview />} />
          <Route path="/case-ai-canvas/:matterId" element={<CaseAiCanvas />} />
          <Route path="/case-delivery" element={<CaseDelivery />} />
          <Route path="/case-review-data" element={<CaseReviewData />} />
          <Route path="/case-select-template" element={<CaseSelectTemplate />} />
          <Route path="/client-intake/:matterId" element={<ClientIntake />} />
          <Route path="/conversational-intake/:matterId" element={<ConversationalIntake />} />
          <Route path="/case-review/:matterId" element={<CaseReviewPage />} />
          <Route path="/select-form/:matterId" element={<SelectFormPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;