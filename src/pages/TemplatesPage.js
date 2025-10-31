import React, { useState } from 'react';
import TemplateCard from '../components/features/templates/TemplateCard';
import TemplatePreviewModal from '../components/features/templates/TemplatePreviewModal';

const iconClass = "h-12 w-12";

const templatesData = [
  {
    id: 1,
    title: 'Lady Bird Deed',
    description: 'Enhanced life estate deed to avoid probate for Michigan real estate.',
    icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    previewContent: 'This is a preview of the Lady Bird Deed. It is a legal document that allows for the transfer of real estate upon death without going through probate.'
  },
  {
    id: 2,
    title: 'Will',
    description: 'Designates beneficiaries and executor for an estate.',
    icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    previewContent: 'This is a preview of a Will. A will is a legal document that sets forth your wishes regarding the distribution of your property and the care of any minor children.'
  },
  {
    id: 3,
    title: 'Power of Attorney',
    description: 'Appoints an agent to handle financial and legal matters.',
    icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2h2v-2h2v-2h2v-2h2v-2h2z" /></svg>,
    previewContent: 'This is a preview of a Power of Attorney document. It is a legal document that gives one person the power to act for another person.'
  },
  {
    id: 4,
    title: 'Healthcare Directive',
    description: 'Specifies medical treatment preferences.',
    icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
    previewContent: 'This is a preview of a Healthcare Directive. It is a legal document that allows you to state your wishes for end-of-life medical care.'
  },
];

const TemplatesPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handlePreview = (template) => {
    setSelectedTemplate(template);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Document Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templatesData.map(template => (
          <TemplateCard key={template.id} template={template} onPreview={handlePreview} />
        ))}
      </div>
      <TemplatePreviewModal template={selectedTemplate} onClose={handleClose} />
    </>
  );
};

export default TemplatesPage;
