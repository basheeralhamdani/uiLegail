const MATTERS_KEY = 'clientMatters';

const initialMatters = 
[
  {
    id: 1,
    clientName: 'Eleanor Vance',
    documentType: 'Lady Bird Deed',
    status: 'Awaiting Attorney Review',
    source: 'AI Voice Agent Call',
    lastActivity: '15 mins ago',
    intakeFormSentAt: null,
    data: {
      grantorName: 'Eleanor Vance',
      grantorAddress: '456 Oak Avenue, Pleasantville, MI 48001',
      granteeName: 'Samuel Vance',
      granteeAddress: '789 Pine Street, Pleasantville, MI 48002',
      propertyAddress: '123 Maple Street, Anytown, MI 48003',
      propertyCounty: 'Oakland',
      taxParcelNumber: '01-23-456-789',
      subdivisionName: 'Pleasant Meadows No. 2',
      legalDescription: 'Lot 42 of Pleasant Meadows No. 2, according to the plat thereof, as recorded in Liber 100, Page 50, Oakland County Records.',
    },
    transcript: [
        { speaker: 'AI Agent', text: "Hello, this is the automated assistant for Doe & Associates Law. I'm calling to gather initial details for your Lady Bird Deed. Can you please state your full legal name as the property owner?" },
        { speaker: 'Client', text: 'Yes, my name is Eleanor Vance.' },
        { speaker: 'AI Agent', text: 'Thank you, Eleanor. And who will be the grantee, the person receiving the property?' },
        { speaker: 'Client', text: 'That will be my son, Samuel Vance.' },
        { speaker: 'AI Agent', text: 'Understood. What is the common street address of the property?' },
        { speaker: 'Client', text: "It's 123 Maple Street, Anytown, Michigan. The zip is 48003." },
    ]
  },

  {
    id: 2,
    clientName: 'John B. Grantor',
    documentType: 'Lady Bird Deed',
    status: 'Completed',
    source: 'Manual Entry',
    intakeFormSentAt: null,
    data: {},
    transcript: [],
    drafting: {
      finalDocument: "<h4>1. Conveyance</h4><p>The Grantor, <strong>John B. Grantor</strong>, whose address is 456 Oak Avenue, Pleasantville, MI 48001, for the sum of One Dollar ($1.00), conveys to the Grantee, <strong>Jane A. Grantee</strong>, whose address is 789 Pine Street, Pleasantville, MI 48002, the following described real property situated in the County of Oakland, State of Michigan:</p><p><em>Lot 42 of Pleasant Meadows No. 2, according to the plat thereof, as recorded in Liber 100, Page 50, Oakland County Records. Commonly known as: 123 Maple Street, Anytown, MI 48003. Tax Parcel Number: 01-23-456-789.</em></p><h4>2. Reservation of Life Estate with Powers</h4><p>The Grantor reserves unto himself an enhanced life estate, which includes the full rights and authority to sell, convey, mortgage, lease, and otherwise dispose of the property in fee simple during his lifetime, without the joinder of the Grantee. The Grantor further reserves the right to all rents, profits, and use of the property during his lifetime.</p>",
      chatHistory: [
        { speaker: 'Attorney', text: 'What happens if the grantee passes away before the grantor?' },
        { speaker: 'AI', text: 'Standard practice is to add language clarifying that if the grantee predeceases the grantor, the conveyance to that grantee is void and the grantor retains fee simple title. Would you like me to draft that clause?' }
      ]
    }
  },
  {
    id: 3,
    clientName: 'Mary Testator',
    documentType: 'Will',
    status: 'Ready to Draft',
    source: 'Manual Entry',
    lastActivity: 'Yesterday',
    intakeFormSentAt: null,
    data: {},
    transcript: []
  },

  {
    id: 4,
    clientName: 'Robert Livingston',
    documentType: 'Full Trust',
    status: 'Awaiting Client Intake',
    source: 'AI Voice Agent Call',
    lastActivity: 'Just now',
      data: {
        grantorName: 'Robert Livingston',
        grantorAddress: '742 Evergreen Terrace, Dearborn, MI 48126',
        trustExecutionDate: '2025-07-31',
        trustName: 'Robert Livingston Revocable Living Trust',
        amendments: 'None to date',
        maritalStatus: 'Married to Sarah Livingston',
        children: 'Emily Livingston (born 2001-03-12), David Livingston (born 2004-06-18)',
        descendants: 'Descendants include children and their descendants per trust definition',
        initialTrustee: 'Robert Livingston',
        successorTrustees: 'Sarah Livingston (first), John Livingston (second)',
        coTrustees: 'None at this time',
        beneficiaries: 'Emily Livingston and David Livingston',
        shares: '50% to each child',
        contingentBeneficiaries: 'If either child predeceases the grantor, that share passes to their descendants per stirpes',
        specialProvisions: 'Any beneficiary under age 25 shall have their share held in trust until reaching age 25',
        assets: 'Primary Residence at 742 Evergreen Terrace, Dearborn, MI (Parcel #01-45-678-910); Wells Fargo Checking Account #xxxx1234; Vanguard Investment Account #xxxx7890',
        initialFunding: 'Ten Dollars ($10.00) cash to establish the trust corpus',
        reservedPowers: 'Grantor retains full right to amend, revoke, or add/remove property from the trust during lifetime',
        incapacityDefinition: 'Defined as a written determination by two licensed physicians of mental incapacity or court declaration',
        taxId: 'Grantor’s Social Security Number (XXX-XX-6789)',
        governingLaw: 'Michigan',
        executionDate: '2025-07-31',
        notaryName: 'Lisa M. Novak',
        notaryExpiration: '2028-09-12',
        witnesses: 'Michael Turner, Susan James'
      },
     transcript: [
        { speaker: 'AI Agent', text: "Hello, this is the automated assistant for Doe & Associates Law. I'm calling to begin your Full Trust setup. Can you confirm your full legal name?" },
        { speaker: 'Client', text: "Yes, my name is Robert Livingston." },
        { speaker: 'AI Agent', text: "Thank you, Mr. Livingston. Could you please provide your mailing address?" },
        { speaker: 'Client', text: "Sure, it’s 742 Evergreen Terrace, Dearborn, Michigan 48126." },
        { speaker: 'AI Agent', text: "Perfect. And what name will appear on your trust?" },
        { speaker: 'Client', text: "It will be the Robert Livingston Revocable Living Trust." },
        { speaker: 'AI Agent', text: "Understood. Who will serve as your initial trustee and any successor trustees?" },
        { speaker: 'Client', text: "I’ll be the initial trustee. My wife Sarah will be first successor, and my brother John second." },
        { speaker: 'AI Agent', text: "Thank you. And who are your primary beneficiaries?" },
        { speaker: 'Client', text: "My two children, Emily and David, each will receive half." },
        { speaker: 'AI Agent', text: "Got it. That concludes the initial intake for your Full Trust. An attorney will review and prepare your documents shortly." }
     ] 
    }
];


export const initializeMatters = () => {
  localStorage.setItem(MATTERS_KEY, JSON.stringify(initialMatters));
};

export const getMatters = () => {
  const matters = localStorage.getItem(MATTERS_KEY);
  return matters ? JSON.parse(matters) : [];
};

export const getMatter = (id) => {
  const matters = getMatters();
  return matters.find(matter => matter.id === parseInt(id));
};

export const createMatter = (newMatter) => {
  let matters = getMatters();
  const newId = matters.length > 0 ? Math.max(...matters.map(m => m.id)) + 1 : 1;
  const matterWithId = { ...newMatter, id: newId, lastActivity: 'Just now' };
  matters.push(matterWithId);
  localStorage.setItem(MATTERS_KEY, JSON.stringify(matters));
  return matterWithId;
};

export const updateMatter = (id, updatedData) => {
  let matters = getMatters();
  matters = matters.map(matter => {
    if (matter.id === parseInt(id)) {
      return { ...matter, ...updatedData };
    }
    return matter;
  });
  localStorage.setItem(MATTERS_KEY, JSON.stringify(matters));
};
