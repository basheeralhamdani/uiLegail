import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from '../../../contexts/SidebarContext';
import { getMatter, updateMatter } from '../../../api/matters';

const CaseAiCanvas = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { matterId } = useParams();
  const [matter, setMatter] = useState(null);

  useEffect(() => {
    const currentMatter = getMatter(matterId);
    if (currentMatter) {
      setMatter(currentMatter);
    }
  }, [matterId]);

  const handleFinalize = () => {
    const finalDocument = `<h4>1. Conveyance</h4><p>The Grantor, <strong>${matter.clientName}</strong>, ...</p>`; // Mock document
    const chatHistory = [
      { speaker: 'Attorney', text: 'Add a clause for a contingent beneficiary.' },
      { speaker: 'AI', text: 'Of course. Please provide the full name of the contingent beneficiary.' },
    ];

    updateMatter(matterId, {
      status: 'Completed',
      drafting: {
        finalDocument,
        chatHistory,
      },
      lastActivity: 'Drafting completed',
    });

    navigate('/case-delivery');
  };

  if (!matter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 flex flex-col h-screen">
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center flex-shrink-0">
            <button onClick={toggleSidebar} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <div><h2 className="text-xl font-bold text-gray-900 dark:text-white">AI Canvas: {matter.clientName} - {matter.documentType}</h2><p className="text-sm text-gray-500 dark:text-gray-400">Draft v1.0</p></div>
            <button onClick={handleFinalize} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">Finalize</button>
        </header>
        <div className="flex-1 flex overflow-hidden">
  <aside className="w-96 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">AI Assistant (Gemini)</h3>
    </div>

    <div className="flex-1 p-4 overflow-y-auto space-y-4">
      <div className="p-3 bg-white dark:bg-gray-800 border-l-4 border-blue-400 rounded-r-lg shadow">
        <p className="text-sm font-semibold text-blue-500 dark:text-blue-400">Suggestion: Michigan Law Compliance</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          Consider adding a clause specifying the transfer tax exemption under MCL 207.526(a) for transfers between parent and child-in-law to ensure compliance.
        </p>
        <div className="mt-2 space-x-2">
          <button className="text-xs bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded">Accept</button>
          <button className="text-xs bg-gray-600 hover:bg-gray-500 text-white py-1 px-2 rounded">Dismiss</button>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
          <p className="text-sm">What happens if the grantee passes away before the grantor?</p>
        </div>
      </div>

      <div className="flex justify-start">
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg max-w-xs shadow">
          <p className="text-sm">
            Standard practice is to add language clarifying that if the grantee predeceases the grantor, the conveyance to that grantee is void and the grantor retains fee simple title. Would you like me to draft that clause?
          </p>
        </div>
      </div>
    </div>

    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="relative">
        <input
          type="text"
          placeholder="Instruct AI to make changes..."
          className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-full p-3 pl-4 pr-12 text-sm"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-8 w-8 flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  </aside>

  <main className="flex-1 p-6 overflow-y-auto">
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-6">LADY BIRD DEED (ENHANCED LIFE ESTATE)</h2>
      <article className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <h4>1. Conveyance</h4>
        <p>
          The Grantor, <strong>John B. Grantor</strong>, whose address is 456 Oak Avenue, Pleasantville, MI 48001, for the sum of One Dollar ($1.00),
          conveys to the Grantee, <strong>Jane A. Grantee</strong>, whose address is 789 Pine Street, Pleasantville, MI 48002, the following described
          real property situated in the County of Oakland, State of Michigan:
        </p>
        <p>
          <em>
            Lot 42 of Pleasant Meadows No. 2, according to the plat thereof, as recorded in Liber 100, Page 50, Oakland County Records.
            Commonly known as: 123 Maple Street, Anytown, MI 48003. Tax Parcel Number: 01-23-456-789.
          </em>
        </p>

        <h4>2. Reservation of Life Estate with Powers</h4>
        <p>
          The Grantor reserves unto himself an enhanced life estate, which includes the full rights and authority to sell, convey, mortgage,
          lease, or otherwise dispose of the property in fee simple during his lifetime, without the joinder of the Grantee.
          The Grantor further reserves the right to all rents, profits, and use of the property during his lifetime.
        </p>

        <h4>3. Vesting of Remainder Interest</h4>
        <p>
          Upon the death of the Grantor, the full fee simple title to the above-described premises shall automatically vest in the Grantee,
          provided that the property has not been sold, conveyed, or otherwise disposed of by the Grantor during his lifetime.
          The Grantee shall then take full ownership of the property without the need for probate proceedings.
        </p>

        <h4>4. Warranty of Title</h4>
        <p>
          The Grantor covenants that he is lawfully seized of the premises, that they are free from all encumbrances except those of record,
          and that he will warrant and defend the same against all lawful claims of all persons claiming by, through, or under him.
        </p>

        <h4>5. Death of Grantee Before Grantor</h4>
        <p>
          If the Grantee predeceases the Grantor, this conveyance shall be deemed null and void, and the property shall remain vested solely
          in the Grantor. No rights of inheritance or survivorship shall accrue to the heirs or assigns of the deceased Grantee.
        </p>

        <h4>6. Tax and Legal Compliance</h4>
        <p>
          This conveyance is exempt from state and county real estate transfer tax pursuant to MCL 207.526(a), being a transfer between
          parent and child-in-law. The parties agree that this instrument complies with all Michigan statutory and recording requirements,
          and any recording fees shall be borne by the Grantee.
        </p>

        <h4>7. Execution</h4>
        <p>
          IN WITNESS WHEREOF, the Grantor has executed this Enhanced Life Estate Deed (Lady Bird Deed) on this 22nd day of October, 2025.
        </p>

        <p className="mt-6">
          ________________________________<br />
          <strong>John B. Grantor</strong> (Grantor)
        </p>

        <p className="mt-6">
          STATE OF MICHIGAN )<br />
          COUNTY OF OAKLAND ) ss.
        </p>
        <p>
          On this day personally appeared before me, a Notary Public in and for said County and State, the above-named
          <strong>John B. Grantor</strong>, who acknowledged that he executed the foregoing instrument as his free act and deed.
        </p>

        <p className="mt-6">
          ________________________________<br />
          Notary Public, Oakland County, Michigan<br />
          My Commission Expires: ___________<br />
          Acting in the County of Oakland
        </p>
      </article>
    </div>
  </main>
</div>

    </div>
  );
};

export default CaseAiCanvas;