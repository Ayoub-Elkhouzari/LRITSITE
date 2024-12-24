const PDF_URL = "@/assets/Document/MIT.pdf";

const DownloadPDF = () => {
  return (
    <div>
      <a
        href={PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Télécharger le PDF
      </a>
    </div>
  );
};

export default DownloadPDF;
