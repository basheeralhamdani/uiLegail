// Helper utilities for building simulate payloads
module.exports = {
  sampleEvents() {
    return [
      { type: 'transcript.partial', text: 'Hi, this is Legail calling on behalf of your attorney.', delayMs: 300 },
      { type: 'transcript.partial', text: 'Can I confirm your full name?', delayMs: 600 },
      { type: 'transcript.final', text: 'My name is John Q. Public.' , delayMs: 400},
      { type: 'extraction.result', extractedJson: { client: { name: 'John Q. Public' } }, delayMs: 200 }
    ];
  }
};
