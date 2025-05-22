
const patterns = {
  emails: /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}\b/g,
  phoneNumbers: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
  urls: /https?:\/\/\S+/g,
  creditCards: /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g,
  currency: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g,
  time: /\b\d{1,2}:\d{2}\s?(?:AM|PM)?\b/g, 
  htmlTags: /<\/?\w+.*?>/g,
  hashtags: /#\w+/g
};


const extractData = (text) => {
  return Object.fromEntries(
      Object.entries(patterns).map(([key, pattern]) => [key, text.match(pattern) || []])
  );
};


const sampleText = `
  Email: user@example.com, firstname.lastname@company.co.uk
  Phone: (123) 456-7890, 123-456-7890, 123.456.7890
  URL: https://www.example.com, https://subdomain.example.org/page
  Credit Card: 1234 5678 9012 3456, 1234-5678-9012-3456
  Time: 14:30, 2:30 PM
  HTML: <p>Paragraph</p>, <div class="example">Content</div>, <img src="image.jpg" alt="description">
  Hashtags: #example, #ThisIsAHashtag
  Currency: $19.99, $1,234.56
`;

// Run extraction
console.log(extractData(sampleText));
