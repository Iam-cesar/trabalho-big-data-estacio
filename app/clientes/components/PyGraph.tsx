import { useState } from 'react';

type PyGraphProps = {
  path?: string;
};

const PyGraph = ({ path = '/graphs/graph.html' }: PyGraphProps) => {
  const [htmlContent, setHtmlContent] = useState('');

  const fetchHtmlContent = async () => {
    try {
      const response = await fetch(path);
      const fetchedHtmlContent = await response.text();
      const scriptElements = Array.from(
        new DOMParser().parseFromString(fetchedHtmlContent, 'text/html')
          .scripts,
      );
      scriptElements.forEach((script) => {
        const newScript = document.createElement('script');
        Array.from(script.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });
        newScript.appendChild(document.createTextNode(script.innerHTML));
        document.body.appendChild(newScript);
      });
      setHtmlContent(fetchedHtmlContent);
    } catch (error) {
      console.error('Error fetching HTML content:', error);
    }
  };
  fetchHtmlContent();

  return (
    <div className="mb-10">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default PyGraph;
